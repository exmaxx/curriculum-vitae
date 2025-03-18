<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props extends Record<string, unknown> {
		component?: string
		class?: string
		children: Snippet
	}

	const { component = 'span', class: classes, children, ...attrs }: Props = $props()
</script>

<svelte:element this={component} class={`badge ${classes}`} {...attrs}>
	{@render children()}
</svelte:element>
<!--<span class={`badge ${classes}`} {...attrs}>{@render children()}</span>-->
