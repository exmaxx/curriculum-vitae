<script lang="ts">
	import i18n from '$lib/i18n'

	const t = i18n({
		cs: {
			lang_cs: 'Český: rodný',
			lang_de: 'Německý: pasivně (A1)',
			lang_en: 'Anglický: plynně (C1)',
			languages: 'Jazyky',
		},
		en: {
			lang_cs: 'Czech: native',
			lang_de: 'German: passive (A1)',
			lang_en: 'English: fluent (C1)',
			languages: 'Languages',
		},
	})
</script>

<section>
	<h3 class="mt-0">{t('languages')}</h3>
	<ul>
		<li>{t('lang_en')}</li>
		<li>{t('lang_de')}</li>
		<li>{t('lang_cs')}</li>
	</ul>
</section>
