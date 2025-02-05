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

	const trimHttp = (url: string) => url.replace(/^https?:\/\//, '')
</script>

<h3 class="flex flex-row items-center">
	<span>{position}</span> <span class="text-secondary grow text-right text-xs/4 whitespace-nowrap">{period}</span>
</h3>

<div class="ml-1 border-zinc-300 pl-4">
	<div class:mb-1={!!links}>
		<p class="text-secondary pt-0 font-semibold">
			{title}{#if links},{/if}

			{#if links}
				{#each links as { url, title }, index}
					<span class="text-secondary font-normal">
						{#if index > 0}&nbsp;,{/if}

						<a href={url}>{title || trimHttp(url || '')}</a>
					</span>
				{/each}
			{/if}
		</p>
	</div>

	{@render children()}
</div>
