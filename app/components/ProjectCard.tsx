import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../types';

interface ProjectCardProps {
	project: Project;
	variant?: 'teaser' | 'detail';
}

export default function ProjectCard({ project }: ProjectCardProps) {
	const content = (
		<>
			{/* Project Image */}
			<div className="card-image">
				<Image
					src={project.image}
					alt={project.title}
					fill
					className="object-cover"
					sizes="192px"
				/>
			</div>

			{/* Project Info */}
			<div className="card-content">
				<div className="card-heading project-card-heading">
					<h3 className="card-title">{project.title}</h3>
					{(project.githubLink || project.liveLink) && (
						<div className="card-actions card-heading-actions">
							{project.githubLink && (
								<Link
									href={project.githubLink}
									target="_blank"
									rel="noopener noreferrer"
									className="card-action"
								>
									GitHub
								</Link>
							)}
							{project.liveLink && (
								<Link
									href={project.liveLink}
									target="_blank"
									rel="noopener noreferrer"
									className="card-action primary"
								>
									View
								</Link>
							)}
						</div>
					)}
				</div>
				<p className="card-description">{project.description}</p>
				<div className="tags">
					{project.tags.map((tag) => (
						<span key={tag} className="tag">
							{tag}
						</span>
					))}
				</div>
			</div>
		</>
	);

	return <div className="card">{content}</div>;
}
