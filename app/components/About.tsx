'use client';

import { useId, useMemo, useState } from 'react';

interface AboutProps {
	bio: string;
}

function getParagraphs(bio: string) {
	return bio
		.split(/\n{2,}/)
		.map((paragraph) => paragraph.replace(/\s*\n\s*/g, ' ').trim())
		.filter(Boolean);
}

function renderHighlightedText(text: string) {
	return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
		if (part.startsWith('**') && part.endsWith('**')) {
			return (
				<strong key={`${part}-${index}`} className="about-highlight">
					{part.slice(2, -2)}
				</strong>
			);
		}

		return part;
	});
}

export default function About({ bio }: AboutProps) {
	const [isExpanded, setIsExpanded] = useState(false);
	const contentId = useId();
	const paragraphs = useMemo(() => getParagraphs(bio), [bio]);
	const canToggle = paragraphs.length > 1;

	return (
		<div
			className={`about-shell ${isExpanded ? 'is-expanded' : 'is-collapsed'} ${
				canToggle ? 'has-toggle' : ''
			}`}
		>
			<div className="about-copy" id={contentId}>
				{paragraphs.map((paragraph) => (
					<p className="intro-text" key={paragraph}>
						{renderHighlightedText(paragraph)}
					</p>
				))}
			</div>

			{canToggle && (
				<button
					type="button"
					className="about-toggle"
					aria-controls={contentId}
					aria-expanded={isExpanded}
					onClick={() => setIsExpanded((current) => !current)}
				>
					<span>{isExpanded ? 'show less' : 'show more'}</span>
					<span className="about-toggle-icon" aria-hidden="true">
						{isExpanded ? '^' : '->'}
					</span>
				</button>
			)}
		</div>
	);
}
