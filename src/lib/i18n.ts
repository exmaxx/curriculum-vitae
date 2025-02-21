import { page } from '$app/state'
import type { Lang } from '$lib/langs'
import { DEFAULT_LANG } from '$lib/constants'

type Translations = Record<Lang, Record<string, string>>

export default (translations: Translations) =>
	(key: string): string => {
		const lang: Lang = (page.params.lang || DEFAULT_LANG) as Lang

		return translations[lang][key]
	}
