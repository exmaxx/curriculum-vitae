<script lang="ts">
	import { parseStrongText } from '$lib/utils/parseStrongText.js'

	const { text }: { text: string } = $props()

	const segments = $derived(parseStrongText(text))
</script>

{#each segments as segment, index (index)}
	{#if segment.type === 'strong'}
		<strong>{segment.content}</strong>
	{:else}
		{segment.content}
	{/if}
{/each}
