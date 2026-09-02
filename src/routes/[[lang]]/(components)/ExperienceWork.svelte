<script lang="ts">
	import Project from '$lib/components/atoms/Project.svelte'
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			proj_morosystems_description: 'Vylepšil jsem komplexní aplikaci pro supply chain finance. Mezinárodní tým.',
			proj_morosystems_details_1: 'Pomohl migrovat legacy Vue na moderní, udržitelný React stack',
			proj_morosystems_details_2: 'AI-asistovaný vývoj k urychlení migrace',

			proj_drmax_react_description: 'Samostatná Checkout aplikace, lékárenský e-shop.',
			proj_drmax_react_details_1: 'Vedl jsem tým 2 vývojářů',
			proj_drmax_react_details_2: 'Navrhl architekturu & doručil kompletní řešení',
			proj_drmax_react_details_3: 'Zajistil kvalitu kódu pomocí typování a unit testů',

			proj_drmax_vue_description:
				'Velký mezinárodní tým spravující e-shop s léčivy. Mou hlavní náplní byl rozvoj modulu Checkout a rollout e-shopu do Polska.',
			proj_drmax_vue_details_1:
				'Refactoroval jsem komplexní části Checkoutu, používal SOLID, zjednodušil kód - zrychlení debuggingu a vývoje',
			proj_drmax_vue_details_2:
				'Zlepšoval "performance" e-shopu, vylepšoval Web Vitals (rychlejší nahrávání webu, odstranění poskakování obsahu, atp.)',
			proj_drmax_vue_details_3: 'Převáděl designy z Figmy do "pixel-perfect" UI',
			proj_drmax_vue_details_4: 'Propojoval FE týmy při rolloutu do Polska - včasné doručení řešení',

			proj_gap_description: 'Malý srovnávač platů.',
			proj_gap_details_1: 'Postaveno ve Svelte, nasazeno na Vercelu,',
			proj_gap_details_2: 'Knihovna napsaná v TypeScriptu, publikováno na npm',
			proj_gap_link_1: 'web',
			proj_gap_link_2: 'zdroj',
			proj_gap_title: 'Sebevzdělávání, osobní projekty',

			proj_rascasone_description: 'Malá mezinárodní vývojářská agentura.',
			proj_rascasone_details_1: 'Vedl týmy 1–3 lidí',
			proj_rascasone_details_2: 'Komunikace s klienty a plánování projektů',
			proj_rascasone_details_3:
				'Full-stack v Ruby on Rails (1 rok) — webová aplikace pro pojišťovacího makléře, vylepšení aplikace bezpečnostní agentury',
			proj_rascasone_details_4: 'Několik frontendů v Reactu',

			source_app: 'Zdroj stránky',
			source_lib: 'Zdroj knihovny',
		},
		en: {
			proj_morosystems_description: 'Enhanced a complex supply chain finance app. International team.',
			proj_morosystems_details_1: 'Helped migrate legacy Vue to a modern, maintainable React stack',
			proj_morosystems_details_2: 'AI-assisted development to speed up migration',

			proj_drmax_react_description: 'Built standalone Checkout web app for the online pharmacy.',
			proj_drmax_react_details_1: 'Led a team of 2 developers',
			proj_drmax_react_details_2: 'Made key architecture decisions & delivered a complete solution',
			proj_drmax_react_details_3: 'Enhanced code quality through type safety and unit tests',

			proj_drmax_vue_description:
				'Contributed to a large-scale e-commerce platform for pharmaceuticals, especially Checkout module. Large international team.',
			proj_drmax_vue_details_1:
				'Refactored complex parts of the Checkout module, applied SOLID, simplified code - faster debugging and feature development',
			proj_drmax_vue_details_2: 'Improved performance (faster load times) and Web Vitals scores',
			proj_drmax_vue_details_3: 'Transformed Figma designs into pixel-perfect UI',
			proj_drmax_vue_details_4:
				'Bridged FE teams communication during the Poland rollout, reducing implementation time',

			proj_gap_title: 'Simple Salary Comparator',
			proj_gap_details_1: 'Built Svelte app with Tailwind, deployed to Vercel,',
			proj_gap_details_2: 'Developed a TypeScript lib, published on npm,',
			proj_gap_link_1: 'web',
			proj_gap_link_2: 'source',
			proj_gap_position: 'Personal project',

			proj_rascasone_description: 'Co-owned and led a small international development agency.',
			proj_rascasone_details_1: 'Led teams of 1–3',
			proj_rascasone_details_2: 'Client communication and project planning',
			proj_rascasone_details_3:
				'Full-stack Ruby on Rails (1 year) — web app for an insurance broker, enhancements to a security agency app',
			proj_rascasone_details_4: 'Several frontends in React (including Esticom and Dr. Max)',

			source_app: 'App source',
			source_lib: 'Library source',
		},
	})
</script>

<section>
	<Project
		position="Senior Frontend Engineer"
		period="2025-2026"
		title="MoroSystems, Czech Republic"
		badges={['Remote']}
		links={[{ url: 'https://www.morosystems.cz' }]}
	>
		<p>
			<em>{t('proj_morosystems_description')}</em>
		</p>

		<ul>
			<li>{t('proj_morosystems_details_1')}</li>
			<li>{t('proj_morosystems_details_2')}</li>
		</ul>

		<div class="mt-2 ml-5">
			Tech:

			<ul class="inline list-none pl-0 leading-5">
				<li class="badge badge-highlight inline">Vue</li>
				<li class="badge badge-highlight inline">React</li>
				<li class="badge badge-highlight inline">TypeScript</li>
				<li class="badge inline">React Query</li>
				<li class="badge inline">React Router</li>
				<li class="badge inline">Tailwind</li>
				<li class="badge inline">REST API</li>
				<li class="badge inline">Node.js</li>
				<li class="badge inline">Cursor AI</li>
				<li class="badge inline">Claude Code</li>
			</ul>
		</div>
	</Project>
</section>

<section>
	<Project
		position="Senior Frontend Engineer"
		period="2020-2024"
		title="Dr. Max, Czech Republic"
		badges={['Remote']}
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
				<li class="badge badge-highlight inline">Vue</li>
				<li class="badge badge-highlight inline">TypeScript</li>
				<li class="badge inline">Vuex</li>
				<li class="badge inline">Nuxt</li>
				<li class="badge inline">GraphQL</li>
				<li class="badge inline">Web Vitals</li>
				<li class="badge inline">Azure DevOps</li>
				<li class="badge inline">SpeedCurve</li>
				<li class="badge inline">Docker</li>
				<li class="badge inline">Kubernetes</li>
				<li class="badge inline">Elastic</li>
			</ul>
		</div>
	</Project>
</section>

<section>
	<Project
		position="Senior Frontend Engineer & Team Leader"
		period="2018-2019"
		title="Dr. Max, Czech Republic"
		badges={['Remote']}
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
				<li class="badge badge-highlight inline">React</li>
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
		position="Full-stack Developer / Team Leader / Co-owner"
		period="2015-2019"
		title="Rascasone, Czech Republic"
		badges={['Hybrid']}
		links={[{ url: 'https://www.rascasone.com' }]}
	>
		<p>
			<em>{t('proj_rascasone_description')}</em>
		</p>

		<ul>
			<li>{t('proj_rascasone_details_1')}</li>
			<li>{t('proj_rascasone_details_2')}</li>
			<li>{t('proj_rascasone_details_3')}</li>
			<li>{t('proj_rascasone_details_4')}</li>
		</ul>

		<div class="mt-2 ml-5">
			Tech:

			<ul class="inline list-none pl-0 leading-5">
				<li class="badge badge-highlight inline">Ruby on Rails</li>
				<li class="badge badge-highlight inline">Ruby</li>
				<li class="badge inline">REST API</li>
				<li class="badge inline">JavaScript</li>
				<li class="badge inline">React</li>
			</ul>
		</div>
	</Project>
</section>
