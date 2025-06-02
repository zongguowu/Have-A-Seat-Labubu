# AI Video Text Remove Tool

一个基于 AI 技术的视频文字移除工具，可以智能识别并移除视频中的各种文字内容。

## 功能特点

- 智能文字识别：自动检测视频中的静态和动态文字
- 完美修复：智能修复文字移除后的背景
- 批量处理：支持多个视频同时处理
- 多格式支持：支持 MP4、AVI、MOV 等主流视频格式

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI
- Next-auth
- Next-intl

## 在 macOS 上运行项目

1. 确保已安装 Node.js (推荐 v18+)

2. 安装 pnpm (如果还没有安装)
```bash
npm install -g pnpm
```

3. 安装项目依赖
```bash
pnpm install
```

4. 创建环境配置文件
```bash
cp .env.example .env.development
```
然后编辑 `.env.development` 文件，填写必要的环境变量。

5. 启动开发服务器
```bash
pnpm dev
```

现在可以访问 http://localhost:3000 查看项目了。

## 环境变量配置

必要的环境变量：

- `NEXTAUTH_SECRET`: NextAuth.js 密钥
- `NEXT_PUBLIC_WEB_URL`: 网站 URL
- `DATABASE_URL`: 数据库连接 URL
- `STRIPE_SECRET_KEY`: Stripe 支付密钥
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Stripe 公钥

## 注意事项

1. 确保 Node.js 版本 >= 18
2. 如果遇到权限问题，使用 `sudo` 运行命令
3. 如果端口 3000 被占用，服务器会自动使用下一个可用端口

## Customize

- Set your environment variables

```bash
cp .env.example .env.local
```

- Set your theme in `app/theme.css`

[shadcn-ui-theme-generator](https://zippystarter.com/tools/shadcn-ui-theme-generator)

- Set your landing page content in `i18n/pages/landing`

- Set your i18n messages in `i18n/messages`

## Deploy

- Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fshipanyai%2Fshipany-template-one&project-name=my-shipany-project&repository-name=my-shipany-project&redirect-url=https%3A%2F%2Fshipany.ai&demo-title=ShipAny&demo-description=Ship%20Any%20AI%20Startup%20in%20hours%2C%20not%20days&demo-url=https%3A%2F%2Fshipany.ai&demo-image=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FGgGSW3La8AAGJgU%3Fformat%3Djpg%26name%3Dlarge)

- Deploy to Cloudflare

1. Customize your environment variables

```bash
cp .env.example .env.production
cp wrangler.toml.example wrangler.toml
```

edit your environment variables in `.env.production`

and put all the environment variables under `[vars]` in `wrangler.toml`

2. Deploy

```bash
npm run cf:deploy
```

## Community

- [ShipAny](https://shipany.ai)
- [Documentation](https://docs.shipany.ai)
- [Discord](https://discord.gg/HQNnrzjZQS)

## License

- [ShipAny AI SaaS Boilerplate License Agreement](LICENSE)
