import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const currentMember = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) return null;

    const user = await ctx.db
      .query("users")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", identity.subject))
      .unique();

    if (!user) return null;
    const company = await ctx.db.get(user.companyId);
    return { user, company };
  },
});

export const createCompany = mutation({
  args: {
    name: v.string(),
    country: v.string(),
    currency: v.string(),
    timezone: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("UNAUTHENTICATED");

    const existing = await ctx.db
      .query("users")
      .withIndex("by_authUserId", (q) => q.eq("authUserId", identity.subject))
      .unique();

    if (existing) return existing.companyId;

    const now = Date.now();
    const baseSlug = args.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "company";
    const slug = `${baseSlug}-${identity.subject.slice(-6).toLowerCase()}`;

    const companyId = await ctx.db.insert("companies", {
      name: args.name.trim(),
      slug,
      country: args.country,
      currency: args.currency,
      timezone: args.timezone,
      status: "ACTIVE",
      plan: "STARTER",
      createdAt: now,
      updatedAt: now,
    });

    await ctx.db.insert("users", {
      authUserId: identity.subject,
      companyId,
      name: identity.name ?? identity.email ?? "Owner",
      email: identity.email ?? "",
      role: "OWNER",
      status: "ACTIVE",
      createdAt: now,
      updatedAt: now,
    });

    return companyId;
  },
});
