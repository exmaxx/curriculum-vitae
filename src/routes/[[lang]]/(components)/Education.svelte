<script lang="ts">
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			education: 'Vzdělání',
			muni: 'Masarykova univerzita (Brno, Česká republika), Fakulta informatiky, magisterské',
		},
		en: {
			education: 'Education',
			muni: "Masaryk University (Brno, Czech Republic), Faculty of Informatics, Master's",
		},
	})
</script>

<section>
	<h3 class="mt-0">{t('education')}</h3>

	<ul>
		<li>{t('muni')}</li>
	</ul>
</section>
