import * as abap from './abap/index.js'
import * as frontend from './frontend/index.js'
import * as fullstack from './fullstack/index.js'
import type { Profile, ProfileId } from './types.js'

const profiles: Record<ProfileId, Profile> = {
	frontend,
	fullstack,
	abap,
}

export const ACTIVE_PROFILE_ID = (import.meta.env.VITE_CV_PROFILE ?? 'frontend') as ProfileId

export const profile = profiles[ACTIVE_PROFILE_ID] ?? profiles.frontend
