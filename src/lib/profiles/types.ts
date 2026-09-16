import type { Lang } from '$lib/langs'

export type Localized<T> = Record<Lang, T>

export type ProfileId = 'frontend' | 'fullstack' | 'abap'

export type ProfileLink = {
	label: string
	href: string
}

export type WhoShared = {
	languages: Localized<string>[]
	education: Localized<string>[]
	profiles: ProfileLink[]
}

export type WhoProfileContent = {
	personality: Localized<string>[]
	interests: Localized<string>[]
}

export type Who = WhoShared & WhoProfileContent

export type ProfileModule = {
	summary: Localized<string>[]
	who: WhoProfileContent
}

export type Profile = {
	summary: Localized<string>[]
	who: Who
}
