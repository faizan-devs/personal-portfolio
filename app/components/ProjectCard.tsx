import Image from 'next/image';
import Link from 'next/link';
import { Project } from '../types';

interface ProjectCardProps {
	project: Project;
	variant?: 'teaser' | 'detail';
}

export default function ProjectCard({ project, variant = 'detail' }: ProjectCardProps) {
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
				<h3 className="card-title">
					{project.title}
				</h3>
				<p className="card-description">
					{project.description}
				</p>
				<div className="tags">
					{project.tags.map((tag) => (
						<span
							key={tag}
							className="tag"
						>
							{tag}
						</span>
					))}
				</div>
				{variant === 'detail' && (
					<div className="card-actions">
						<Link
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="card-action primary"
						>
							View
						</Link>
						<Link
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="card-action"
						>
							GitHub
						</Link>
					</div>
				)}
			</div>
		</>
	);

	if (variant === 'teaser') {
		return (
			<Link href="/projects" className="card">
				{content}
			</Link>
		);
	}

	return (
		<div className="card">
			{content}
		</div>
	);
}
