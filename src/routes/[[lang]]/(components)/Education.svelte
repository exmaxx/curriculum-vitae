<script lang="ts">
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
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
