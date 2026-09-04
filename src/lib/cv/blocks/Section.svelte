<script lang="ts">
	import type { Snippet } from 'svelte'
	import { gate } from '../present'
	import { useLang } from '../i18n.svelte.js'
	import type { SectionNode } from '../types'

	let { node, children }: { node: SectionNode; children?: Snippet } = $props()
	const i18n = useLang()
</script>

<div class="contents {node.class ?? ''}">
	{#each gate(node.heading) as heading}
		<h2 class={node.headingClass}>{i18n.t(heading)}</h2>
	{/each}

	{@render children?.()}
</div>
