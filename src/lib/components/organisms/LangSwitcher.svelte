<script lang="ts">
	import { page } from '$app/state'
	import { type Lang, Langs } from '$lib/langs'
	import { DEFAULT_LANG } from '$lib/constants'

	const langs = Object.keys(Langs) as Lang[]
	const currentLang = $derived(page.params.lang || DEFAULT_LANG) as Lang
</script>

{#each langs as lang}
	{#if lang === currentLang}
		<span>{lang}</span>
	{:else}
		<a href="/{lang}">{lang}</a>
	{/if}
{/each}
