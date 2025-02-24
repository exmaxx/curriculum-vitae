<script>
	import i18n from '$lib/i18n'

	const t = i18n({
		cs: {
			about_me: 'O mně',
			lead_1: 'Zaměřuji se na rozvoj aplikací, kvalitní kód, řešení problémů a týmovou práci.',
			lead_2: 'Profesionálním vývojářem jsem 17 let, z toho',
			lead_3: 'jako',
			years: 'let',
		},
		en: {
			about_me: 'About me',
			lead_1: 'I focus on app development, writing quality code, problem-solving, and teamwork.',
			lead_2: ' I have been working as a developer for 17 years, including',
			lead_3: 'as a',
			years: 'years',
		},
	})
</script>

<div class="flex-[5]">
	<h2>{t('about_me')}</h2>
	<p class="zoom-[1.25] mb-0">
		{t('lead_1')}
		{t('lead_2')} <strong>8 {t('years')}</strong>
		{t('lead_3')} <strong>frontend developer</strong>.
	</p>
</div>
