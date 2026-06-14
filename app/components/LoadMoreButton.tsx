import Link from 'next/link';

interface LoadMoreButtonProps {
	href: string;
	text?: string;
}

export default function LoadMoreButton({
	href,
	text = 'View All',
}: LoadMoreButtonProps) {
	return (
		<Link href={href} className="load-more">
			{text}
		</Link>
	);
}
