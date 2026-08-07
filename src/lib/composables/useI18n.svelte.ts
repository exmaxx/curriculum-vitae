import { page } from '$app/state'
import type { Lang } from '$lib/langs'
import { DEFAULT_LANG } from '$lib/constants'

type Translations = Record<Lang, Record<string, string>>

export default function useI18n(translations: Translations) {
	const lang = $derived(page.params.lang || DEFAULT_LANG) as Lang

	return (key: string): string => translations[lang][key]
}
