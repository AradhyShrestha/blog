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
        // Optimize images
        formats: ["image/avif", "image/webp"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Production optimizations
    compress: true,
    poweredByHeader: false,
    generateEtags: true,

    // We'll handle errors properly in production
    eslint: {
        ignoreDuringBuilds: true,
    },

    typescript: {
        ignoreBuildErrors: false,
    },

    // Enable static page generation optimization
    output: 'standalone',

    // Optimize builds
    swcMinify: true,
};

export default nextConfig;
