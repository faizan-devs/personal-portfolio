import { ProfileData, Project, Blog, Skill, Experience } from './types';

export const profileData: ProfileData = {
	name: 'Faizan Ali',
	role: 'Backend Devloper',
	bio: 'I am a backend developer exploring AI and Machine Learning, with a strong focus on building efficient and secure systems.\n\nI care about how software is designed at scale, from APIs and databases to cloud infrastructure and AI workloads.\n\nI am learning how backend architecture, security practices, and AI systems impact performance, reliability, and data protection.\n\nMy goal is to build software that is fast, scalable, and secure by design. I am interested in working with teams that value strong backend engineering, security, and responsible use of AI.',
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
		link: 'https://github.com/yourusername/ecommerce',
		startDate: 'Mar 2024',
		tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
		featured: true,
	},
	{
		id: '2',
		title: 'Task Management App',
		description:
			'Collaborative task management application with real-time updates using WebSockets. Built with React, Node.js, and MongoDB.',
		image: '/images/project2.jpg',
		link: 'https://github.com/yourusername/taskapp',
		startDate: 'Apr 2024',
		tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
		featured: true,
	},
	{
		id: '3',
		title: 'AI Image Generator',
		description:
			'Web application that generates images using AI models. Features include prompt engineering, image editing, and gallery management.',
		image: '/images/project3.jpg',
		link: 'https://github.com/yourusername/ai-generator',
		startDate: 'May 2024',
		tags: ['Python', 'FastAPI', 'React', 'Stable Diffusion'],
		featured: true,
	},
	{
		id: '4',
		title: 'Weather Dashboard',
		description:
			'Real-time weather dashboard with beautiful visualizations and forecasting.',
		image: '/images/project4.jpg',
		link: 'https://github.com/yourusername/weather',
		startDate: 'Jun 2024',
		tags: ['Vue.js', 'Chart.js', 'API Integration'],
		featured: false,
	},
	{
		id: '5',
		title: 'Social Media Analytics',
		description:
			'Analytics platform for tracking social media metrics and engagement.',
		image: '/images/project5.jpg',
		link: 'https://github.com/yourusername/analytics',
		startDate: 'Jul 2024',
		tags: ['React', 'D3.js', 'Firebase'],
		featured: false,
	},
];

export const skills: Skill[] = [
	{ name: 'HTML', logo: 'H', color: '#F06529' },
	{ name: 'CSS', logo: 'Css', color: '#264de4' },
	{ name: 'Javascript', logo: 'Js', color: '#F7DF1E' },
	{ name: 'TypeScript', logo: 'Ts', color: '#3178c6' },
	{ name: 'Node.js', logo: 'Nd', color: '#5fa04e' },
	{ name: 'MongoDB', logo: 'Mo', color: '#47a248' },
	{ name: 'REST APIs', logo: 'API', color: '#38bdf8' },
	{ name: 'PostgreSQL', logo: 'Pg', color: '#4169e1' },
	{ name: 'Docker', logo: 'Do', color: '#2496ed' },
	{ name: 'Git', logo: 'Gt', color: '#f05032' },
	{ name: 'Next.js', logo: 'Nx', color: '#000000' },
];

export const experience: Experience[] = [
	{
		id: '1',
		company: 'Oraczen',
		role: 'Principal Security Engineer',
		location: 'Remote',
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
	{
		id: '2',
		company: 'Insforge',
		role: 'Backend Engineer',
		location: 'Mumbai, India',
		startDate: '2024',
		endDate: '2026',
		highlights: [
			'Built REST API endpoints for project features, data access, and secure client-server communication.',
			'Worked on authentication flows, database models, and backend logic for real application use cases.',
			'Tested AI-assisted workflows and studied how model outputs can connect safely with backend services.',
			'Refined project structure so future features can be added without making the codebase harder to maintain.',
			'Design Agentic workflow that can handle manage Google Calender and Google Gmail.',
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
		platform: 'hashnode',
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
		platform: 'medium',
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
		platform: 'hashnode',
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
		platform: 'medium',
		date: '2024-02-28',
		featured: false,
	},
];
