import Image from 'next/image';
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
					sizes="250px"
				/>
			</div>

			<h1 className="profile-name">{data.name}</h1>
			<p className="profile-role">{data.role}</p>
			<p className="profile-tagline">{data.tagline}</p>
		</aside>
	);
}
