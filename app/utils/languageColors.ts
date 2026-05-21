export const languageColors: Record<string, string> = {
	// Programming languages
	JavaScript: '#f7df1e',
	TypeScript: '#3178c6',
	Python: '#3572A5',
	Java: '#b07219',
	'C++': '#f34b7d',
	'C#': '#178600',
	C: '#555555',
	Go: '#00ADD8',
	Rust: '#dea584',
	Ruby: '#701516',
	PHP: '#4F5D95',
	Swift: '#F05138',
	Kotlin: '#A97BFF',
	Dart: '#00B4AB',

	// Web technologies
	HTML: '#e34c26',
	CSS: '#563d7c',
	SCSS: '#c6538c',
	Vue: '#41b883',
	Svelte: '#ff3e00',

	// Shell & Config
	Shell: '#89e051',
	Bash: '#89e051',

	// Other
	Solidity: '#AA6746',
	Lua: '#000080',
	R: '#198CE7',
};

export function getLanguageColor(language: string): string {
	return languageColors[language] || '#8b949e';
}
