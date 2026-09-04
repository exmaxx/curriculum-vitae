export const headingTag = {
	2: 'h2',
	3: 'h3',
} as const

export const listVariantClass: Record<string, string> = {
	bullets: '',
	inline: 'flex list-none gap-2 text-nowrap',
}

export const badgeToneClass: Record<string, string> = {
	default: 'badge',
	highlight: 'badge badge-highlight',
	inline: 'badge inline',
	'inline-highlight': 'badge badge-highlight inline',
}

export const partKind = {
	string: 'text',
	strong: 'strong',
	em: 'em',
	a: 'link',
} as const
