export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	startDate: string;
	tags: string[];
	featured: boolean;
	githubLink?: string;
	liveLink?: string;
}

export interface Blog {
	id: string;
	title: string;
	description: string;
	image: string;
	link: string;
	date: string;
	featured: boolean;
}

export interface Skill {
	name: string;
	logo: string;
	color: string;
}

export interface Experience {
	id: string;
	company: string;
	role: string;
	location: string;
	startDate: string;
	endDate: string;
	highlights: string[];
	tools: string[];
}

export interface SocialLink {
	name: string;
	url: string;
	icon: string;
}

export interface ProfileData {
	name: string;
	role: string;
	tagline: string;
	bio: string;
	avatar: string;
	resumeUrl: string;
	email: string;
	location: string;
	socialLinks: SocialLink[];
}
