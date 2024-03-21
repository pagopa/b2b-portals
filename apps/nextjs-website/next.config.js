/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    transpilePackages: ["react-components"],
}

module.exports = nextConfig