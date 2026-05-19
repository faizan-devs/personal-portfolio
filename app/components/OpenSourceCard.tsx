import Link from 'next/link';
import { OpenSource } from '../types';
import { getLanguageColor } from '../utils/languageColors';

interface OpenSourceCardProps {
	project: OpenSource;
}

export default function OpenSourceCard({ project }: OpenSourceCardProps) {
	return (
		<Link
			href={project.repo}
			target="_blank"
			rel="noopener noreferrer"
			className="os-card"
		>
			<div className="os-header">
				<h3 className="os-title">{project.title}</h3>
				<span className="stars">
					⭐ {project.stars.toLocaleString('en-US')}
				</span>
			</div>
			<p className="card-description">{project.description}</p>
			<div className="language">
				<span
					className="lang-dot"
					style={{ background: getLanguageColor(project.language) }}
				/>
				{project.language}
			</div>
		</Link>
	);
}
