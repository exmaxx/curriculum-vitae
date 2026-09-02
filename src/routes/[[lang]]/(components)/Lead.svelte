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
			Zkušený software engineer (<strong>10 let ve frontend web developmentu, 7 let předchozích zkušeností se SAP</strong>).
		{:else}
			Experienced software engineer (<strong>10 years in frontend web development, with 7 years of prior SAP experience</strong>).
		{/if}
	</p>

	<p>
		{#if lang === Langs.cs}
			Ovládající <strong>Vue</strong>, <strong>React</strong>, <strong>TypeScript</strong>. V minulosti
			pracoval s <strong>ABAP</strong>.
		{:else}
			Proficient in <strong>Vue</strong>, <strong>React</strong>, <strong>TypeScript</strong>. Worked with
			<strong>ABAP</strong> in the past.
		{/if}
	</p>

	<p>
		{#if lang === Langs.cs}
			<strong>Cross-team</strong> spolupracovník, schopný <strong>vést tým</strong>.
		{:else}
			<strong>Cross-team</strong> collaborator, able to <strong>lead a team</strong>.
		{/if}
	</p>
</div>
