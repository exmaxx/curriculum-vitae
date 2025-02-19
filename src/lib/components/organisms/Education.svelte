<script lang="ts">
	import i18n from '$lib/i18n'

	const t = i18n({
		cs: {
			education: 'Vzdělání',
			muni: 'Masarykova Univerzita, Fakulta informatiky, magisterské',
		},
		en: {
			education: 'Education',
			muni: "Masaryk University, Faculty of Informatics, Master's",
		},
	})
</script>

<section>
	<h2>{t('education')}</h2>

	<ul>
		<li>{t('muni')}</li>
	</ul>
</section>
