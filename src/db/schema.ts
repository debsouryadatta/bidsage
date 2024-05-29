import { pgTable, serial } from "drizzle-orm/pg-core";

// bid -> internal variable that we gonna use, bs_bids -> table name in actual db
export const bids = pgTable('bs_bids', {
    id: serial('id').primaryKey(),
})