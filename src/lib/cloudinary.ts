import { env } from "@/env";
import { v2 as cloudinary } from "cloudinary";

// Configure cloudinary for image uploads
cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

export async function getPhotoUrl(bufferFile: any) {
  // Convert buffer to data URL
  const dataUrl = `data:image/png;base64,${bufferFile.toString("base64")}`;

  let photoUrl = null;
  photoUrl = await cloudinary.uploader.upload(dataUrl, {
    upload_preset: env.CLOUDINARY_UPLOAD_PRESET,
    folder: "bidsage",
  });

  return photoUrl.secure_url;
}
