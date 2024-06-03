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
24. Changing the schema.ts file, adding the startingPrice for the items table(putting default value to startingPrice since if we add a new column in between, all previous data in the table gets deleted), then pnpm run db:push
25. Keeping the decimal values multiplied by 100 during storing it to db(since the db doesn't support decimal values), then dividing it by 100 while fetching it in the ui.
26. In the tutorial, creator using cloudflare R2 for uploading images, since this needs credit card, so I am using cloudinary for images.
27. Uploading files to cloudinary and getting the URL -> Steps mentioned below.

28. Moving the items from the home page to the ItemCard component.
29. Creating a separte My Auctions page, showing the items created by the user(const allItems = await database.query.items.findMany({ where: eq(items.userId, session.user.id!)}))
30. Putting a button in the ItemCard component to go to the item page for bidding
31. Creating the /items/[itemId] page, then adding the item details in it
32. pnpm i date-fns, formatting the date in the item page
33. Creating a column in the items table - bidInterval, then doing pnpm run db:push
34. Creating formatToDollar func to format the price to dollar
35. Modifying the bids table schema, adding the amount, itemId, userId, then doing pnpm run db:push
36. Modifying the items table, adding the currentBid, then doing pnpm run db:push
37. Creating the createBidAction for creating the bid
38. Modifying the bids table schema, adding the timestamp, then doing pnpm run db:push
39. Adding the usersRelations in the schema.ts file(if i could recall, its not required in case of prisma), then doing pnpm run db:push
40. Creating a separate data-access folder for the database queries, one for bids and one for items

41. Start using Knock, pnpm add @knocklabs/react, wrap the app with KnockProvider in knock-provider.tsx
42. Creating integrations in knock website, selecting knock app, putting the channelId in feedId(in .env file) and the public key in the public key field(inside .env file)
43. Using the Notification components from the knock in the headers component
44. The styles of the notification component was not working, I just went their github issues and found that add the line "import '@knocklabs/react/dist/index.css'" worked
45. pnpm i @knocklabs/node, modifying the createBidAction to send the notifications to the recipients
46. next-auth was creating problems after the header component was made client component, so added callbacks property in the auth.ts file
47. Creating the workflow on the knock dashboard, commit to development
48. Triggering the notifications from the createBidAction, adding some custom messages in the notifications component in the headers
49. Changing the items create page to a client component, also changing the createItemAction accordingly
50. Adding the Date Picker component from shadcn, using it in the create item page, useState to store the end date
50. Adding endDate in the items table, then doing pnpm run db:push
51. Creating isBidOver func, and putting conditionals in the item page, in the createBidAction, etc
52. Creating a new Integration for sending emails(Resend, bringing Resend Api key and putting it here), modifying the workflow, adding the email support using Resend service.
53. Verifying the Resend domain for sending emails (debsouryadatta.me), and updating it in the knock integration
54. Finally Some knock features and usecases are discussed.



55. Was stuck in the Knock email with Resend stuff. Firstly verifying the Namecheap domain following the Resend docs about Namecheap domain integration. Finally putting the bidsage@resend.debsouryadatta.me in the knock resend integration configurations to successfully send the emails.

56. FInally deploying it to vercel, just putting the environment variables and done, also after getting the webiste link, putting the link in the console.cloud.google.com -> Credentials -> Authorized redirect URIs



### Steps of NextAuth
1. Installation
2. File Configurations
3. Google cloud console(Providers)
4. Session Management
5. Adapters for saving to db
6. Also add the callbacks, shown in later part


### Steps of Drizzle ORM


### Cloudinary
1. Uploading files to cloudinary and getting the URL:
    -// Convert the file to a buffer
    -   const file = formData.get("file") as File;
    -   const bytes = await file.arrayBuffer();
    -   const buffer = Buffer.from(bytes);
    -   const photoUrl = await getPhotoUrl(buffer);
    -   console.log("Photo URL: ", photoUrl);

2. Convert buffer to data URL & uploading to cloudinary
    -   const dataUrl = `data:image/png;base64,${bufferFile.toString("base64")}`;
    -   let photoUrl = null;
    -   photoUrl = await cloudinary.uploader.upload(dataUrl, {
    -   upload_preset: env.CLOUDINARY_UPLOAD_PRESET,
    -   folder: "bidsage",
    -   });

3. Getting the photoUrl, saving it to db, showing it in the ui


### Steps of Knock
1. Follow step-41 to step-55