import { page } from '$app/state'
import type { Lang } from '$lib/types'

type Translations = Record<Lang, Record<string, string>>

export default (translations: Translations) =>
	(key: string): string => {
		const lang: Lang = (page.params.lang || 'en') as Lang

		return translations[lang][key]
	}
