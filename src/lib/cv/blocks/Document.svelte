<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { DocumentNode } from '../types'

	let { node, children }: { node: DocumentNode; children?: Snippet } = $props()
</script>

<article class={node.class ?? ''}>
	{@render children?.()}
</article>
