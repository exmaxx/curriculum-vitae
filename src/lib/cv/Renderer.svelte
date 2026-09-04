<script lang="ts">
	import Renderer from './Renderer.svelte'
	import { registry } from './registry.js'
	import { present } from './present.js'
	import type { CvNode } from './types.js'

	let { nodes = [] }: { nodes?: CvNode[] } = $props()
</script>

{#each present(nodes) as node}
	{#each [registry[node.type]].filter(Boolean) as Component}
		<Component {node}>
			{#snippet children()}
				<Renderer nodes={'children' in node ? node.children : []} />
			{/snippet}
		</Component>
	{/each}
{/each}
