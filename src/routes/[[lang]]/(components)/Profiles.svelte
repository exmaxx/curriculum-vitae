<script lang="ts">
	import i18n from '$lib/i18n'

	const t = i18n({
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
