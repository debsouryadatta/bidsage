import {createEnv} from '@t3-oss/env-nextjs';
import {z} from 'zod';

export const env = createEnv({
    server: {
        DATABASE_URL: z.string().url(),
        NODE_ENV: z.string().min(1),
        CLOUDINARY_UPLOAD_PRESET: z.string().min(1),
        CLOUDINARY_CLOUD_NAME: z.string().min(1),
        CLOUDINARY_API_KEY: z.string().min(1),
        CLOUDINARY_API_SECRET: z.string().min(1),
        KNOCK_SECRET_KEY: z.string().min(1),
    },
    client: {
        NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY: z.string().min(1),
        NEXT_PUBLIC_KNOCK_FEED_ID: z.string().min(1),
    },
    runtimeEnv: {
        DATABASE_URL: process.env.DATABASE_URL,
        NODE_ENV: process.env.NODE_ENV,
        CLOUDINARY_UPLOAD_PRESET: process.env.CLOUDINARY_UPLOAD_PRESET,
        CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
        NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_KNOCK_PUBLIC_API_KEY,
        NEXT_PUBLIC_KNOCK_FEED_ID: process.env.NEXT_PUBLIC_KNOCK_FEED_ID,
        KNOCK_SECRET_KEY: process.env.KNOCK_SECRET_KEY,
    }
})