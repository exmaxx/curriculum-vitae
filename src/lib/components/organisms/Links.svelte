<script>
	import i18n from '$lib/i18n'

	const t = i18n({
		cs: {
			my_profiles: 'Mé profily',
		},
		en: {
			my_profiles: 'My profiles',
		},
	})
</script>

<section>
	<h2>{t('my_profiles')}</h2>
	<ul class="flex list-none gap-2 text-nowrap">
		<li><a href="https://stackoverflow.com/users/2016383/exmaxx">SO</a></li>
		<li><a href="https://github.com/exmaxx">Github</a></li>
		<li><a href="https://www.linkedin.com/in/marekulicny/">LinkedIn</a></li>
	</ul>
</section>
