import { ProfileData, Project, Blog, Skill, Experience } from './types';

export const profileData: ProfileData = {
	name: 'Faizan Ali',
	role: 'Backend Developer',
	tagline: 'Turning complex problems into scalable systems',
	bio: 'I am a backend developer exploring **AI and Machine Learning**, with a strong focus on building **efficient and secure systems**. I am a backend developer exploring **AI and Machine Learning**, with a strong focus on building **efficient and secure systems**.\n\nI care about how software is designed **at scale**, from **APIs and databases** to **cloud infrastructure** and AI workloads.I am learning how **backend architecture**, **security practices**, and **AI systems** impact performance, reliability, and data protection.\n\nMy goal is to build software that is **fast, scalable, and secure by design**. I am interested in working with teams that value **strong backend engineering**, security, and responsible use of AI.',
	avatar: '/images/avatar.png',
	resumeUrl: '/Faizan_Ali_Resume.pdf',
	email: 'alammdfaizan50@gmail.com',
	location: 'Mumbai, India',
	socialLinks: [
		{ name: 'GitHub', url: 'https://github.com/faizan-devs', icon: 'github' },
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/faizandevs/',
			icon: 'linkedin',
		},
		{ name: 'X', url: 'https://x.com/faizandevs', icon: 'x' },
	],
};

export const projects: Project[] = [
	{
		id: '1',
		title: 'E-Commerce Platform',
		description:
			'A full-stack e-commerce platform built with Next.js, TypeScript, and PostgreSQL. Features include real-time inventory management, payment integration, and admin dashboard.',
		image: '/images/project1.jpg',
		startDate: 'Mar 2024',
		tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
		featured: true,
		githubLink: 'https://github.com/yourusername/ecommerce',
		liveLink: 'https://ecommerce-demo.vercel.app',
	},
	{
		id: '2',
		title: 'Task Management App',
		description:
			'Collaborative task management application with real-time updates using WebSockets. Built with React, Node.js, and MongoDB.',
		image: '/images/project2.jpg',
		startDate: 'Apr 2024',
		tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
		featured: true,
		githubLink: 'https://github.com/yourusername/ecommerce',
	},
	{
		id: '3',
		title: 'AI Image Generator',
		description:
			'Web application that generates images using AI models. Features include prompt engineering, image editing, and gallery management.',
		image: '/images/project3.jpg',
		startDate: 'May 2024',
		tags: ['Python', 'FastAPI', 'React', 'Stable Diffusion'],
		featured: true,
		githubLink: 'https://github.com/yourusername/ecommerce',
		liveLink: 'https://ecommerce-demo.vercel.app',
	},
	{
		id: '4',
		title: 'Weather Dashboard',
		description:
			'Real-time weather dashboard with beautiful visualizations and forecasting.',
		image: '/images/project4.jpg',
		startDate: 'Jun 2024',
		tags: ['Vue.js', 'Chart.js', 'API Integration'],
		featured: false,
		githubLink: 'https://github.com/yourusername/ecommerce',
	},
	{
		id: '5',
		title: 'Social Media Analytics',
		description:
			'Analytics platform for tracking social media metrics and engagement.',
		image: '/images/project5.jpg',
		startDate: 'Jul 2024',
		tags: ['React', 'D3.js', 'Firebase'],
		featured: false,
		githubLink: 'https://github.com/yourusername/ecommerce',
		liveLink: 'https://ecommerce-demo.vercel.app',
	},
];

export const skills: Skill[] = [
	{ name: 'JavaScript', logo: 'javascript', color: '#F7DF1E' },
	{ name: 'TypeScript', logo: 'typescript', color: '#3178c6' },
	{ name: 'React', logo: 'react', color: '#61dafb' },
	{ name: 'Tailwind CSS', logo: 'tailwindcss', color: '#38bdf8' },
	{ name: 'Node.js', logo: 'nodedotjs', color: '#5fa04e' },
	{ name: 'Express', logo: 'express', color: '#e5e7eb' },
	{ name: 'MongoDB', logo: 'mongodb', color: '#47a248' },
	{ name: 'Redis', logo: 'redis', color: '#dc382d' },
	{ name: 'REST APIs', logo: 'openapiinitiative', color: '#6ba539' },
	{ name: 'PostgreSQL', logo: 'postgresql', color: '#4169e1' },
	{ name: 'Docker', logo: 'docker', color: '#2496ed' },
	{ name: 'Jenkins', logo: 'jenkins', color: '#d24939' },
	{ name: 'Git', logo: 'git', color: '#f05032' },
	{ name: 'Next.js', logo: 'nextdotjs', color: '#f5f5f5' },
];

export const experience: Experience[] = [
	{
		id: '1',
		company: 'Freelance',
		role: 'Backend Engineer',
		location: 'Mumbai, India - (Remote)',
		startDate: '2026',
		endDate: 'Present',
		highlights: [
			'Built backend APIs with clear request validation, predictable responses, and clean route organization.',
			'Designed database schemas and service layers for authentication, user data, and application workflows.',
			'Connected backend systems with AI and machine learning experiments for practical product features.',
			'Improved error handling, reusable backend patterns, and code structure across project modules.',
			'Worked with Docker and cloud-ready setup patterns to keep services easier to run and maintain.',
		],
		tools: [
			'Python',
			'FastAPI',
			'Node.js',
			'Next.js',
			'PostgreSQL',
			'MongoDB',
			'Docker',
		],
	},
];

export const blogs: Blog[] = [
	{
		id: '1',
		title: 'Building Scalable Applications with Next.js',
		description:
			'Learn how to build production-ready applications using Next.js 14 with server-side rendering, API routes, and optimized performance.',
		image: '/images/blog1.jpg',
		link: 'https://hashnode.com/@yourusername/nextjs-scalable',
		date: '2024-03-15',
		featured: true,
	},
	{
		id: '2',
		title: 'Understanding React Server Components',
		description:
			'A deep dive into React Server Components and how they change the way we think about building React applications.',
		image: '/images/blog2.jpg',
		link: 'https://medium.com/@yourusername/react-server-components',
		date: '2024-03-10',
		featured: true,
	},
	{
		id: '3',
		title: 'TypeScript Best Practices for 2024',
		description:
			'Essential TypeScript patterns and practices that will make your code more maintainable and type-safe.',
		image: '/images/blog3.jpg',
		link: 'https://hashnode.com/@yourusername/typescript-2024',
		date: '2024-03-05',
		featured: true,
	},
	{
		id: '4',
		title: 'Optimizing Web Performance',
		description:
			'Techniques and tools for improving web application performance and user experience.',
		image: '/images/blog4.jpg',
		link: 'https://medium.com/@yourusername/web-performance',
		date: '2024-02-28',
		featured: false,
	},
];
