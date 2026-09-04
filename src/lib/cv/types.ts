import type { Lang } from '$lib/langs'

export type Localized<T = string> = Record<Lang, T>
export type I18n<T = string> = Localized<T> | T

export type TextPart = string | { strong: string } | { em: string } | { a: string; href: string }
export type Rich = I18n<string | TextPart[]>

export type TextItem = {
	type?: 'text'
	text: Rich
}

export type LinkItem = {
	type?: 'link'
	text: I18n
	href: string
}

export type BadgeItem = {
	type?: 'badge'
	label: I18n
	highlight?: boolean
}

export type ListItem = I18n | TextItem | LinkItem

export type SkillHighlightItem = {
	name: string
	years: number
	logo?: string
}

export type BadgeGroup = {
	heading?: I18n
	items: Array<I18n | BadgeItem>
}

export type ExperienceItem = {
	position: I18n
	period: string
	title?: I18n
	badges?: I18n[]
	links?: { url: string; title?: I18n }[]
	description?: Rich
	details?: Rich[]
	tech?: BadgeItem[]
}

export type TitleNode = {
	type: 'title'
	class?: string
	firstName: string
	surname: I18n
	role: I18n
}

export type ContactsNode = {
	type: 'contacts'
	class?: string
	items: { href: string; label: string }[]
}

export type HeaderNode = {
	type: 'header'
	class?: string
	children?: CvNode[]
}

export type PageNode = {
	type: 'page'
	class?: string
	children?: CvNode[]
}

export type ColumnNode = {
	type: 'column'
	class?: string
	children?: CvNode[]
}

export type SectionNode = {
	type: 'section'
	class?: string
	heading?: I18n
	headingClass?: string
	children?: CvNode[]
}

export type LeadNode = {
	type: 'lead'
	paragraphs: Rich[]
}

export type SkillsHighlightNode = {
	type: 'skillsHighlight'
	yearsLabel: I18n
	items: SkillHighlightItem[]
}

export type BadgeGroupsNode = {
	type: 'badgeGroups'
	class?: string
	groups: BadgeGroup[]
}

export type ListNode = {
	type: 'list'
	heading?: I18n
	headingLevel?: 2 | 3
	headingClass?: string
	variant?: 'bullets' | 'inline'
	items: ListItem[]
}

export type ExperiencesNode = {
	type: 'experiences'
	techLabel?: I18n
	items: ExperienceItem[]
}

export type DocumentNode = {
	type: 'document'
	class?: string
	children?: CvNode[]
}

export type CvNode =
	| DocumentNode
	| HeaderNode
	| TitleNode
	| ContactsNode
	| PageNode
	| ColumnNode
	| SectionNode
	| LeadNode
	| SkillsHighlightNode
	| BadgeGroupsNode
	| ListNode
	| ExperiencesNode

export type BlockType = CvNode['type']
