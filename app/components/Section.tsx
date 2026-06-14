interface SectionProps {
	title: string;
	children: React.ReactNode;
	id?: string;
}

export default function Section({ title, children, id }: SectionProps) {
	return (
		<section id={id} className="section">
			<h2 className="section-title">{title}</h2>
			<div>{children}</div>
		</section>
	);
}
