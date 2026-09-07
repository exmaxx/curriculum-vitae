import type { Lang } from '$lib/langs'

export type Localized<T> = Record<Lang, T>

export type ProfileId = 'frontend' | 'fullstack' | 'abap'

export type Profile = {
	summary: Localized<string>[]
}
