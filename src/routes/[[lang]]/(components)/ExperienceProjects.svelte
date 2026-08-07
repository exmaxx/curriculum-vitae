<script lang="ts">
	import Project from '$lib/components/atoms/Project.svelte'
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			proj_calculator_description: 'Malý srovnávač platů.',
			proj_calculator_details_1: 'Postaveno ve Svelte, nasazeno na Vercelu,',
			proj_calculator_details_2: 'Knihovna napsaná v Typescriptu, publikováno na NPM',
			proj_calculator_link_1: 'web',
			proj_calculator_link_2: 'zdroj',
			proj_calculator_position: 'Osobní projekt',

			proj_self_description_details: 'Zlepšování vlastních dovedností, experimentování',
			proj_self_position: 'Sebevzdělávání',
		},
		en: {
			proj_calculator_details_1: 'Built Svelte app, deployed to Vercel,',
			proj_calculator_details_2: 'Developed a Typescript-heavy lib, published on NPM,',
			proj_calculator_link_1: 'web',
			proj_calculator_link_2: 'source',
			proj_calculator_position: 'Personal project',
			proj_calculator_title: 'Salary Calculator & Comparator',

			proj_self_description_details: 'Developed several small-scale experiments',
			proj_self_position: 'Self-improving my skills',
		},
	})
</script>

<section>
	<Project position={t('proj_self_position')} period="2025" title="">
		<ul>
			<li>
				{t('proj_self_description_details')}
			</li>
		</ul>

		<div class="mt-2 ml-5">
			Tech:

			<ul class="inline list-none pl-0 leading-5">
				<li class="badge badge-highlight inline">React 18</li>
				<li class="badge badge-highlight inline">Typescript</li>
				<li class="badge inline">React Router</li>
				<li class="badge mr-8 inline">React Query</li>
				<li class="badge badge-highlight inline">Vue 3</li>
				<li class="badge inline">Pinia</li>
				<li class="badge inline">Vue Router</li>
				<li class="badge inline">Tailwind</li>
			</ul>
		</div>
	</Project>
</section>

<section>
	<Project position={t('proj_calculator_position')} period="2024" title={t('proj_calculator_title')}>
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
				<li class="badge badge-highlight inline">Typescript</li>
				<li class="badge inline">Tailwind</li>
			</ul>
		</div>
	</Project>
</section>
