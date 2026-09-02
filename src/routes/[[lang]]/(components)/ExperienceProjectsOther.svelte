<script lang="ts">
	import Project from '$lib/components/atoms/Project.svelte'
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			proj_calculator_details_1: 'Postaveno ve Svelte, nasazeno na Vercelu,',
			proj_calculator_details_2: 'Knihovna napsaná v TypeScriptu, publikováno na npm',
			proj_calculator_link_1: 'web',
			proj_calculator_link_2: 'zdroj',
			proj_calculator_position: 'Kalkulačka a srovnávač platů',

			proj_explorer_description: 'Knihovna pro Ruby, která zobrazuje runtime data a jejich vazby jako obrázek.',
			proj_explorer_details_1: 'Usnadňuje debugging v Ruby on Rails (výstup do konzole i GraphViz obrázek),',
			proj_explorer_link_1: 'zdroj',
			proj_explorer_position: 'Active Explorer Gem',
			proj_explorer_title: 'Open source',
		},
		en: {
			proj_calculator_details_1: 'Built Svelte app, deployed to Vercel,',
			proj_calculator_details_2: 'Developed a TypeScript lib, published on npm,',
			proj_calculator_link_1: 'web',
			proj_calculator_link_2: 'source',
			proj_calculator_position: 'Salary Calculator & Comparator',

			proj_explorer_description: 'Ruby library that visualizes runtime data and associations as an image.',
			proj_explorer_details_1: 'Makes Rails debugging easier (console output and GraphViz image),',
			proj_explorer_link_1: 'source',
			proj_explorer_position: 'Active Explorer Gem',
			proj_explorer_title: 'Open source',
		},
	})
</script>

<section>
	<Project position={t('proj_calculator_position')} period="2024" title="">
		<ul>
			<li>
				{t('proj_calculator_details_1')} <a href="https://cz-income-simple.vercel.app">{t('proj_calculator_link_1')}</a>
			</li>

			<li>
				{t('proj_calculator_details_2')}
				<a href="https://github.com/exmaxx/cz-income-lib">{t('proj_calculator_link_2')}</a>
			</li>
		</ul>

		<div class="mt-2 ml-5">
			Tech:

			<ul class="inline list-none pl-0 leading-5">
				<li class="badge badge-highlight inline">Svelte</li>
				<li class="badge badge-highlight inline">TypeScript</li>
				<li class="badge inline">Tailwind</li>
				<li class="badge inline">Vercel</li>
			</ul>
		</div>
	</Project>
</section>

<section>
	<Project position={t('proj_explorer_position')} period="2016" title={t('proj_explorer_title')}>
		<ul>
			<li>{t('proj_explorer_description')}</li>

			<li>
				{t('proj_explorer_details_1')}
				<a href="https://github.com/exmaxx/active_explorer">{t('proj_explorer_link_1')}</a>
			</li>
		</ul>

		<div class="mt-2 ml-5">
			Tech:

			<ul class="inline list-none pl-0 leading-5">
				<li class="badge badge-highlight inline">Ruby</li>
				<li class="badge badge-highlight inline">Ruby on Rails</li>
				<li class="badge inline">Active Record</li>
				<li class="badge inline">GraphViz</li>
			</ul>
		</div>
	</Project>
</section>
