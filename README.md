# ShipAny Template One

Ship Any AI SaaS Startups in hours.

![preview](preview.png)

## Quick Start

1. Clone the repository

```bash
git clone https://github.com/shipanyai/shipany-template-one.git
```

2. Install dependencies

```bash
pnpm install
```

3. Run the development server

```bash
pnpm dev
```

## Customize

- Set your environment variables

```bash
cp .env.example .env.local
```

- Set your i18n messages in `i18n/messages`

- Set your landing page content in `i18n/pages/landing`

## Deploy

- Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fshipanyai%2Fshipany-template-one&env=NEXT_PUBLIC_WEB_URL,NEXT_PUBLIC_PROJECT_NAME,SUPABASE_URL,SUPABASE_ANON_KEY,AUTH_SECRET,AUTH_GOOGLE_ID,AUTH_GOOGLE_SECRET,NEXT_PUBLIC_AUTH_GOOGLE_ENABLED,NEXT_PUBLIC_AUTH_GOOGLE_ONE_TAP_ENABLED&envDescription=see%20all%20Environment%20Variables%20at%20.env.example&envLink=https%3A%2F%2Fgithub.com%2Fshipanyai%2Fshipany-template-one%2Fblob%2Fmain%2F.env.example&project-name=my-shipany-project&repository-name=my-shipany-project&redirect-url=https%3A%2F%2Fshipany.ai&demo-title=ShipAny&demo-description=Ship%20Any%20AI%20Startup%20in%20hours%2C%20not%20days&demo-url=https%3A%2F%2Fshipany.ai&demo-image=https%3A%2F%2Fr2.trys.ai%2Fimgs%2F28ubey0vs-1735634641847.png)

- Deploy to Cloudflare

```bash
npm run cf:deploy
```

## Community

- [ShipAny](https://shipany.ai)
- [Documentation](https://docs.shipany.ai)
- [Discord](https://discord.gg/HQNnrzjZQS)

## License

- [ShipAny AI SaaS Boilerplate License Agreement](LICENSE)
