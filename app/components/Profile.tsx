import Image from 'next/image';
import Link from 'next/link';
import { ProfileData } from '../types';

interface ProfileProps {
	data: ProfileData;
}

export default function Profile({ data }: ProfileProps) {
	return (
		<aside className="sidebar">
			<div className="profile-avatar">
				<Image
					src={data.avatar}
					alt={data.name}
					fill
					className="object-cover"
					priority
					sizes="300px"
				/>
			</div>

			<h1 className="profile-name">{data.name}</h1>
			<p className="profile-role">{data.role}</p>

			<div className="profile-socials" aria-label="Social links">
				{data.socialLinks.map((social) => (
					<Link
						key={social.name}
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						className="profile-social"
						aria-label={social.name}
					>
						<SocialIcon icon={social.icon} />
					</Link>
				))}
			</div>

			<div className="profile-divider" />

			<div className="profile-details">
				<a className="profile-detail" href={`mailto:${data.email}`}>
					<MailIcon />
					<span>{data.email}</span>
				</a>
				<p className="profile-detail">
					<LocationIcon />
					<span>{data.location}</span>
				</p>
				<p className="profile-detail">
					<CvIcon />
					<span>
						<Link
							className="profile-cv-link"
							href={data.resumeUrl}
							target="_blank"
						>
							CV
						</Link>{' '}
						<span className="profile-cv-note">(as of early 2026)</span>
					</span>
				</p>
			</div>
		</aside>
	);
}

function SocialIcon({ icon }: { icon: string }) {
	if (icon === 'github') {
		return (
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="M12 .5C5.73.5.77 5.46.77 11.73c0 4.96 3.21 9.17 7.66 10.66.56.1.76-.24.76-.54v-2c-3.12.68-3.78-1.34-3.78-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.49-.28-5.11-1.25-5.11-5.55 0-1.23.44-2.23 1.16-3.01-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15.9-.25 1.86-.37 2.82-.38.96.01 1.92.13 2.82.38 2.15-1.45 3.09-1.15 3.09-1.15.62 1.55.23 2.69.12 2.98.72.78 1.15 1.78 1.15 3.01 0 4.31-2.63 5.26-5.13 5.54.4.35.76 1.03.76 2.08v3.06c0 .3.2.65.77.54a11.24 11.24 0 0 0 7.65-10.66C23.23 5.46 18.27.5 12 .5Z" />
			</svg>
		);
	}

	if (icon === 'linkedin') {
		return (
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path d="M5.37 7.86H1.8V22h3.57V7.86ZM3.59 2a2.07 2.07 0 1 0 0 4.14 2.07 2.07 0 0 0 0-4.14Zm18.6 11.98c0-3.8-2.03-5.56-4.74-5.56-2.18 0-3.16 1.2-3.7 2.04v-1.8h-3.56c.05 1 .01 13.34.01 13.34h3.56v-7.45c0-.4.03-.8.15-1.08.32-.8 1.05-1.62 2.28-1.62 1.61 0 2.26 1.23 2.26 3.03V22h3.57v-8.02Z" />
			</svg>
		);
	}

	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M18.24 2.25h3.28l-7.17 8.2L22.79 21.4h-6.61l-5.18-6.77-5.92 6.77H1.79l7.67-8.77L1.36 2.25h6.78l4.68 6.19 5.42-6.19Zm-1.15 17.22h1.82L7.15 4.08H5.19l11.9 15.39Z" />
		</svg>
	);
}

function MailIcon() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M3.5 5.75h17v12.5h-17V5.75Zm1.5 1.5v.7l7 4.54 7-4.54v-.7H5Zm14 2.49-7 4.54-7-4.54v7.01h14V9.74Z" />
		</svg>
	);
}

function LocationIcon() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M12 2.75a7.25 7.25 0 0 0-7.25 7.25c0 5.19 6.39 10.86 6.66 11.1l.59.52.59-.52c.27-.24 6.66-5.91 6.66-11.1A7.25 7.25 0 0 0 12 2.75Zm0 16.44C10.55 17.8 6.25 13.3 6.25 10a5.75 5.75 0 1 1 11.5 0c0 3.3-4.3 7.8-5.75 9.19ZM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
		</svg>
	);
}

function CvIcon() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path d="M6 2.75h9.1L20 7.65v13.6H6V19H4V4.75h2v-2Zm10 2.56V7h1.69L16 5.31Zm-8.5-1.06v15.5h11V8.5h-4V4.25h-7ZM4 6.25v11.25h1V6.25H4Zm5.75 5h6.5v1.5h-6.5v-1.5Zm0 3h6.5v1.5h-6.5v-1.5Zm0-6h3.5v1.5h-3.5v-1.5Z" />
		</svg>
	);
}
