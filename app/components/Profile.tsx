import Image from 'next/image';
import Link from 'next/link';
import { ProfileData } from '../types';

interface ProfileProps {
	data: ProfileData;
}

export default function Profile({ data }: ProfileProps) {
	return (
		<aside className="sidebar">
			{/* Profile Photo */}
			<div className="profile-photo">
				<Image
					src={data.avatar}
					alt={data.name}
					fill
					className="object-cover"
					priority
					sizes="192px"
				/>
			</div>

			{/* Name and Role */}
			<h1 className="profile-name">{data.name}</h1>
			<p className="profile-role">{data.role}</p>
			<p className="profile-location">{data.location}</p>

			{/* Social Links */}
			<div className="social-links">
				{data.socialLinks.map((social) => (
					<Link
						key={social.name}
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						className="social-link"
					>
						{social.name}
					</Link>
				))}
			</div>

			{/* Resume Download */}
			<Link href={data.resumeUrl} target="_blank" className="resume-button">
				<svg
					className="w-4 h-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
					/>
				</svg>
				Download Resume
			</Link>
		</aside>
	);
}
