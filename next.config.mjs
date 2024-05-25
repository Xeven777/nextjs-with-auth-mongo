/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: "assets.lummi.ai" },{
            hostname: "avatars.githubusercontent.com",
        }],
        dangerouslyAllowSVG: true,
    }
};

export default nextConfig;
