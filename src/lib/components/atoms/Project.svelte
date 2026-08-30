<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		position: string
		period: string
		title: string
		badges?: string[]
		links?: { url: string; title?: string }[]
		children: Snippet
	}

	const { position, period, title, badges, links, children }: Props = $props()

	// TODO: Use for links.
	// const trimHttp = (url: string) => url.replace(/^https?:\/\//, '')
</script>

<h3 class="flex items-center gap-2">
	<span class="grow">{position}</span>
	<span class="text-secondary zoom-[0.85] text-right whitespace-nowrap">{period}</span>
</h3>

<div class="border-zinc-300">
	<div class:mb-1={!!links || !!title || !!badges?.length}>
		{#if title || badges?.length}
			<p class="text-secondary mt-0 flex items-center gap-2 pt-0 font-semibold">
				<span class="grow">{title}</span>

				{#if badges?.length}
					<span class="zoom-[0.85] inline-flex shrink-0 gap-1 whitespace-nowrap">
						{#each badges as badge}
							<span class="badge-meta font-normal">{badge}</span>
						{/each}
					</span>
				{/if}
			</p>
		{/if}

		<!-- TODO: Move links to last line? -->
		<!--{#if links},{/if}-->

		<!--{#if links}-->
		<!--	{#each links as { url, title }, index}-->
		<!--		<span class="text-secondary font-normal">-->
		<!--			{#if index > 0}{' '},{/if}-->

		<!--			<a href={url}>{title || trimHttp(url || '')}</a>-->
		<!--		</span>-->
		<!--	{/each}-->
		<!--{/if}-->
	</div>

	{@render children()}
</div>
