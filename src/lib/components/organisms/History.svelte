<script lang="ts">
	import i18n from '$lib/i18n'

	const t = i18n({
		cs: {
			history: 'Historie',
			year: 'rok',
			years: 'let',
			occasionally: 'nárazově',
		},
		en: {
			history: 'History',
			year: 'year',
			years: 'years',
			occasionally: 'occasionally',
		},
	})
</script>

<h2>{t('history')}</h2>
<ul>
	<li>Ruby on Rails (1 {t('year')})</li>
	<li>iOS/Swift, Android/Java (1 {t('year')})</li>
	<li>SAP ABAP (7 {t('years')})</li>
	<li>PHP + MySQL ({t('occasionally')})</li>
</ul>
