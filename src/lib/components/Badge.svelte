<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props extends Record<string, unknown> {
		class?: string
		children: Snippet
	}

	const { children, class: classProp, ...attrs }: Props = $props()

	const defaultClasses = 'badge'
	const classes = `${defaultClasses} ${classProp}`
</script>

<span class={classes} {...attrs}>{@render children()}</span>
