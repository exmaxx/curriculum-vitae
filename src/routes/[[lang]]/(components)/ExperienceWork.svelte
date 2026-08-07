<script lang="ts">
	import Project from '$lib/components/atoms/Project.svelte'
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			now: 'nyní',

			proj_drmax_react_description: 'Vedení FE týmu 2 lidí. Vytvoření Checkoutu jako nezávislé aplikace.',
			proj_drmax_react_details_1: 'Vedl jsem tým 2 vývojářů',
			proj_drmax_react_details_2: 'Navrhnul architekturu & doručil kompletní řešení',
			proj_drmax_react_details_3: 'Zajistil kvalitu kódu pomocí typování, unit testů a detailních code reviews',

			proj_drmax_vue_description:
				'Velký mezinárodní tým spravující e-shop s léčivy. Mou hlavní náplní byl rozvoj modulu Checkout a rollout e-shopu do Polska.',
			proj_drmax_vue_details_1:
				'Refactoroval jsem komplexní části Checkoutu, používal SOLID, zjednodušil kód - zrychlení debuggingu a vývoje',
			proj_drmax_vue_details_2:
				'Zlepšoval "performance" e-shopu, vylepšoval Web Vitals (rychlejší nahrávání webu, odstranění poskakování obsahu, atp.)',
			proj_drmax_vue_details_3: 'Převáděl designy z Figmy do "pixel-perfect" UI',
			proj_drmax_vue_details_4: 'Propojoval FE týmy při rolloutu do Polska - všasné doručení řešení',

			proj_esticom_description:
				'Webová aplikace pro stavební inženýry - stavební nákresy, odhady cen prací, rozesílání nabídek. Malý mezinárodnítým.',
			proj_esticom_details_1:
				'Vyvíjel jsem komplexní interaktivní tabulku pro odhad cen a stránku pro tvorbu koncové nabídky, včetně preview PDF',
			proj_esticom_details_2: 'Implementoval správu dat pomocí Reduxu',

			proj_gap_description: 'Malý srovnávač platů.',
			proj_gap_details_1: 'Postaveno ve Svelte, nasazeno na Vercelu,',
			proj_gap_details_2: 'Knihovna napsaná v Typescriptu, publikováno na NPM',
			proj_gap_link_1: 'web',
			proj_gap_link_2: 'zdroj',
			proj_gap_title: 'Sebevzdělávání, osobní projekty',

			source_app: 'Zdroj stánky',
			source_lib: 'Zdroj knihovny',
			subtitle: 'Výběr',
			title: 'Praxe',
		},
		en: {
			now: 'now',

			proj_drmax_react_description:
				'Creating standalone Checkout web application for pharmaceutical e-commerce platform.',
			proj_drmax_react_details_1: 'Led a team of 2 developers',
			proj_drmax_react_details_2: 'Made key architecture decisions & delivered a complete solution',
			proj_drmax_react_details_3: 'Enhanced code quality through type safety, unit tests and thorough code reviews',

			proj_drmax_vue_description:
				'Developing large-scale e-commerce platform for pharmaceuticals, especially Checkout module. Large international team.',
			proj_drmax_vue_details_1:
				'Refactored complex parts the Checkout module, applied SOLID, simplified code - faster debugging and feature development',
			proj_drmax_vue_details_2: 'Improved performance (faster load times) and Web Vitals scores',
			proj_drmax_vue_details_3: 'Transformed Figma designs into pixel-perfect UI',
			proj_drmax_vue_details_4:
				'Bridged FE teams communication during the Poland rollout, reducing implementation time',

			proj_esticom_description: 'Web application for civil engineers. Small international team.',
			proj_esticom_details_1:
				'Developed complex interactive cost estimation table and final bid page with resulting PDF preview',

			proj_gap_title: 'Simple Salary Comparator',
			proj_gap_details_1: 'Built Svelte app with Tailwind, deployed to Vercel,',
			proj_gap_details_2: 'Developed a Typescript-heavy lib, published on NPM,',
			proj_gap_link_1: 'web',
			proj_gap_link_2: 'source',
			proj_gap_position: 'Personal project',
			source_app: 'App source',
			source_lib: 'Library source',

			subtitle: 'Selection',
			title: 'Experience',
		},
	})
</script>

<section>
	<Project
		position="Senior Frontend Developer"
		period="2020-2024"
		title="Dr. Max, Czech Republic"
		links={[{ url: 'https://www.drmax.cz' }]}
	>
		<p>
			<em>{t('proj_drmax_vue_description')}</em>
		</p>

		<ul>
			<li>{t('proj_drmax_vue_details_1')}</li>
			<li>{t('proj_drmax_vue_details_2')}</li>
			<li>{t('proj_drmax_vue_details_3')}</li>
			<li>{t('proj_drmax_vue_details_4')}</li>
		</ul>

		<div class="mt-2 ml-5">
			Tech:

			<ul class="inline list-none pl-0 leading-5">
				<li class="badge badge-highlight inline">Vue 2</li>
				<li class="badge badge-highlight inline">Vue 3</li>
				<li class="badge badge-highlight inline">Javascript</li>
				<li class="badge badge-highlight inline">Typescript</li>
				<li class="badge inline">Vuex</li>
				<li class="badge inline">Nuxt</li>
				<li class="badge inline">GraphQL</li>
				<li class="badge inline">Web Vitals</li>
				<li class="badge inline">Azure DevOps</li>
				<li class="badge inline">SOLID</li>
				<li class="badge inline">Speedcurve</li>
				<li class="badge inline">Docker</li>
				<li class="badge inline">Kubernetes</li>
				<li class="badge inline">Elastic</li>
			</ul>
		</div>
	</Project>
</section>

<section>
	<Project
		position="Senior Frontend Developer & Team Leader"
		period="2018-2019"
		title="Dr. Max, Czech Republic"
		links={[{ url: 'https://www.drmax.cz' }]}
	>
		<p>
			<em>{t('proj_drmax_react_description')}</em>
		</p>

		<ul>
			<li>{t('proj_drmax_react_details_1')}</li>
			<li>{t('proj_drmax_react_details_2')}</li>
			<li>{t('proj_drmax_react_details_3')}</li>
		</ul>

		<div class="mt-2 ml-5">
			Tech:
			<ul class="inline list-none pl-0 leading-5">
				<li class="badge badge-highlight inline">React 16</li>
				<li class="badge inline">Redux</li>
				<li class="badge inline">Flowtype</li>
				<li class="badge inline">REST API</li>
				<li class="badge inline">React Test Utils</li>
			</ul>
		</div>
	</Project>
</section>

<section>
	<Project
		position="Frontend Developer (React)"
		period="2016-2017"
		title="Esticom ({t('now')} Procore), USA"
		links={[{ url: 'https://www.esticom.com' }]}
	>
		<p>
			<em>{t('proj_esticom_description')}</em>
		</p>

		<ul>
			<li>{t('proj_esticom_details_1')}</li>
		</ul>

		<div class="mt-2 ml-5">
			Tech:
			<ul class="inline list-none pl-0 leading-5">
				<li class="badge badge-highlight inline">React 15</li>
				<li class="badge inline">Redux</li>
				<li class="badge inline">REST API</li>
			</ul>
		</div>
	</Project>
</section>
