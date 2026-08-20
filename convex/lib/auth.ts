import { ConvexError } from "convex/values";
import type { QueryCtx, MutationCtx } from "../_generated/server";

export async function requireIdentity(ctx: QueryCtx | MutationCtx) {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    throw new ConvexError("UNAUTHENTICATED");
  }
  return identity;
}

export async function requireMember(ctx: QueryCtx | MutationCtx) {
  const identity = await requireIdentity(ctx);
  const user = await ctx.db
    .query("users")
    .withIndex("by_authUserId", (q) => q.eq("authUserId", identity.subject))
    .unique();

  if (!user || user.status === "DISABLED") {
    throw new ConvexError("MEMBERSHIP_REQUIRED");
  }

  const company = await ctx.db.get(user.companyId);
  if (!company || company.status !== "ACTIVE") {
    throw new ConvexError("COMPANY_INACTIVE");
  }

  return { identity, user, company };
}
