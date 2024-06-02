"use server";

import { revalidatePath } from "next/cache";
import { database } from "@/db/database";
import { items } from "@/db/schema";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getPhotoUrl } from "@/lib/cloudinary";

export async function createItemAction(formData: FormData) {
  const session = await auth();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const user = session.user;

  if (!user || !user.id) {
    throw new Error("Unauthorized");
  }

  // Convert the file to a buffer
  const file = formData.get("file") as File;
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const photoUrl = await getPhotoUrl(buffer);
  console.log("Photo URL: ", photoUrl);
  
  
  const startingPrice = formData.get("startingPrice") as string;

  const priceAsCents = Math.floor(parseFloat(startingPrice) * 100);

  const endDate = formData.get("date") as string;

  await database.insert(items).values({
    name: formData.get("name") as string,
    startingPrice: priceAsCents,
    userId: user.id,
    photoUrl: photoUrl,
    currentBid: priceAsCents,
    endDate: new Date(endDate),
  });

  redirect("/");
}