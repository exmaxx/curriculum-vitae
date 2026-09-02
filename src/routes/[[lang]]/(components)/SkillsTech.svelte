<script lang="ts">
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			deep_code_reviews: 'hloubkové code reviews',
			sap: 'SAP',
		},
		en: {
			deep_code_reviews: 'deep code reviews',
			sap: 'SAP',
		},
	})
</script>

<section class="flex flex-col gap-1">
	<ul class="flex list-none flex-wrap gap-1 pl-0">
		<li class="badge">Tailwind 4</li>
		<li class="badge">Docker</li>
		<li class="badge">Web Vitals</li>
		<li class="badge">TDD</li>
		<li class="badge">refactoring</li>
		<li class="badge">{t('deep_code_reviews')}</li>
	</ul>

	<h3>{t('sap')}</h3>

	<ul class="flex list-none flex-wrap gap-1 pl-0">
		<li class="badge">ABAP</li>
		<li class="badge">ABAP Objects</li>
		<li class="badge">SAP SD</li>
		<li class="badge">SAP MM</li>
		<li class="badge">SAP Workflow</li>
	</ul>
</section>
