<script lang="ts">
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
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

<section>
	<h3 class="mt-0">{t('history')}</h3>

	<ul>
		<li>Ruby on Rails (1 {t('year')})</li>
		<li>iOS/Swift, Android/Java (1 {t('year')})</li>
		<li>PHP + MySQL ({t('occasionally')})</li>
	</ul>
</section>
