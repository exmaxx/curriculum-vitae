<script lang="ts">
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			deep_code_reviews: 'hloubkové code reviews',
			refactoring: 'refaktorování',
			sap: 'SAP',
			years: 'roky',
		},
		en: {
			deep_code_reviews: 'deep code reviews',
			refactoring: 'refactoring',
			sap: 'SAP',
			years: 'years',
		},
	})
</script>

<section class="flex flex-col gap-1">
	<ul class="flex list-none flex-wrap gap-1 pl-0">
		<li class="badge">Docker</li>
		<li class="badge">Web Vitals</li>
		<li class="badge">TDD</li>
		<li class="badge">{t('refactoring')}</li>
		<li class="badge">{t('deep_code_reviews')}</li>
	</ul>

	<h3>{t('sap')}</h3>

	<ul class="flex flex-col gap-1 pl-0">
		<li class="flex items-center gap-2 text-nowrap">
			<picture class="w-4.5">
				<img src="abap-logo.svg" alt="abap-logo" />
			</picture>

			<span class="text-[1.2em]">
				<strong>ABAP</strong>: 7 {t('years')}
			</span>
		</li>
	</ul>

	<ul class="flex list-none flex-wrap gap-1 pl-0">
		<li class="badge">ABAP Objects</li>
		<li class="badge">SAP SD</li>
		<li class="badge">SAP MM</li>
		<li class="badge">SAP Workflow</li>
	</ul>
</section>
