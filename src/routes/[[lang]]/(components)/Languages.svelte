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
	<h3 class="mt-0">{getTitle('languages')}</h3>

	<ul>
		{#each profile.who.languages as language, index (index)}
			<li>{language[lang]}</li>
		{/each}
	</ul>
</section>
