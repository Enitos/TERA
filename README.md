# TERA

Hospitality Experience Platform.

TERA v0.1 starts as a multi-tenant SaaS for properties, direct bookings, guests and experiences, with Hostex as the first channel integration.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui foundation
- Clerk authentication
- Convex database/backend

## Local setup

```bash
npm install
npx convex dev
npm run dev
```

Configure `.env.local` from `.env.example` before starting the application.

## v0.1 milestone

1. Authentication
2. Multi-tenant company model
3. RBAC
4. Properties and units
5. Guests and bookings
6. Hostex OAuth/import/sync
7. Direct booking engine
8. Experiences

See `docs/TERA_PRODUCT_SPEC.md` for the product and technical specification.
