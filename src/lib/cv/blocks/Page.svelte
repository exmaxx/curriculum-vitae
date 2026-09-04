<script lang="ts">
	import type { Snippet } from 'svelte'
	import PaperPage from './PaperPage.svelte'
	import type { PageNode } from '../types'

	let { node, children }: { node: PageNode; children?: Snippet } = $props()
</script>

<PaperPage class={node.class ?? ''}>
	{@render children?.()}
</PaperPage>
