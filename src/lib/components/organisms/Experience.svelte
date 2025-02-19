<script>
	import Project from '$lib/components/atoms/Project.svelte'
	import Badge from '$lib/components/atoms/Badge.svelte'
</script>

<h2 class="mt-0">Praxe</h2>
<div class="text-secondary text-xs">Výběr</div>

<section>
	<Project
		position="Sebevzdělávání, osobní projekty"
		period="2024-nyní"
		title="Income Calculator"
		links={[{ url: 'https://cz-income-simple.vercel.app' }]}
	>
		Malý srovnávač platů.

		<p class="my-0">
			Zdroj stánky: <a href="https://github.com/exmaxx/cz-income-simple">Github</a>. Zdroj knihovny:
			<a href="https://github.com/exmaxx/cz-income-lib">Github</a>
		</p>

		<p class="flex flex-wrap gap-1">
			<Badge class="badge-primary">TS</Badge>
			<Badge class="badge-primary">Svelte</Badge>
			<Badge>Tailwind</Badge>
			<Badge>Grid</Badge>
			<Badge>Vercel</Badge>
			<Badge>own NPM library</Badge>
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
			Velký mezinárodní tým spravující e-shop s léčivy. Mou hlavní náplní byl rozvoj modulu Checkout. Spolupracoval jsem také mmj. na
			rolloutu e-shopu na Slovensko a do Polska.
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
		<p>Vedení FE týmu 3 lidí. Vytvoření Checkoutu jako nezávislé aplikace.</p>

		<p class="flex flex-wrap gap-1">
			<Badge class="badge-primary">React</Badge>
			<Badge>Redux</Badge>
			<Badge>Flowtype</Badge>
			<Badge>REST API</Badge>
			<Badge>vedení týmu</Badge>
			<Badge>e-eshop</Badge>
		</p>
	</Project>
</section>

<section>
	<Project
		position="Frontend Developer"
		period="2016-2017"
		title="Esticom (nyní Procore), USA"
		links={[{ url: 'https://www.esticom.com' }]}
	>
		<p>
			Webová aplikace pro stavební inženýry - stavební nákresy, odhady cen prací, rozesílání nabídek. Malý mezinárodní
			tým.
		</p>

		<p class="flex flex-wrap gap-1">
			<Badge class="badge-primary">React</Badge>
			<Badge>Redux</Badge>
			<Badge>REST API</Badge>
			<Badge>web app</Badge>
		</p>
	</Project>
</section>
