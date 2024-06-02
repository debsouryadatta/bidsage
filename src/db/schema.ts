import { relations } from "drizzle-orm";
import { integer, pgTable, primaryKey, serial, text, timestamp } from "drizzle-orm/pg-core";
import type { AdapterAccountType } from "next-auth/adapters"
import { start } from "repl";


export const users = pgTable("user", {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    email: text("email").notNull(),
    emailVerified: timestamp("emailVerified", { mode: "date" }),
    image: text("image"),
  })
   
  export const accounts = pgTable(
    "account",
    {
      userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
      type: text("type").$type<AdapterAccountType>().notNull(),
      provider: text("provider").notNull(),
      providerAccountId: text("providerAccountId").notNull(),
      refresh_token: text("refresh_token"),
      access_token: text("access_token"),
      expires_at: integer("expires_at"),
      token_type: text("token_type"),
      scope: text("scope"),
      id_token: text("id_token"),
      session_state: text("session_state"),
    },
    (account) => ({
      compoundKey: primaryKey({
        columns: [account.provider, account.providerAccountId],
      }),
    })
  )
   
  export const sessions = pgTable("session", {
    sessionToken: text("sessionToken").primaryKey(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  })
   
  export const verificationTokens = pgTable(
    "verificationToken",
    {
      identifier: text("identifier").notNull(),
      token: text("token").notNull(),
      expires: timestamp("expires", { mode: "date" }).notNull(),
    },
    (vt) => ({
      compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
    })
  )


// Items table
export const items = pgTable('bs_items', {
  id: serial('id').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(()=> users.id, { onDelete: 'cascade'}),
  name: text('name').notNull(),
  startingPrice: integer('startingPrice').notNull().default(0),
  photoUrl: text('photoUrl').notNull(),
  bidInterval: integer('bidInterval').notNull().default(100),
  currentBid: integer('currentBid').notNull().default(0),
  endDate: timestamp('endDate', { mode: 'date' }).notNull(),
})


// bid -> internal variable that we gonna use, bs_bids -> table name in actual db
export const bids = pgTable('bs_bids', {
  id: serial('id').primaryKey(),
  amount: integer('amount').notNull(),
  itemId: serial('itemId')
    .notNull()
    .references(()=> items.id, { onDelete: 'cascade'}),
  userId: text('userId')
    .notNull()
    .references(()=> users.id, { onDelete: 'cascade'}),
  timestamp: timestamp('timestamp', { mode: 'date' }).notNull(),
})

export const usersRelations = relations(bids, ({ one }) => ({
  user: one(users, {
    fields: [bids.userId],
    references: [users.id],
  }),
}));


export type Item = typeof items.$inferSelect;