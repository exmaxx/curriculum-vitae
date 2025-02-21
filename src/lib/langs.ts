export const Langs = {
	cs: 'cs',
	en: 'en',
} as const

export type Lang = (typeof Langs)[keyof typeof Langs]
