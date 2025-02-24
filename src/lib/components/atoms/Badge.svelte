<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props extends Record<string, unknown> {
		class?: string
		children: Snippet
	}

	const { children, class: classProp, ...attrs }: Props = $props()

	const defaultClasses = 'sm:badge'
	const classes = `${defaultClasses} ${classProp}`
</script>

<span class="sm:badge" {...attrs}>{@render children()}</span>
