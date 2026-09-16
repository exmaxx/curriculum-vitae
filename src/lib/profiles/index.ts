import * as abap from './abap/index.js'
import * as frontend from './frontend/index.js'
import * as fullstack from './fullstack/index.js'
import { who as sharedWho } from './shared/who.js'
import type { Profile, ProfileId, ProfileModule } from './types.js'

function buildProfile({ summary, who }: ProfileModule): Profile {
	return {
		summary,
		who: { ...sharedWho, ...who },
	}
}

const profiles: Record<ProfileId, Profile> = {
	frontend: buildProfile(frontend),
	fullstack: buildProfile(fullstack),
	abap: buildProfile(abap),
}

export const ACTIVE_PROFILE_ID = (import.meta.env.VITE_CV_PROFILE ?? 'frontend') as ProfileId

export const profile = profiles[ACTIVE_PROFILE_ID] ?? profiles.frontend

export { titles } from './shared/index.js'
