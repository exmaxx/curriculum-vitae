<script lang="ts">
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			deep_code_reviews: 'hloubkové code reviews',
			also_used: 'Přesah do full-stacku',
		},
		en: {
			deep_code_reviews: 'deep code reviews',
			also_used: 'Full-stack exposure',
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

	<h3>{t('also_used')}</h3>

	<ul class="flex list-none flex-wrap gap-1 pl-0">
		<li class="badge">Supabase</li>
		<li class="badge">Node.js</li>
		<li class="badge">Ruby on Rails</li>
		<li class="badge">REST API</li>
		<li class="badge">GraphQL</li>
		<li class="badge">Postman</li>
		<li class="badge">MySQL</li>
	</ul>
</section>
