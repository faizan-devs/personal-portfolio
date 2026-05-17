import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Faizan Ali - Portfolio',
	description:
		'Developer Portfolio - Building amazing web experiences with modern technologies',
	keywords: [
		'portfolio',
		'web developer',
		'full stack',
		'next.js',
		'react',
		'nodejs',
	],
	icons: {
		icon: [
			{ url: '/favicon/favicon.ico' },
			{ url: '/favicon/favicon.png', type: 'image/png' },
		],
		apple: '/favicon/apple-touch-icon.png',
	},
	manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">{children}</body>
		</html>
	);
}
