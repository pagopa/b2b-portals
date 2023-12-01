/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.CDN_PATH,
}

module.exports = nextConfig