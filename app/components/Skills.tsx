import type { CSSProperties } from 'react';
import { Skill } from '../types';

interface SkillsProps {
	skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
	const marqueeSkills = [...skills, ...skills];

	return (
		<div className="skills-wrap" aria-label="Technical skills">
			<div className="skills-marquee">
				{marqueeSkills.map((skill, index) => (
					<div
						className="skill-pill"
						key={`${skill.name}-${index}`}
						style={{ '--skill-color': skill.color } as CSSProperties}
					>
						<span className="skill-logo" aria-hidden="true">
							{skill.logo}
						</span>
						<span>{skill.name}</span>
					</div>
				))}
			</div>
		</div>
	);
}
