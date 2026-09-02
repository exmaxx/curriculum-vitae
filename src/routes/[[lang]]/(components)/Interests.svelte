<script lang="ts">
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			interest_charts: 'grafy, vizualizace dat',
			interest_fun_projects: 'Advent of Code, Godot (vývoj her)',
			work_interests: 'Zájmy spojené s prací',
		},
		en: {
			interest_charts: 'Charts, data visualization',
			interest_fun_projects: 'Advent of Code, Godot (gamedev)',
			work_interests: 'Work-related interests',
		},
	})
</script>

<section>
	<h3 class="mt-0">{t('work_interests')}</h3>

	<ul>
		<li>{t('interest_charts')}</li>
		<li>{t('interest_fun_projects')}</li>
	</ul>
</section>
