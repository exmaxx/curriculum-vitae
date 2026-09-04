/**
 * Single source of truth for the CV.
 *
 * Edit arrays/objects here; the renderer maps each `type` to a component.
 * Empty arrays/objects are skipped (the block, its heading, and its page
 * are not rendered).
 */
import type {
	BadgeGroupsNode,
	BadgeItem,
	ColumnNode,
	ContactsNode,
	CvNode,
	DocumentNode,
	ExperienceItem,
	ExperiencesNode,
	HeaderNode,
	LeadNode,
	ListNode,
	PageNode,
	SectionNode,
	SkillsHighlightNode,
	TitleNode,
} from './types'

const tech = (highlighted: string[], rest: string[] = []): BadgeItem[] => [
	...highlighted.map((label) => ({ label, highlight: true })),
	...rest.map((label) => ({ label })),
]

const yearsLabel = { cs: 'roky', en: 'years' }
const techLabel = { cs: 'Tech', en: 'Tech' }

const title: TitleNode = {
	type: 'title',
	class: 'ml-2 grow',
	firstName: 'Marek',
	surname: { cs: 'Uličný', en: 'Ulicny' },
	role: 'Senior Software Engineer',
}

const contacts: ContactsNode = {
	type: 'contacts',
	items: [
		{ href: 'tel:+420777163654', label: '+420 777 163 654' },
		{ href: 'mailto:xulicny@gmail.com', label: 'xulicny@gmail.com' },
		{ href: 'https://www.linkedin.com/in/marekulicny', label: 'linkedin/marekulicny' },
	],
}

const header: HeaderNode = {
	type: 'header',
	class: 'a4:flex-row flex flex-col',
	children: [title, contacts],
}

const lead: LeadNode = {
	type: 'lead',
	paragraphs: [
		{
			cs: [
				'Zkušený software engineer (',
				{ strong: '10 let ve frontend web developmentu, 7 let předchozích zkušeností se SAP' },
				').',
			],
			en: [
				'Experienced software engineer (',
				{ strong: '10 years in frontend web development, with 7 years of prior SAP experience' },
				').',
			],
		},
		{
			cs: [
				'Ovládající ',
				{ strong: 'Vue' },
				', ',
				{ strong: 'React' },
				', ',
				{ strong: 'TypeScript' },
				'. V minulosti pracoval s ',
				{ strong: 'ABAP' },
				'.',
			],
			en: [
				'Proficient in ',
				{ strong: 'Vue' },
				', ',
				{ strong: 'React' },
				', ',
				{ strong: 'TypeScript' },
				'. Worked with ',
				{ strong: 'ABAP' },
				' in the past.',
			],
		},
		{
			cs: [{ strong: 'Cross-team' }, ' spolupracovník, schopný ', { strong: 'vést tým' }, '.'],
			en: [{ strong: 'Cross-team' }, ' collaborator, able to ', { strong: 'lead a team' }, '.'],
		},
	],
}

const skillsHighlight: SkillsHighlightNode = {
	type: 'skillsHighlight',
	yearsLabel,
	items: [
		{ name: 'Vue', years: 5, logo: 'vue-logo.svg' },
		{ name: 'React', years: 4, logo: 'react-logo.svg' },
		{ name: 'TypeScript', years: 4, logo: 'typescript-logo.svg' },
	],
}

const skillsTech: BadgeGroupsNode = {
	type: 'badgeGroups',
	class: 'flex flex-col gap-1',
	groups: [
		{
			items: [
				'Tailwind 4',
				'Docker',
				'Web Vitals',
				'TDD',
				'refactoring',
				{ cs: 'hloubkové code reviews', en: 'deep code reviews' },
			],
		},
		{
			heading: { cs: 'SAP', en: 'SAP' },
			items: ['ABAP', 'ABAP Objects', 'SAP SD', 'SAP MM', 'SAP Workflow'],
		},
	],
}

const personality: ListNode = {
	type: 'list',
	heading: { cs: 'Osobnost', en: 'Personality' },
	items: [
		{ cs: 'upřímný, spolehlivý, komunikativní, empatický', en: 'Honest, reliable, communicative, empathetic' },
		{ cs: 'zaměřený na detaily', en: 'Detail-oriented' },
		{ cs: 'Aktivně řeším problémy', en: 'Proactive problem solver' },
		{ cs: 'týmový hráč', en: 'Team player' },
	],
}

const interests: ListNode = {
	type: 'list',
	heading: { cs: 'Zájmy spojené s prací', en: 'Work-related interests' },
	items: [
		{ cs: 'UX, AI-nástroje', en: 'UX, AI-powered tools' },
		{ cs: 'grafy, vizualizace dat', en: 'Charts, data visualization' },
		{ cs: 'Advent of Code, Godot (vývoj her)', en: 'Advent of Code, Godot (gamedev)' },
	],
}

const languages: ListNode = {
	type: 'list',
	heading: { cs: 'Jazyky', en: 'Languages' },
	items: [
		{ cs: 'Anglický: plynně (C1)', en: 'English: fluent (C1)' },
		{ cs: 'Český: rodný', en: 'Czech: native' },
	],
}

const education: ListNode = {
	type: 'list',
	heading: { cs: 'Vzdělání', en: 'Education' },
	items: [
		{
			cs: 'Masarykova univerzita (Brno, Česká republika), Fakulta informatiky, magisterské',
			en: "Masaryk University (Brno, Czech Republic), Faculty of Informatics, Master's",
		},
	],
}

const profiles: ListNode = {
	type: 'list',
	heading: { cs: 'Mé profily', en: 'Tech profiles' },
	variant: 'inline',
	items: [
		{ text: 'StackOverflow', href: 'https://stackoverflow.com/users/2016383/exmaxx' },
		{ text: 'GitHub', href: 'https://github.com/exmaxx' },
	],
}

const workHighlight: ExperienceItem[] = [
	{
		position: 'Senior Frontend Engineer',
		period: '2025-2026',
		title: 'MoroSystems, Czech Republic',
		badges: ['Remote'],
		links: [{ url: 'https://www.morosystems.cz' }],
		description: {
			cs: 'Vylepšil jsem komplexní aplikaci pro supply chain finance. Mezinárodní tým.',
			en: 'Enhanced a complex supply chain finance app. International team.',
		},
		details: [
			{
				cs: 'Pomohl migrovat legacy Vue na moderní, udržitelný React stack',
				en: 'Helped migrate legacy Vue to a modern, maintainable React stack',
			},
			{
				cs: 'AI-asistovaný vývoj k urychlení migrace',
				en: 'AI-assisted development to speed up migration',
			},
		],
		tech: tech(
			['Vue', 'React', 'TypeScript'],
			['React Query', 'React Router', 'Tailwind', 'REST API', 'Node.js', 'Cursor AI', 'Claude Code']
		),
	},
	{
		position: 'Senior Frontend Engineer',
		period: '2020-2024',
		title: 'Dr. Max, Czech Republic',
		badges: ['Remote'],
		links: [{ url: 'https://www.drmax.cz' }],
		description: {
			cs: 'Velký mezinárodní tým spravující e-shop s léčivy. Mou hlavní náplní byl rozvoj modulu Checkout a rollout e-shopu do Polska.',
			en: 'Contributed to a large-scale e-commerce platform for pharmaceuticals, especially Checkout module. Large international team.',
		},
		details: [
			{
				cs: 'Refactoroval jsem komplexní části Checkoutu, používal SOLID, zjednodušil kód - zrychlení debuggingu a vývoje',
				en: 'Refactored complex parts of the Checkout module, applied SOLID, simplified code - faster debugging and feature development',
			},
			{
				cs: 'Zlepšoval "performance" e-shopu, vylepšoval Web Vitals (rychlejší nahrávání webu, odstranění poskakování obsahu, atp.)',
				en: 'Improved performance (faster load times) and Web Vitals scores',
			},
			{
				cs: 'Převáděl designy z Figmy do "pixel-perfect" UI',
				en: 'Transformed Figma designs into pixel-perfect UI',
			},
			{
				cs: 'Propojoval FE týmy při rolloutu do Polska - včasné doručení řešení',
				en: 'Bridged FE teams communication during the Poland rollout, reducing implementation time',
			},
		],
		tech: tech(
			['Vue', 'TypeScript'],
			['Vuex', 'Nuxt', 'GraphQL', 'Web Vitals', 'Azure DevOps', 'SpeedCurve', 'Docker', 'Kubernetes', 'Elastic']
		),
	},
	{
		position: 'Senior Frontend Engineer & Team Leader',
		period: '2018-2019',
		title: 'Dr. Max, Czech Republic',
		badges: ['Remote'],
		links: [{ url: 'https://www.drmax.cz' }],
		description: {
			cs: 'Samostatná Checkout aplikace, lékárenský e-shop.',
			en: 'Built standalone Checkout web app for the online pharmacy.',
		},
		details: [
			{ cs: 'Vedl jsem tým 2 vývojářů', en: 'Led a team of 2 developers' },
			{
				cs: 'Navrhl architekturu & doručil kompletní řešení',
				en: 'Made key architecture decisions & delivered a complete solution',
			},
			{
				cs: 'Zajistil kvalitu kódu pomocí typování a unit testů',
				en: 'Enhanced code quality through type safety and unit tests',
			},
		],
		tech: tech(['React'], ['Redux', 'Flowtype', 'REST API', 'React Test Utils']),
	},
	{
		position: 'ABAP Developer',
		period: '2010-2013',
		title: 'Mann + Hummel, Czech Republic',
		badges: ['On-site'],
		description: {
			cs: 'ABAP vývojář a specialista na SAP Workflow. Člen týmu IT podpory pro české a německé výrobní závody.',
			en: 'ABAP developer and SAP Workflow specialist. IT support team member for Czech and German manufacturing plants.',
		},
		details: [
			{
				cs: 'Vývoj a údržba ABAP aplikací pro interní oddělení',
				en: 'Developed and maintained ABAP applications for internal departments',
			},
			{
				cs: 'Implementace a podpora SAP Workflow',
				en: 'Implemented and supported SAP Workflow solutions',
			},
		],
		tech: tech(['ABAP'], ['ABAP Objects', 'SAP Workflow', 'SAP SD', 'SAP MM', 'Web Dynpro']),
	},
	{
		position: 'ABAP Developer / Team Leader',
		period: '2007-2010',
		title: 'IDS Scheer, Czech Republic',
		badges: ['On-site'],
		description: {
			cs: 'SAP vývojář pro klienty IDS Scheer. Vedoucí malého týmu, hlavní kontakt pro ABAP témata.',
			en: 'SAP developer for IDS Scheer clients. Led a small team, go-to person for ABAP topics.',
		},
		details: [
			{
				cs: 'Vývoj custom ABAP řešení pro moduly SD, MM a FI',
				en: 'Custom ABAP development for SD, MM, and FI modules',
			},
			{
				cs: 'Workflow, ALV reporty, SmartForms, batch input',
				en: 'Workflow, ALV reports, SmartForms, batch input',
			},
		],
		tech: tech(['ABAP'], ['SAP Workflow', 'SAP SD', 'SAP MM', 'SAP FI']),
	},
]

const workOther: ExperienceItem[] = [
	{
		position: 'Full-stack Developer / Team Leader / Co-owner',
		period: '2015-2019',
		title: 'Rascasone, Czech Republic',
		badges: ['Hybrid'],
		links: [{ url: 'https://www.rascasone.com' }],
		description: {
			cs: 'Malá mezinárodní vývojářská agentura.',
			en: 'Co-owned and led a small international development agency.',
		},
		details: [
			{ cs: 'Vedl týmy 1–3 lidí', en: 'Led teams of 1–3' },
			{ cs: 'Komunikace s klienty a plánování projektů', en: 'Client communication and project planning' },
			{
				cs: 'Full-stack v Ruby on Rails (1 rok) — webová aplikace pro pojišťovacího makléře, vylepšení aplikace bezpečnostní agentury',
				en: 'Full-stack Ruby on Rails (1 year) — web app for an insurance broker, enhancements to a security agency app',
			},
			{
				cs: 'Několik frontendů v Reactu',
				en: 'Several frontends in React (including Esticom and Dr. Max)',
			},
		],
		tech: tech(['Ruby on Rails', 'Ruby'], ['REST API', 'JavaScript', 'React']),
	},
	{
		position: 'Frontend Developer (React)',
		period: '2016-2017',
		title: { cs: 'Esticom (nyní Procore), USA', en: 'Esticom (now Procore), USA' },
		badges: ['Remote'],
		links: [{ url: 'https://www.esticom.com' }],
		description: {
			cs: 'Webová aplikace pro stavební inženýry - stavební nákresy, odhady cen prací, rozesílání nabídek. Malý mezinárodní tým.',
			en: 'Web application for civil engineers. Small international team.',
		},
		details: [
			{
				cs: 'Vyvíjel jsem komplexní interaktivní tabulku pro odhad cen a stránku pro tvorbu koncové nabídky, včetně preview PDF',
				en: 'Developed complex interactive cost estimation table and final bid page with resulting PDF preview',
			},
		],
		tech: tech(['React'], ['Redux', 'REST API']),
	},
]

const projectsOther: ExperienceItem[] = [
	{
		position: { cs: 'Aplikace pro sledování osobních financí', en: 'Personal Finance Tracking App' },
		period: '2026',
		details: [
			{
				cs: 'Zpracování bankovních e-mailových notifikací a CSV souborů',
				en: 'Processing of bank email notifications and CSV files',
			},
			{
				cs: 'Bohatý responzivní UI (shadcn), reporty, prognózy',
				en: 'Rich responsive UI (shadcn), reports, forecasts',
			},
			{
				cs: 'AI párování refundací (Mistral AI)',
				en: 'AI-based refund matching (Mistral AI)',
			},
		],
		tech: tech(['Supabase'], ['PostgreSQL', 'Vercel', 'Cursor AI', 'Mistral AI']),
	},
	{
		position: { cs: 'Kalkulačka a srovnávač platů', en: 'Salary Calculator & Comparator' },
		period: '2024',
		details: [
			{
				cs: ['Postaveno ve Svelte, nasazeno na Vercelu, ', { a: 'web', href: 'https://cz-income-simple.vercel.app' }],
				en: ['Built Svelte app, deployed to Vercel, ', { a: 'web', href: 'https://cz-income-simple.vercel.app' }],
			},
			{
				cs: [
					'Knihovna napsaná v TypeScriptu, publikováno na npm ',
					{ a: 'zdroj', href: 'https://github.com/exmaxx/cz-income-lib' },
				],
				en: [
					'Developed a TypeScript lib, published on npm, ',
					{ a: 'source', href: 'https://github.com/exmaxx/cz-income-lib' },
				],
			},
		],
		tech: tech(['Svelte', 'TypeScript'], ['Tailwind', 'Vercel']),
	},
	{
		position: 'Active Explorer Gem',
		period: '2016',
		title: { cs: 'Open source', en: 'Open source' },
		details: [
			{
				cs: 'Knihovna pro Ruby, která zobrazuje runtime data a jejich vazby jako obrázek.',
				en: 'Ruby library that visualizes runtime data and associations as an image.',
			},
			{
				cs: [
					'Usnadňuje debugging v Ruby on Rails (výstup do konzole i GraphViz obrázek), ',
					{ a: 'zdroj', href: 'https://github.com/exmaxx/active_explorer' },
				],
				en: [
					'Makes Rails debugging easier (console output and GraphViz image), ',
					{ a: 'source', href: 'https://github.com/exmaxx/active_explorer' },
				],
			},
		],
		tech: tech(['Ruby', 'Ruby on Rails'], ['Active Record', 'GraphViz']),
	},
]

const experiences = (items: ExperienceItem[]): ExperiencesNode => ({
	type: 'experiences',
	techLabel,
	items,
})

const section = (heading: SectionNode['heading'], headingClass: string, children: CvNode[]): SectionNode => ({
	type: 'section',
	heading,
	headingClass,
	children,
})

const sidebar: ColumnNode = {
	type: 'column',
	class: 'border-secondary bg-accent flex flex-col gap-3 rounded-xl px-5 pb-4',
	children: [
		section({ cs: 'Profil', en: 'Summary' }, '', [lead]),
		section({ cs: 'Dovednosti', en: 'Skills' }, 'mt-1', [skillsHighlight, skillsTech]),
		section({ cs: 'Kdo jsem', en: 'Who I am' }, 'mt-1', [personality, interests, languages, education, profiles]),
	],
}

const page1: PageNode = {
	type: 'page',
	class: 'a4:grid a4:grid-cols-[auto_380px]',
	children: [
		sidebar,
		{
			type: 'column',
			children: [
				section({ cs: 'Praxe (Výběr)', en: 'Work Experience (Highlight)' }, 'mt-1 bg-zinc-100', [
					experiences(workHighlight),
				]),
			],
		},
	],
}

const page2: PageNode = {
	type: 'page',
	children: [
		{
			type: 'column',
			children: [
				section({ cs: 'Praxe (Další)', en: 'Work Experience (Additional)' }, 'mt-1 bg-zinc-100', [
					experiences(workOther),
				]),
				section({ cs: 'Osobní projekty (Další)', en: 'Personal Projects (Additional)' }, 'mt-6 bg-zinc-100', [
					experiences(projectsOther),
				]),
			],
		},
	],
}

export const cv: DocumentNode = {
	type: 'document',
	class: 'a4:px-11 px-6 py-8 print:shadow-none',
	children: [header, page1, page2],
}
