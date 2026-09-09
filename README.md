# CMN Under Construction

Temporary production-ready landing page for the Center for Moral Nexus (CMN), GIFT University.

## Vercel deployment

1. Create/import this project in Vercel.
2. Framework: Next.js (auto-detected).
3. Root Directory: `.`
4. Build Command: `next build` (auto-detected).
5. Install Command: `npm install` (auto-detected).
6. Deploy.
7. Add the custom domain `cmn.gift.edu.pk` under Project → Settings → Domains.
8. Configure the DNS record in Cloudflare using the exact CNAME target provided by Vercel.

No environment variables are required for this demo.

This page is intentionally independent of the final third-party CMN application. When the final repository is received, the project can be replaced while keeping the custom domain.
