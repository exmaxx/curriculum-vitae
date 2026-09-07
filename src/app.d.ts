// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
interface ImportMetaEnv {
	readonly VITE_CV_PROFILE?: 'frontend' | 'fullstack' | 'abap'
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {}
