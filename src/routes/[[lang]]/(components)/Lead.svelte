<script lang="ts">
	import { page } from '$app/state'
	import useI18n from '$lib/composables/useI18n.svelte.js'
	import { Langs } from '$lib/langs.js'
	import LeadEn from './translations/LeadEn.svelte'
	import LeadCs from './translations/LeadCs.svelte'
	import { DEFAULT_LANG } from '$lib/constants.js'

	const lang = $derived(page.params.lang || DEFAULT_LANG)

	const t = useI18n({
		cs: {
			summary: 'Souhrn',
			lead: 'Zaměřuji se na rozvoj aplikací, kvalitní kód, řešení problémů a týmovou práci.',
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
			<LeadCs />
		{:else}
			<LeadEn />
		{/if}
	</p>
</div>
