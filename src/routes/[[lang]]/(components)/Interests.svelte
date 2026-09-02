<script lang="ts">
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			interest_1: 'UX, AI-nástroje',
			interest_2: 'grafy, vizualizace dat',
			interest_3: 'Advent of Code, Godot (vývoj her)',
			work_interests: 'Zájmy spojené s prací',
		},
		en: {
			interest_1: 'UX, AI-powered tools',
			interest_2: 'Charts, data visualization',
			interest_3: 'Advent of Code, Godot (gamedev)',
			work_interests: 'Work-related interests',
		},
	})
</script>

<section>
	<h3 class="mt-0">{t('work_interests')}</h3>

	<ul>
		<li>{t('interest_1')}</li>
		<li>{t('interest_2')}</li>
		<li>{t('interest_3')}</li>
	</ul>
</section>
