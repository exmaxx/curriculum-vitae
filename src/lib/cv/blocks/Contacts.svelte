<script lang="ts">
	import type { Snippet } from 'svelte'
	import { present } from '../present'
	import type { ContactsNode } from '../types'

	let { node }: { node: ContactsNode; children?: Snippet } = $props()
</script>

<address class="a4:flex a4:mt-2 bg-accent mt-6 flex-col gap-1 rounded-md p-3 not-italic">
	{#each present(node.items) as item}
		<a href={item.href} class="no-underline">{item.label}</a>
	{/each}
</address>
