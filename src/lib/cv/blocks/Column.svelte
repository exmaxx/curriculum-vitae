<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { ColumnNode } from '../types'

	let { node, children }: { node: ColumnNode; children?: Snippet } = $props()
</script>

<section class={node.class ?? ''}>
	{@render children?.()}
</section>
