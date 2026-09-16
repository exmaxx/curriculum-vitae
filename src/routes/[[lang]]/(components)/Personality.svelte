<script lang="ts">
	import { page } from '$app/state'
	import useTitle from '$lib/composables/useTitle.svelte.js'
	import { DEFAULT_LANG } from '$lib/constants.js'
	import type { Lang } from '$lib/langs.js'
	import { profile } from '$lib/profiles/index.js'

	const lang = $derived((page.params.lang || DEFAULT_LANG) as Lang)
	const getTitle = useTitle()
</script>

<section>
	<h3 class="mt-0">{getTitle('personality')}</h3>

	<ul>
		{#each profile.who.personality as trait, index (index)}
			<li>{trait[lang]}</li>
		{/each}
	</ul>
</section>
