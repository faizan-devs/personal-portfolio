import { ProfileData } from '../types';

interface ContactProps {
	data: ProfileData;
}

export default function Contact({ data }: ContactProps) {
	return (
		<div>
			<p className="contact-info contact-lead">
				Feel free to reach out for collaborations, opportunities, or just to say
				hi!
			</p>

			<div className="contact-info">
				<p>
					<span>✉️</span> <a href={`mailto:${data.email}`}>{data.email}</a>
				</p>
			</div>
		</div>
	);
}
