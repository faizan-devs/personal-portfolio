import type { Metadata } from 'next';
import './globals.css';
import ThemeToggle from './components/ThemeToggle';

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
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								try {
									var theme = localStorage.getItem('theme');
									if (theme === 'light') {
										document.documentElement.classList.add('light');
									} else {
										document.documentElement.classList.remove('light');
									}
								} catch (e) {}
							})();
						`,
					}}
				/>
			</head>
			<body className="antialiased">
				{children}
				<ThemeToggle />
			</body>
		</html>
	);
}
