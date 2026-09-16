import type { Localized } from '../types.js'

export const titles = {
	summary: {
		cs: 'Profil',
		en: 'Summary',
	},
	skills: {
		cs: 'Dovednosti',
		en: 'Skills',
	},
	whoIAm: {
		cs: 'Kdo jsem',
		en: 'Who I am',
	},
	personality: {
		cs: 'Osobnost',
		en: 'Personality',
	},
	workInterests: {
		cs: 'Zájmy spojené s prací',
		en: 'Work-related interests',
	},
	languages: {
		cs: 'Jazyky',
		en: 'Languages',
	},
	education: {
		cs: 'Vzdělání',
		en: 'Education',
	},
	techProfiles: {
		cs: 'Mé profily',
		en: 'Tech profiles',
	},
	experienceWorkSelection: {
		cs: 'Praxe (Výběr)',
		en: 'Work Experience (Highlight)',
	},
	experienceWorkOther: {
		cs: 'Praxe (Další)',
		en: 'Work Experience (Additional)',
	},
	experienceProjects: {
		cs: 'Osobní projekty',
		en: 'Personal Projects',
	},
	experienceProjectsOther: {
		cs: 'Osobní projekty (Další)',
		en: 'Personal Projects (Additional)',
	},
} as const satisfies Record<string, Localized<string>>

export type TitleKey = keyof typeof titles
