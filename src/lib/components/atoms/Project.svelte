<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		position: string
		period: string
		title: string
		links?: { url: string; title?: string }[]
		children: Snippet
	}

	const { position, period, title, links, children }: Props = $props()

	// TODO: Use for links.
	// const trimHttp = (url: string) => url.replace(/^https?:\/\//, '')
</script>

<h3 class="flex items-center gap-2">
	<span>{position}</span>
	<span class="text-secondary zoom-[0.85] a4:self-end grow text-right whitespace-nowrap">{period}</span>
</h3>

<div class="border-zinc-300">
	<div class:mb-1={!!links}>
		<p class="text-secondary mt-0 pt-0 font-semibold">
			{title}

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
		</p>
	</div>

	{@render children()}
</div>
