import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	allowedDevOrigins: ['192.168.0.104'],

	turbopack: {
		root: 'C:/Users/FAIZN/OneDrive/Faizan/portfolio',
	},

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
};

export default nextConfig;
