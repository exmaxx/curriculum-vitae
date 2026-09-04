import type { BadgeGroup, BadgeItem, CvNode, I18n, ListItem } from './types'

const emptiness: Record<string, (node: CvNode) => boolean> = {
	title: (node) => {
		const n = node as Extract<CvNode, { type: 'title' }>
		return ![n.firstName, n.surname, n.role].some(Boolean)
	},
	contacts: (node) => present((node as Extract<CvNode, { type: 'contacts' }>).items).length === 0,
	lead: (node) => present((node as Extract<CvNode, { type: 'lead' }>).paragraphs).length === 0,
	skillsHighlight: (node) => present((node as Extract<CvNode, { type: 'skillsHighlight' }>).items).length === 0,
	badgeGroups: (node) => present((node as Extract<CvNode, { type: 'badgeGroups' }>).groups).length === 0,
	list: (node) => present((node as Extract<CvNode, { type: 'list' }>).items).length === 0,
	experiences: (node) => present((node as Extract<CvNode, { type: 'experiences' }>).items).length === 0,
	header: (node) => present((node as Extract<CvNode, { type: 'header' }>).children).length === 0,
	page: (node) => present((node as Extract<CvNode, { type: 'page' }>).children).length === 0,
	column: (node) => present((node as Extract<CvNode, { type: 'column' }>).children).length === 0,
	section: (node) => present((node as Extract<CvNode, { type: 'section' }>).children).length === 0,
	document: (node) => present((node as Extract<CvNode, { type: 'document' }>).children).length === 0,
}

export function isEmpty(node: CvNode): boolean {
	return emptiness[node.type]?.(node) ?? false
}

export function hasContent(node: CvNode): boolean {
	return !isEmpty(node)
}

export function present<T>(items: T[] | undefined | null): T[] {
	return (items ?? []).filter((item) => {
		if (item == null || item === '') return false
		if (Array.isArray(item)) return present(item).length > 0
		if (typeof item === 'object' && 'type' in item && emptiness[(item as CvNode).type]) {
			return hasContent(item as CvNode)
		}
		if (isBadgeGroup(item)) return present(item.items).length > 0
		return true
	})
}

export function nonempty<T>(items: T[] | undefined | null): T[][] {
	const shown = present(items)
	return shown.length ? [shown] : []
}

export function gate<T>(value: T | false | null | undefined | ''): T[] {
	return value ? [value] : []
}

export function badgeTone(item: BadgeItem, inline = false): string {
	const highlight = item.highlight ? 'highlight' : 'default'
	return inline ? (item.highlight ? 'inline-highlight' : 'inline') : highlight
}

export function isLinkItem(item: ListItem): item is Extract<ListItem, { href: string }> {
	return typeof item === 'object' && item !== null && 'href' in item
}

export function isBadgeItem(item: I18n | BadgeItem): item is BadgeItem {
	return typeof item === 'object' && item !== null && 'label' in item
}

function isBadgeGroup(item: unknown): item is BadgeGroup {
	return typeof item === 'object' && item !== null && 'items' in item && !('type' in item)
}
