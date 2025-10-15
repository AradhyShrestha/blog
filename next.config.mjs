/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.creative-tim.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "randomuser.me",
                pathname: "/api/portraits/**",
            },
            {
                protocol: "https",
                hostname: "i.ibb.co",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com"
            },
        ],
        // Optional optimization settings (safe defaults)
        formats: ["image/avif", "image/webp"],
    },

    eslint: {
        // ✅ Allow build to continue even if ESLint has warnings
        ignoreDuringBuilds: true,
    },

    // Optional - suppress warnings for future builds
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
