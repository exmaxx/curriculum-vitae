<script lang="ts">
	import Project from '$lib/components/atoms/Project.svelte'
	import i18n from '$lib/i18n'

	const t = i18n({
		// TODO: Update CZ.
		cs: {
			now: 'nyní',
			proj_drmax_description:
				'Velký mezinárodní tým spravující e-shop s léčivy. Mou hlavní náplní byl rozvoj modulu Checkout. Spolupracoval jsem také mmj. na rolloutu e-shopu na Slovensko a do Polska.',
			proj_drmax_react_description: 'Vedení FE týmu 2 lidí. Vytvoření Checkoutu jako nezávislé aplikace.',
			proj_esticom_description:
				'Webová aplikace pro stavební inženýry - stavební nákresy, odhady cen prací, rozesílání nabídek. Malý mezinárodnítým.',
			proj_gap_description: 'Malý srovnávač platů.',
			proj_gap_title: 'Sebevzdělávání, osobní projekty',
			source_app: 'Zdroj stánky',
			source_lib: 'Zdroj knihovny',
			subtitle: 'Výběr',
			title: 'Praxe',
		},
		en: {
			now: 'now',
			proj_drmax_description: 'Developing large-scale e-commerce platform for pharmaceuticals, especially Checkout module. Large international team.',
			proj_drmax_react_description:
				'Creating standalone Checkout web application for pharmaceutical e-commerce platform.',
			proj_esticom_description: 'Web application for civil engineers. Small international team.',
			proj_gap_description: 'Simple salary comparator.',
			proj_gap_title: 'Self-learning, personal projects',
			source_app: 'App source',
			source_lib: 'Library source',
			subtitle: 'Selection',
			title: 'Experience',
		},
	})
</script>

<section>
	<Project
		position={t('proj_gap_title')}
		period="2024-{t('now')}"
		title="Income Calculator"
	>
		<p>
			<em>{t('proj_gap_description')}</em>
		</p>

		<ul>
			<li>
				Built Svelte app with Tailwind, deployed to Vercel, <a href="https://cz-income-simple.vercel.app">web</a>
			</li>

			<li>
				Developed a Typescript-heavy lib, published on Npm, <a href="https://github.com/exmaxx/cz-income-lib">source</a>
			</li>
		</ul>

		<div class="mt-2 ml-5">
			Tech:

			<ul class="inline list-none pl-0 leading-5">
				<li class="badge badge-large inline">Svelte</li>
				<li class="badge badge-large inline">Typescript</li>
				<li class="badge inline">Tailwind</li>
			</ul>
		</div>
	</Project>
</section>

<section>
	<Project
		position="Senior Frontend Developer"
		period="2020-2024"
		title="Dr. Max, Czech Republic"
		links={[{ url: 'https://www.drmax.cz' }]}
	>
		<p>
			<em>{t('proj_drmax_description')}</em>
		</p>

		<ul>
			<li>
				Refactored complex parts the Checkout module, applied SOLID principles, simplified code - faster debugging and feature
				development
			</li>
			<li>Improved e-shop performance and Web Vitals scores (faster load times, removed layout shifts)</li>
			<li>Transformed Figma designs into pixel-perfect UI</li>
			<li>Bridged FE teams communication during the Poland rollout, reducing implementation time</li>
		</ul>

		<div class="mt-2 ml-5">
			Tech:

			<ul class="inline list-none pl-0 leading-5">
				<li class="badge badge-large inline">Vue 2</li>
				<li class="badge badge-large inline">Vue 3</li>
				<li class="badge badge-large inline">Javascript</li>
				<li class="badge badge-large inline">Typescript</li>
				<li class="badge inline">Vuex</li>
				<li class="badge inline">Nuxt</li>
				<li class="badge inline">GraphQL</li>
				<li class="badge inline">Web Vitals</li>
				<li class="badge inline">Azure DevOps</li>
				<li class="badge inline">SOLID</li>
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
			<li>Led a team of 2 developers</li>
			<li>Made key architecture decisions</li>
			<li>Delivered a complete solution</li>
			<li>Enhanced code quality through type safety, unit tests and thorough code reviews</li>
		</ul>

		<div class="mt-2 ml-5">
			Tech:
			<ul class="inline list-none pl-0 leading-5">
				<li class="badge badge-large inline">React</li>
				<li class="badge inline">Redux</li>
				<li class="badge inline">Flowtype</li>
				<li class="badge inline">REST API</li>
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
			<li>Developed complex interactive cost estimation table and final bid page with resulting PDF preview</li>
			<li>Maintained data flow using Redux</li>
		</ul>

		<div class="mt-2 ml-5">
			Tech:
			<ul class="inline list-none pl-0 leading-5">
				<li class="badge badge-large inline">React</li>
				<li class="badge inline">Redux</li>
				<li class="badge inline">REST API</li>
			</ul>
		</div>
	</Project>
</section>
