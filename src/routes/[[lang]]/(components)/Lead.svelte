<script lang="ts">
	import { page } from '$app/state'
	import RichText from '$lib/components/atoms/RichText.svelte'
	import { DEFAULT_LANG } from '$lib/constants.js'
	import type { Lang } from '$lib/langs.js'
	import { profile } from '$lib/profiles/index.js'

	const lang = $derived((page.params.lang || DEFAULT_LANG) as Lang)
</script>

<div>
	{#each profile.summary as paragraph, index (index)}
		<p>
			<RichText text={paragraph[lang]} />
		</p>
	{/each}
</div>
