import { DEFAULT_LANG } from '$lib/constants'
import type { Lang } from '$lib/langs'
import type { I18n, Localized, TextPart } from './types'

export function isLocalized<T>(value: unknown): value is Localized<T> {
	return typeof value === 'object' && value !== null && !Array.isArray(value) && 'en' in value
}

export function translate<T>(value: I18n<T>, lang: Lang): T {
	return isLocalized<T>(value) ? (value[lang] ?? value[DEFAULT_LANG]) : value
}

export function toParts(value: string | TextPart[]): TextPart[] {
	return typeof value === 'string' ? [value] : value
}

const partKeys = ['strong', 'em', 'a'] as const

export function partShape(part: TextPart): 'string' | (typeof partKeys)[number] {
	return typeof part === 'string' ? 'string' : (partKeys.find((key) => key in part) ?? 'a')
}

export function partHref(part: TextPart): string | undefined {
	return typeof part === 'object' && 'a' in part ? part.href : undefined
}

export function partText(part: TextPart): string {
	const texts: Record<string, (p: TextPart) => string> = {
		string: (p) => p as string,
		strong: (p) => (p as { strong: string }).strong,
		em: (p) => (p as { em: string }).em,
		a: (p) => (p as { a: string }).a,
	}
	return texts[partShape(part)](part)
}
