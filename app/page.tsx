import Profile from './components/Profile';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import BlogCard from './components/BlogCard';
import LoadMoreButton from './components/LoadMoreButton';
import Skills from './components/Skills';
import Experience from './components/Experience';
import { profileData, projects, blogs, skills, experience } from './data';

export default function Home() {
	const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
	const featuredBlogs = blogs.filter((b) => b.featured).slice(0, 3);
	const aboutText = profileData.bio.replace(/\s*\n+\s*/g, ' ');
	const githubLink = profileData.socialLinks.find(
		(link) => link.name === 'GitHub',
	);
	const linkedInLink = profileData.socialLinks.find(
		(link) => link.name === 'LinkedIn',
	);
	const xLink = profileData.socialLinks.find((link) => link.name === 'X');

	return (
		<div className="home-shell">
			<div className="layout">
				<Profile data={profileData} />

				{/* Main Content */}
				<main className="main-content">
					{/* About */}
					<Section title="About" id="about">
						<div className="intro-copy">
							<p className="intro-text">{aboutText}</p>
						</div>
					</Section>

					<Section title="Skills" id="skills">
						<Skills skills={skills} />
					</Section>

					<Section title="Where I've Worked" id="experience">
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
							<LoadMoreButton href="/projects" />
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
							<LoadMoreButton href="/blogs" />
						</div>
					</Section>
				</main>
			</div>

			<footer className="site-footer">
				<div className="footer-identity">
					<p className="footer-name">{profileData.name} &copy; 2026</p>
					<p className="footer-role">Backend Developer</p>
				</div>
				<nav className="footer-links" aria-label="Footer links">
					<a href="/blogs">Blogs</a>
					<a href={`mailto:${profileData.email}`}>Mail</a>
					<a
						href={profileData.resumeUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						Resume
					</a>
					{githubLink && (
						<a href={githubLink.url} target="_blank" rel="noopener noreferrer">
							GitHub
						</a>
					)}
					{linkedInLink && (
						<a
							href={linkedInLink.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
					)}
					{xLink && (
						<a href={xLink.url} target="_blank" rel="noopener noreferrer">
							X
						</a>
					)}
				</nav>
			</footer>
		</div>
	);
}
