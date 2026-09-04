<script lang="ts">
	import RichText from '$lib/cv/blocks/RichText.svelte'
	import { badgeToneClass } from '$lib/cv/maps'
	import { badgeTone, gate, nonempty, present } from '$lib/cv/present'
	import { useLang } from '$lib/cv/i18n.svelte.js'
	import type { ExperienceItem } from '$lib/cv/types'

	interface Props {
		item: ExperienceItem
		techLabel?: string
	}

	const { item, techLabel = 'Tech' }: Props = $props()
	const i18n = useLang()

	const title = $derived(item.title ? i18n.t(item.title) : '')
	const badges = $derived(present(item.badges).map((badge) => i18n.t(badge)))
	const details = $derived(present(item.details))
	const tech = $derived(present(item.tech))
	const meta = $derived(title || badges.length ? [{ title, badges }] : [])
</script>

<h3 class="flex items-center gap-2">
	<span class="grow">{i18n.t(item.position)}</span>
	<span class="text-secondary text-right text-[0.85em] whitespace-nowrap">{item.period}</span>
</h3>

<div class="border-zinc-300">
	<div class:mb-1={meta.length > 0}>
		{#each meta as row}
			<p class="text-secondary mt-0 flex items-center gap-2 pt-0 font-semibold">
				<span class="grow">{row.title}</span>

				{#each nonempty(row.badges) as shown}
					<span class="inline-flex shrink-0 gap-1 text-[0.85em] whitespace-nowrap">
						{#each shown as badge}
							<span class="badge-meta font-normal">{badge}</span>
						{/each}
					</span>
				{/each}
			</p>
		{/each}
	</div>

	{#each gate(item.description) as description}
		<p>
			<em><RichText value={description} /></em>
		</p>
	{/each}

	{#each nonempty(details) as items}
		<ul>
			{#each items as detail}
				<li><RichText value={detail} /></li>
			{/each}
		</ul>
	{/each}

	{#each nonempty(tech) as techBadges}
		<div class="mt-2 ml-5">
			{techLabel}:

			<ul class="inline list-none pl-0 leading-5">
				{#each techBadges as badge}
					<li class={badgeToneClass[badgeTone(badge, true)]}>{i18n.t(badge.label)}</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
