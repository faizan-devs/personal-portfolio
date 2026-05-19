import Link from 'next/link';
import OpenSourceCard from '../components/OpenSourceCard';
import { openSource } from '../data';

export default function OpenSourcePage() {
	return (
		<div className="listing-page">
			{/* Back Button */}
			<Link href="/" className="listing-back">
				← Back to Home
			</Link>

			{/* Header */}
			<header className="listing-header">
				<h1 className="listing-title">Open Source Contributions</h1>
				<p className="listing-description">
					My contributions to the open source community.
				</p>
			</header>

			{/* Open Source Grid */}
			<div className="listing-list">
				{openSource.map((project) => (
					<OpenSourceCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}
