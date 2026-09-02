<script lang="ts">
	import Project from '$lib/components/atoms/Project.svelte'
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			proj_finance_position: 'Aplikace pro sledování osobních financí',
			proj_finance_details_1: 'Zpracování bankovních e-mailových notifikací a CSV souborů',
			proj_finance_details_2: 'Bohatý responzivní UI (shadcn), reporty, prognózy',
			proj_finance_details_3: 'AI párování refundací (Mistral AI)',

			proj_calculator_details_1: 'Postaveno ve Svelte, nasazeno na Vercelu,',
			proj_calculator_details_2: 'Knihovna napsaná v TypeScriptu, publikováno na npm',
			proj_calculator_link_1: 'web',
			proj_calculator_link_2: 'zdroj',
			proj_calculator_position: 'Kalkulačka a srovnávač platů',
		},
		en: {
			proj_finance_position: 'Personal Finance Tracking App',
			proj_finance_details_1: 'Processing of bank email notifications and CSV files',
			proj_finance_details_2: 'Rich responsive UI (shadcn), reports, forecasts',
			proj_finance_details_3: 'AI-based refund matching (Mistral AI)',

			proj_calculator_details_1: 'Built Svelte app, deployed to Vercel,',
			proj_calculator_details_2: 'Developed a TypeScript lib, published on npm,',
			proj_calculator_link_1: 'web',
			proj_calculator_link_2: 'source',
			proj_calculator_position: 'Salary Calculator & Comparator',
		},
	})
</script>

<section>
	<Project position={t('proj_finance_position')} period="2026" title="">
		<ul>
			<li>{t('proj_finance_details_1')}</li>
			<li>{t('proj_finance_details_2')}</li>
			<li>{t('proj_finance_details_3')}</li>
		</ul>

		<div class="mt-2 ml-5">
			Tech:

			<ul class="inline list-none pl-0 leading-5">
				<li class="badge badge-highlight inline">Supabase</li>
				<li class="badge inline">PostgreSQL</li>
				<li class="badge inline">Vercel</li>
				<li class="badge inline">Cursor AI</li>
				<li class="badge inline">Mistral AI</li>
			</ul>
		</div>
	</Project>
</section>

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
