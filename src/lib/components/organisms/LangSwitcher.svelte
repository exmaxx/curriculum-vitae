<script lang="ts">
	import { page } from '$app/state'
	import { type Lang, Langs } from '$lib/langs'
	import { DEFAULT_LANG } from '$lib/constants'

	const langs = Object.keys(Langs) as Lang[]
	const currentLang = $derived(page.params.lang || DEFAULT_LANG) as Lang
</script>

{#each langs as lang}
	{#if lang === currentLang}
		<span class="text-white underline decoration-2">{lang}</span>
	{:else}
		<a href="/{lang}" class="text-white no-underline hover:text-amber-200">{lang}</a>
	{/if}
{/each}
