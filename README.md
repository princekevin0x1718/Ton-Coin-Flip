
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Copy `.env.example` file to `.env.local` and make necessary changes. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Tooling

We are using husky to fix potential problems using eslint when running `git commit`. We are also making files pretty using prettier on commit. Please, configure your ide to use provided eslint and prettier config files.

## Directory structure

- `component` - general use components like buttons, text inputs, etc
- `features` - grouped features like login form, navbar. We should group providers, services, hooks, helpers for each feature in its feature folder if it is not used across any other component outside current feature
- `hooks` - hooks used across entire project, like scroll observer, etc
- `lib` - non hook helpers used across project
- `providers` - providers used globally
- `services` - non hook code which communicates with 3rd party services and is used globally or across many features / components

## How to create telegram webapp

Firstly, you need to create ngrok account to point newly create webapp to development machine. Go to [ngrok.com](ngrok.com) and create account. You will have to create static domain which is free.

Secondly, you will have to create telegram bot which is like a host to your web app. Go to [https://t.me/botfather](https://t.me/botfather) and click start. Follow the steps:

```/newbot```

This bot is created for developing purposes, so it will be good to reflect this in its name. If you have problems when choosing the bot name type `/newbot` again, which will restart the process. Remember bot's name.

```/newapp```

You will need the bot's name, photo and gif. You can skip the gif part. After the gif part you will be asked for web app url. For developing purposes you should use the one you created using ngrok service. You will be asked for bot short name - we will use it as the `short_name` value when using Bot API.

## How to enable TWA inspections

Go to Settings -> Advanced -> Experimental settings -> Enable webview inspecting

## Opening TWA in desktop telegram shows that build app is broken

If the app was installed using flatpack or snap install it again using binary file from telegram website.

## How to get bot token

Go to bot father, chose your bot and show bot token.

## How to start docker with configured environment variables

```bash
$: docker compose --env-file .env.local up -d
```

## How to work with database, migrations, etc.

After you have changed or created schema file you can directly run:
```bash
$: npm run db:push
```
If you finished your changes, and you are sure you want to create migration files:
```bash
$: npm run db:generate
$: npm run db:migrate
```
If you want to migrate your changes to the prod you need to paste in the url, which is a get request to the api and add secret string as a query string. Example:
```
https://<url>/api/v1/scripts/migrate?scripts_api_key=<SCRIPTS_API_KEY>
```

If you want to seed database you can do it two ways.
You can enter address in the url bar:
```
https://<url>/api/v1/scripts/seed?scripts_api_key=<SCRIPTS_API_KEY>
```
or you can run the script:
```bash
$: npm run db:seed
```

## Can not log in to test network using ton connected button.

You check your manifest configuration, [https://docs.ton.org/develop/dapps/ton-connect/manifest](https://docs.ton.org/develop/dapps/ton-connect/manifest). If you are using ngrok to host your manifest you should make sure it is not blocked by ngrok's consent info or place it somewhere online.
