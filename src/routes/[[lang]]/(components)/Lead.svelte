<script lang="ts">
	import { page } from '$app/state'
	import useI18n from '$lib/composables/useI18n.svelte.js'
	import { Langs } from '$lib/langs.js'
	import { DEFAULT_LANG } from '$lib/constants.js'

	const lang = $derived(page.params.lang || DEFAULT_LANG)

	const t = useI18n({
		cs: {
			summary: 'Souhrn',
			years: 'let',
		},
		en: {
			summary: 'Summary',
			years: 'years',
		},
	})
</script>

<div>
	<p>
		{#if lang === Langs.cs}
			Zkušený software engineer (<strong>15+ let, 10 let frontend</strong>).
		{:else}
			Experienced software engineer (<strong>10 years in frontend, 15+ total</strong>).
		{/if}
	</p>

	<p>
		{#if lang === Langs.cs}
			Tvoří <strong>výkonný a udržitelný kód</strong>. Zaměřený na uživatele a vizuální stránku.
		{:else}
			Delivering <strong>performant and maintainable code</strong>. User-focused and visually oriented.
		{/if}
	</p>

	<p>
		{#if lang === Langs.cs}
			<strong>Cross-team</strong> spolupracovník, schopný <strong>vést tým</strong>.
		{:else}
			<strong>Cross-team</strong> collaborator, able to <strong>lead a team</strong>.
		{/if}
	</p>

	<p>
		{#if lang === Langs.cs}
			Odpovídá za doručení <strong>od požadavků až do produkce</strong> a dál.
		{:else}
			Owns delivery <strong>from requirements to production</strong> and beyond.
		{/if}
	</p>

	<p>
		{#if lang === Langs.cs}
			Nadšenec pro <strong>AI-assisted development</strong>.
		{:else}
			Enthusiast for <strong>AI-assisted development</strong>.
		{/if}
	</p>
</div>
