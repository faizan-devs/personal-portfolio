import Profile from './components/Profile';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import BlogCard from './components/BlogCard';
import LoadMoreButton from './components/LoadMoreButton';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import { profileData, projects, blogs, skills, experience } from './data';

export default function Home() {
	const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
	const featuredBlogs = blogs.filter((b) => b.featured).slice(0, 3);
	const firstName = profileData.name.split(' ')[0];

	return (
		<div className="home-shell">
			<div className="layout">
				<Profile data={profileData} />

				{/* Main Content */}
				<main className="main-content">
					{/* About */}
					<Section title="" id="about">
						<About bio={profileData.bio} />
					</Section>

					<Section title="" id="skills">
						<Skills skills={skills} />
					</Section>

					<Section title="Experience" id="experience">
						<Experience experience={experience} />
					</Section>

					{/* Projects */}
					<Section title="What I've Built" id="projects">
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
							<LoadMoreButton href="/projects" text="View All Work" />
						</div>
					</Section>

					{/* Blogs */}
					<Section title="Latest Posts" id="posts">
						<div>
							{featuredBlogs.map((blog) => (
								<BlogCard key={blog.id} blog={blog} variant="teaser" />
							))}
						</div>
						<div>
							<LoadMoreButton href="/blogs" text="View All Posts" />
						</div>
					</Section>

					<footer className="site-footer">
						<div className="footer-identity">
							<p className="footer-name">{firstName} &copy; 2026</p>
							<p className="footer-role">{profileData.role}</p>
						</div>
						<div className="footer-column">
							<p className="footer-heading">Connect</p>
							<nav className="footer-links" aria-label="Social links">
								{profileData.socialLinks.map((link) => (
									<a
										key={link.name}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{link.name}
									</a>
								))}
							</nav>
						</div>
						<div className="footer-column footer-contact">
							<p className="footer-heading">Get in Touch</p>
							<nav className="footer-links" aria-label="Contact">
								<a
									className="footer-email"
									href={`mailto:${profileData.email}`}
								>
									<EmailIcon />
									<span>{profileData.email}</span>
								</a>
								<a
									className="footer-resume"
									href={profileData.resumeUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									Resume
									<ExternalIcon />
								</a>
							</nav>
						</div>
					</footer>
				</main>
			</div>
		</div>
	);
}

function EmailIcon() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M3.75 5.5h16.5v13H3.75v-13Zm1.5 1.5v.72L12 12.1l6.75-4.38V7H5.25Zm13.5 2.5L12 13.87 5.25 9.5V17h13.5V9.5Z" />
		</svg>
	);
}

function ExternalIcon() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M7 6.25v1.5h8.19L6.47 16.47l1.06 1.06 8.72-8.72V17h1.5V6.25H7Z" />
		</svg>
	);
}
