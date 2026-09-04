<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HeaderNode } from '../types'

	let { node, children }: { node: HeaderNode; children?: Snippet } = $props()
</script>

<!-- FIXME: Ideally the header should be wrapped by paper page as well. -->
<header class={node.class ?? ''}>
	{@render children?.()}
</header>
