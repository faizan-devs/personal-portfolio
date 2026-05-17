import Profile from './components/Profile';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import BlogCard from './components/BlogCard';
import OpenSourceCard from './components/OpenSourceCard';
import LoadMoreButton from './components/LoadMoreButton';
import Contact from './components/Contact';
import { profileData, projects, blogs, openSource } from './data';

export default function Home() {
	const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
	const featuredBlogs = blogs.filter((b) => b.featured).slice(0, 3);
	const featuredOpenSource = openSource.filter((o) => o.featured).slice(0, 3);

	return (
		<div className="layout">
			<Profile data={profileData} />

			{/* Main Content */}
			<main className="main-content">
				{/* Introduction */}
				<Section title="Introduction" id="introduction">
					<p className="intro-text">{profileData.bio}</p>
				</Section>

				{/* Projects */}
				<Section title="Projects" id="projects">
					<div>
						{featuredProjects.map((project) => (
							<ProjectCard
								key={project.id}
								project={project}
								variant="teaser"
							/>
						))}
					</div>
					<div>
						<LoadMoreButton href="/projects" text="View All Projects" />
					</div>
				</Section>

				{/* Blogs */}
				<Section title="Blogs" id="blogs">
					<div>
						{featuredBlogs.map((blog) => (
							<BlogCard key={blog.id} blog={blog} variant="teaser" />
						))}
					</div>
					<div>
						<LoadMoreButton href="/blogs" text="View All Blogs" />
					</div>
				</Section>

				{/* Open Source */}
				<Section title="Open Source" id="opensource">
					<div>
						{featuredOpenSource.map((project) => (
							<OpenSourceCard key={project.id} project={project} />
						))}
					</div>
					<div>
						<LoadMoreButton href="/opensource" text="View All Contributions" />
					</div>
				</Section>

				{/* Contact */}
				<Section title="Contact" id="contact">
					<Contact data={profileData} />
				</Section>
			</main>
		</div>
	);
}
