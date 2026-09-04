import { page } from '$app/state'
import { DEFAULT_LANG } from '$lib/constants'
import type { Lang } from '$lib/langs'
import { translate, toParts } from './i18n.js'
import type { I18n, Rich, TextPart } from './types.js'

export function useLang() {
	const lang = $derived((page.params.lang || DEFAULT_LANG) as Lang)

	function t<T>(value: I18n<T>): T {
		return translate(value, lang)
	}

	function parts(value: Rich): TextPart[] {
		return toParts(t(value))
	}

	return {
		get lang() {
			return lang
		},
		t,
		parts,
	}
}
