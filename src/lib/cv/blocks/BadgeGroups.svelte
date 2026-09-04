<script lang="ts">
	import type { Snippet } from 'svelte'
	import { badgeTone, gate, isBadgeItem, present } from '../present'
	import { badgeToneClass } from '../maps'
	import { useLang } from '../i18n.svelte.js'
	import type { BadgeGroupsNode, BadgeItem, I18n } from '../types'

	let { node }: { node: BadgeGroupsNode; children?: Snippet } = $props()
	const i18n = useLang()

	const labelOf = (item: I18n | BadgeItem) => (isBadgeItem(item) ? item.label : item)
	const asBadge = (item: I18n | BadgeItem): BadgeItem => (isBadgeItem(item) ? item : { label: item })
</script>

<section class={node.class}>
	{#each present(node.groups) as group}
		{#each gate(group.heading) as heading}
			<h3>{i18n.t(heading)}</h3>
		{/each}

		<ul class="flex list-none flex-wrap gap-1 pl-0">
			{#each present(group.items) as item}
				<li class={badgeToneClass[badgeTone(asBadge(item))]}>{i18n.t(labelOf(item))}</li>
			{/each}
		</ul>
	{/each}
</section>
