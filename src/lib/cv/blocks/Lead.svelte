<script lang="ts">
	import type { Snippet } from 'svelte'
	import RichText from './RichText.svelte'
	import { present } from '../present'
	import type { LeadNode } from '../types'

	let { node }: { node: LeadNode; children?: Snippet } = $props()
</script>

<div>
	{#each present(node.paragraphs) as paragraph}
		<p>
			<RichText value={paragraph} />
		</p>
	{/each}
</div>
