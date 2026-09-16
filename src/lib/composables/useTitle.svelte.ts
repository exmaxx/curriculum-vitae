import { page } from '$app/state'
import { DEFAULT_LANG } from '$lib/constants.js'
import type { Lang } from '$lib/langs.js'
import { titles, type TitleKey } from '$lib/profiles/shared/titles.js'

export default function useTitle() {
	const lang = $derived((page.params.lang || DEFAULT_LANG) as Lang)

	return (key: TitleKey): string => titles[key][lang]
}
