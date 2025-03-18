<script>
	import { page } from '$app/state'
	import i18n from '$lib/i18n'
	import { Langs } from '$lib/langs'
	import LeadEn from '$lib/components/translations/LeadEn.svelte'
	import LeadCs from '$lib/components/translations/LeadCs.svelte'
	import { DEFAULT_LANG } from '$lib/constants'

	const lang = $derived(page.params.lang || DEFAULT_LANG)

	const t = i18n({
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

<div class="flex-[5]">
	<h2>{t('summary')}</h2>
	<p class="zoom-[1.25] mb-0">
		{#if lang === Langs.cs}
			<LeadCs />
		{:else}
			<LeadEn />
		{/if}
	</p>
</div>
