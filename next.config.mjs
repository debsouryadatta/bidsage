/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
          },
          {
            hostname: "lh3.googleusercontent.com",
            protocol: "https",
            port: "",
          },
        ],
      },
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    output: 'standalone',
};

export default nextConfig;
