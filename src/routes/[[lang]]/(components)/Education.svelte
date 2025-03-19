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
	<h3 class="mt-0">{t('education')}</h3>

	<ul>
		<li>{t('muni')}</li>
	</ul>
</section>
