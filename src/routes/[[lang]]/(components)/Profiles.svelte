<script lang="ts">
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			my_profiles: 'Mé profily',
		},
		en: {
			my_profiles: 'Tech profiles',
		},
	})
</script>

<section>
	<h3 class="mt-0">{t('my_profiles')}</h3>

	<ul class="flex list-none gap-2 text-nowrap">
		<li><a href="https://stackoverflow.com/users/2016383/exmaxx">StackOverflow</a></li>
		<li><a href="https://github.com/exmaxx">Github</a></li>
	</ul>
</section>
