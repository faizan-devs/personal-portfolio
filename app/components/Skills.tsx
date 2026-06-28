import type { CSSProperties } from 'react';
import { Skill } from '../types';

interface SkillsProps {
	skills: Skill[];
}

const customLogoPattern =
	/^(\/|https?:\/\/|data:image\/|\.{1,2}\/).+\.(svg|png|jpe?g|webp)(\?.*)?$/i;

function getLogoUrl(skill: Skill) {
	const logo = skill.logo.trim();

	if (!logo) {
		return '';
	}

	if (customLogoPattern.test(logo)) {
		return logo;
	}

	const iconColor = skill.color.replace('#', '').trim();
	const safeColor = /^[0-9a-f]{3,8}$/i.test(iconColor) ? iconColor : 'f5f5f5';

	return `https://cdn.simpleicons.org/${logo.toLowerCase()}/${safeColor}`;
}

function getFallbackLogo(name: string) {
	const words = name.split(/[^a-z0-9]+/i).filter(Boolean);

	if (words.length > 1) {
		return words
			.map((word) => word[0])
			.join('')
			.slice(0, 3)
			.toUpperCase();
	}

	return name.slice(0, 2).toUpperCase();
}

export default function Skills({ skills }: SkillsProps) {
	const marqueeSkills = [...skills, ...skills];

	return (
		<div className="skills-wrap" aria-label="Technical skills">
			<div className="skills-marquee">
				{marqueeSkills.map((skill, index) => {
					const logoUrl = getLogoUrl(skill);

					return (
						<div
							className="skill-pill"
							key={`${skill.name}-${index}`}
							style={
								{
									'--skill-color': skill.color,
									'--skill-logo-url': logoUrl
										? `url(${JSON.stringify(logoUrl)})`
										: 'none',
								} as CSSProperties
							}
						>
							<span className="skill-logo" aria-hidden="true">
								{logoUrl ? (
									<span className="skill-logo-mark" />
								) : (
									<span className="skill-logo-text">
										{getFallbackLogo(skill.name)}
									</span>
								)}
							</span>
							<span className="skill-name">{skill.name}</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}
