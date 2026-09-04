<script lang="ts">
	import type { Snippet } from 'svelte'
	import RichText from './RichText.svelte'
	import { gate, isLinkItem, present } from '../present'
	import { useLang } from '../i18n.svelte.js'
	import { headingTag, listVariantClass } from '../maps'
	import type { ListItem, ListNode, Rich } from '../types'

	let { node }: { node: ListNode; children?: Snippet } = $props()
	const i18n = useLang()

	const tag = $derived(headingTag[node.headingLevel ?? 3])
	const listClass = $derived(listVariantClass[node.variant ?? 'bullets'])

	const textValue = (item: ListItem): Rich => {
		const withText = item as { text?: Rich }
		return withText.text ?? (item as Rich)
	}
</script>

<section>
	{#each gate(node.heading) as heading}
		<svelte:element this={tag} class="mt-0 {node.headingClass ?? ''}">{i18n.t(heading)}</svelte:element>
	{/each}

	<ul class={listClass}>
		{#each present(node.items) as item}
			<li>
				{#each gate(isLinkItem(item) && item) as link}
					<a href={link.href}>{i18n.t(link.text)}</a>
				{/each}
				{#each gate(!isLinkItem(item) && item) as text}
					<RichText value={textValue(text)} />
				{/each}
			</li>
		{/each}
	</ul>
</section>
