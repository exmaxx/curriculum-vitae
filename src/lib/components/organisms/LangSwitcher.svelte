<script lang="ts">
	import { page } from '$app/state'
	import { type Lang, Langs } from '$lib/langs'
	import { DEFAULT_LANG } from '$lib/constants'

	const langs = Object.keys(Langs) as Lang[]
	const currentLang = $derived(page.params.lang || DEFAULT_LANG) as Lang
</script>

{#each langs as lang}
	{#if lang === currentLang}
		<span class="rounded bg-white/20 px-1 font-bold text-white">{lang}</span>
	{:else}
		<a href="/{lang}" class="text-white underline decoration-2 hover:text-amber-200">{lang}</a>
	{/if}
{/each}
