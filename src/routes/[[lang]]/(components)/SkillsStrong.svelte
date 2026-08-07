<script lang="ts">
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			strengths: 'Silné stránky',
			code_maintainability: 'Udržitelnost kódu a refaktorování',
			performance_optimization: 'Optimalizace "performance"',
			ui_implementation: 'Implementace UI',
			deep_code_reviews: 'Hloubkové code reviews',
		},
		en: {
			strengths: 'Strengths',
			code_maintainability: 'Code maintainability & refactoring',
			performance_optimization: 'Performance optimization',
			ui_implementation: 'UI implementation',
			deep_code_reviews: 'Deep code reviews',
		},
	})
</script>

<section class="">
	<h2 class="mt-0">{t('strengths')}</h2>

	<ul>
		<li>{t('code_maintainability')}</li>
		<li>{t('performance_optimization')}</li>
		<li>{t('ui_implementation')}</li>
		<li>{t('deep_code_reviews')}</li>
	</ul>
</section>
