export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  featured: boolean;
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  platform: 'hashnode' | 'medium';
  date: string;
  featured: boolean;
}

export interface OpenSource {
  id: string;
  title: string;
  description: string;
  repo: string;
  stars: number;
  language: string;
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
  summary: string;
  description: string;
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
  bio: string;
  avatar: string;
  resumeUrl: string;
  email: string;
  location: string;
  socialLinks: SocialLink[];
}
