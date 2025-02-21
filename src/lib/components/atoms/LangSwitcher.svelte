<script lang="ts">
	import type { Lang } from '$lib/langs'

	interface Props {
		langs: Lang[]
		current: Lang
	}

	const { langs, current }: Props = $props()
</script>

{#each langs as lang}
	{#if lang === current}
		<span>{lang}</span>
	{:else}
		<a href="/{lang}">{lang}</a>
	{/if}
{/each}
