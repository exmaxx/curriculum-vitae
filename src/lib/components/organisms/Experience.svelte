<script>
	import Project from '$lib/components/atoms/Project.svelte'
	import Badge from '$lib/components/atoms/Badge.svelte'
	import i18n from '$lib/i18n'

	const t = i18n({
		cs: {
			leadership: 'vedení týmu',
			now: 'nyní',
			npm_lib: 'vlastní NPM knihovna',
			proj_drmax_description:
				'Velký mezinárodní tým spravující e-shop s léčivy. Mou hlavní náplní byl rozvoj modulu Checkout. Spolupracoval jsem také mmj. na rolloutu e-shopu na Slovensko a do Polska.',
			proj_drmax_react_description: 'Vedení FE týmu 3 lidí. Vytvoření Checkoutu jako nezávislé aplikace.',
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
			leadership: 'team lead',
			now: 'now',
			npm_lib: 'own NPM library',
			proj_drmax_description:
				'Big multinational team working on e-shop with pharmaceuticals. My main task was to develop Checkout module. I also worked on rollouts of e-shop to Slovakia and Poland.',
			proj_drmax_react_description: 'Leading FE team of 3 people. Creating the Checkout as independent application.',
			proj_esticom_description:
				'Web application for civil engineers - construction drawings, cost estimates, bids creation. Small multinational team.',
			proj_gap_description: 'Simple salary comparator.',
			proj_gap_title: 'Self-learning, personal projects',
			source_app: 'App source',
			source_lib: 'Library source',
			subtitle: 'Selection',
			title: 'Experience',
		},
	})
</script>

<h2 class="mt-0">{t('title')}</h2>
<div class="text-secondary text-xs">{t('subtitle')}</div>

<section>
	<Project
		position={t('proj_gap_title')}
		period="2024-{t('now')}"
		title="Income Calculator"
		links={[{ url: 'https://cz-income-simple.vercel.app' }]}
	>
		{t('proj_gap_description')}

		<p class="my-0">
			{t('source_app')}: <a href="https://github.com/exmaxx/cz-income-simple">Github</a>. {t('source_lib')}:
			<a href="https://github.com/exmaxx/cz-income-lib">Github</a>
		</p>

		<p class="flex flex-wrap gap-1">
			<Badge class="badge-primary">TS</Badge>
			<Badge class="badge-primary">Svelte</Badge>
			<Badge>Tailwind</Badge>
			<Badge>Grid</Badge>
			<Badge>Vercel</Badge>
			<Badge>{t('npm_lib')}</Badge>
		</p>
	</Project>
</section>

<section>
	<Project
		position="Senior Frontend Developer"
		period="2020-2024"
		title="Dr. Max - e-shop platform"
		links={[{ url: 'https://www.drmax.cz' }]}
	>
		<p>
			{t('proj_drmax_description')}
		</p>

		<p class="flex flex-wrap gap-1">
			<Badge class="badge-primary">JS</Badge>
			<Badge class="badge-primary">TS</Badge>
			<Badge class="badge-primary">Vue 2</Badge>
			<Badge class="badge-primary">Vue 3</Badge>
			<Badge>Vuex</Badge>
			<Badge>Nuxt</Badge>
			<Badge>GraphQL</Badge>
			<Badge>Web Vitals</Badge>
			<Badge>Azure DevOps</Badge>
			<Badge>refactoring</Badge>
			<Badge>code reviews</Badge>
			<Badge>scrum</Badge>
			<Badge>e-eshop</Badge>
		</p>
	</Project>
</section>

<section>
	<Project position="Senior Frontend Developer & Team Leader" period="2018-2019" title="Dr. Max - checkout app">
		<p>{t('proj_drmax_react_description')}</p>

		<p class="flex flex-wrap gap-1">
			<Badge class="badge-primary">React</Badge>
			<Badge>Redux</Badge>
			<Badge>Flowtype</Badge>
			<Badge>REST API</Badge>
			<Badge>{t('leadership')}</Badge>
			<Badge>e-eshop</Badge>
		</p>
	</Project>
</section>

<section>
	<Project
		position="Frontend Developer"
		period="2016-2017"
		title="Esticom ({t('now')} Procore), USA"
		links={[{ url: 'https://www.esticom.com' }]}
	>
		<p>
			{t('proj_esticom_description')}
		</p>

		<p class="flex flex-wrap gap-1">
			<Badge class="badge-primary">React</Badge>
			<Badge>Redux</Badge>
			<Badge>REST API</Badge>
			<Badge>web app</Badge>
		</p>
	</Project>
</section>
