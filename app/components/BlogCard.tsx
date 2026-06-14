import Image from 'next/image';
import Link from 'next/link';
import { Blog } from '../types';

interface BlogCardProps {
	blog: Blog;
	variant?: 'teaser' | 'detail';
}

export default function BlogCard({ blog, variant = 'detail' }: BlogCardProps) {
	const formatDate = (dateString: string) => {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		});
	};

	const content = (
		<>
			{/* Blog Image */}
			<div className="card-image">
				<Image
					src={blog.image}
					alt={blog.title}
					fill
					className="object-cover"
					sizes="192px"
				/>
			</div>

			{/* Blog Info */}
			<div className="card-content">
				<div className="card-heading">
					<h3 className="card-title">{blog.title}</h3>
					<div className="card-meta">
						<span className="date">{formatDate(blog.date)}</span>
					</div>
				</div>
				<p className="card-description">{blog.description}</p>
				{variant === 'detail' && (
					<Link
						href={blog.link}
						target="_blank"
						rel="noopener noreferrer"
						className="learn-more"
					>
						Read more →
					</Link>
				)}
			</div>
		</>
	);

	if (variant === 'teaser') {
		return (
			<Link href="/blogs" className="card">
				{content}
			</Link>
		);
	}

	return <div className="card">{content}</div>;
}
