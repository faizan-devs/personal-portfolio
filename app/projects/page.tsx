import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

export default function ProjectsPage() {
	return (
		<div className="listing-page">
			{/* Back Button */}
			<Link href="/" className="listing-back">
				← Back to Home
			</Link>

			{/* Header */}
			<header className="listing-header">
				<h1 className="listing-title">What I&apos;ve Built</h1>
				<p className="listing-description">
					A collection of my work and side projects.
				</p>
			</header>

			{/* Projects Grid */}
			<div className="listing-list">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}
