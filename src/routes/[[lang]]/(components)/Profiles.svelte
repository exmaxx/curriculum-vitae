<script lang="ts">
	import useTitle from '$lib/composables/useTitle.svelte.js'
	import { profile } from '$lib/profiles/index.js'

	const getTitle = useTitle()
</script>

<section>
	<h3 class="mt-0">{getTitle('techProfiles')}</h3>

	<ul class="flex list-none gap-2 text-nowrap">
		{#each profile.who.profiles as link, index (index)}
			<li><a href={link.href}>{link.label}</a></li>
		{/each}
	</ul>
</section>
