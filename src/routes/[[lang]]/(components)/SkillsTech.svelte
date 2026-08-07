<script lang="ts">
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			responsive_design: 'responsivní design',
			deep_code_reviews: 'hloubkové code reviews',
		},
		en: {
			responsive_design: 'responsive design',
			deep_code_reviews: 'deep code reviews',
		},
	})
</script>

<section class="flex flex-wrap gap-1">
	<ul class="flex list-none flex-wrap gap-1 pl-0">
		<li class="badge">HTML5</li>
		<li class="badge">CSS3</li>
		<li class="badge">Sass</li>
		<li class="badge">Tailwind 4</li>
		<li class="badge">Flex</li>
		<li class="badge">Grid</li>
		<li class="badge">{t('responsive_design')}</li>
		<li class="badge">Jest</li>
		<li class="badge">TDD</li>
		<li class="badge">refactoring</li>
		<li class="badge">{t('deep_code_reviews')}</li>
		<li class="badge">Git</li>
		<li class="badge">Web Vitals</li>
		<li class="badge">Azure Devops</li>
		<li class="badge">Docker</li>
	</ul>
</section>
