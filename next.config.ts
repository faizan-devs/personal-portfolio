import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	turbopack: {
		root: 'C:/Users/FAIZN/OneDrive/Faizan/Portfolio',
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
