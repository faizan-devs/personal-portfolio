'use client';

import { useEffect, useState } from 'react';
import { Experience as ExperienceType } from '../types';

interface ExperienceProps {
	experience: ExperienceType[];
}

export default function Experience({ experience }: ExperienceProps) {
	const [selected, setSelected] = useState<ExperienceType | null>(null);

	useEffect(() => {
		if (!selected) {
			return;
		}

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				setSelected(null);
			}
		};

		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, [selected]);

	return (
		<>
			<div className="experience-list">
				{experience.map((item) => (
					<button
						type="button"
						className="experience-card"
						key={item.id}
						onClick={() => setSelected(item)}
						aria-label={`Open details for ${item.role} at ${item.company}`}
					>
						<div>
							<p className="experience-company">{item.company}</p>
							<h3 className="experience-role">{item.role}</h3>
							<p className="experience-location">{item.location}</p>
						</div>
						<div className="experience-meta">
							<span>
								{item.startDate} - {item.endDate}
							</span>
							<span>View details</span>
						</div>
					</button>
				))}
			</div>

			{selected && (
				<div
					className="modal-backdrop"
					role="presentation"
					onClick={() => setSelected(null)}
				>
					<article
						className="experience-modal"
						role="dialog"
						aria-modal="true"
						aria-labelledby="experience-modal-title"
						onClick={(event) => event.stopPropagation()}
					>
						<button
							type="button"
							className="modal-close"
							onClick={() => setSelected(null)}
							aria-label="Close experience details"
						>
							x
						</button>
						<p className="experience-company">{selected.company}</p>
						<h3 id="experience-modal-title" className="modal-title">
							{selected.role}
						</h3>
						<p className="modal-meta">
							{selected.startDate} - {selected.endDate} - {selected.location}
						</p>
						<div className="modal-scroll">
							<ul className="modal-work-list">
								{selected.highlights.map((item, index) => (
									<li
										className="modal-work-item"
										key={`${selected.id}-work-${index}`}
									>
										{item}
									</li>
								))}
							</ul>
						</div>
					</article>
				</div>
			)}
		</>
	);
}
