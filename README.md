This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Steps of Development

1. npx create-next-app@latest bidsage
2. pnpm add drizzle-orm postgres, pnpm add -D drizzle-kit -> (Postgres db visual editor)
3. Copy pasting the database.ts in db folder, this consists the code to cache the database instance to restrict the creation of more than one instances of db
4. pnpm i @t3-oss/env-nextjs, pnpm add zod, exporting all the environment variables from the env.ts file
5. Creating the schema.ts in the db folder, this consists the schema of the database
6. Creating the drizzle.config.ts file to configure the drizzle-orm
7. Creating the .env and adding the environment variables in it
8. pnpm dlx drizzle-kit push --config=drizzle.config.ts
9. Adding db:push(Migrations to db), db:studio(Visual Editor) scripts in the package.json file
10. Discussing some basics of drizzle orm with use server
11. Setting up the shadcn using docs, some basics about it, then revalidating after adding items inside "use server"
12. Setting up the nextauth v5(beta version) -> docs is in this Link -> https://authjs.dev/getting-started/installation?framework=next.js
13. Following the docs, setting up the google auth, taking the client id and client secret from the google cloud console
14. Playing with nextauth, understanding the basics of it
15. pnpm add drizzle-orm @auth/drizzle-adapter, adding the adapter in auth.ts, pnpm run db:push
16. The creator dealing with the error of the adapter, so he just deleted the middleware.ts, did Manual SQL Drop, then pnpm run db:push.
17. Just deleting the middleware.ts file, did the work for me.
18. After the adapters are added up earlier, when we sign in with google, the user is saved in the database.
19. Updating the schema.ts file, adding the items table, then pnpm run db:push
20. Copying code of page.tsx from the older commits, trying out the previous useless code
21. Creating the Header component, then adding the header in the layout.tsx file
22. Creating the /items/create page, then adding the form in it, also creating server actions file associated with it
23. Changing the ui of the "/" page, adding the items in the home page
24. Changing the schema.ts file, adding the startingPrice for the items table, then pnpm run db:push
25. Keeping the decimal values multiplied by 100 during storing it to db(since the db doesn't support decimal values), then dividing it by 100 while fetching it in the ui.




### Steps of NextAuth
1. Installation
2. File Configurations
3. Google cloud console(Providers)
4. Session Management
5. Adapters for saving to db