import Link from 'next/link';
import BlogCard from '../components/BlogCard';
import { blogs } from '../data';

export default function BlogsPage() {
	return (
		<div className="listing-page">
			{/* Back Button */}
			<Link href="/" className="listing-back">
				← Back to Home
			</Link>

			{/* Header */}
			<header className="listing-header">
				<h1 className="listing-title">All Blogs</h1>
				<p className="listing-description">
					My thoughts, tutorials, and experiences in software development.
				</p>
			</header>

			{/* Blogs Grid */}
			<div className="listing-list">
				{blogs.map((blog) => (
					<BlogCard key={blog.id} blog={blog} />
				))}
			</div>
		</div>
	);
}
