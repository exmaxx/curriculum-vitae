<script>
	import Badge from '$lib/components/atoms/Badge.svelte'
	import i18n from '$lib/i18n'

	const t = i18n({
		cs: {
			brief_encounters: 'Letmá setkání',
			detail_oriented: 'zaměřený na detaily',
			honest: 'upřímný, spolehlivý, komunikativní, empatický',
			interest_1: 'Advent of code, vývoj her (Godot)',
			interest_2: 'grafy, vizualizace dat',
			interest_3: 'psychologie',
			lang_de: 'Německý: pasivně (A1)',
			lang_en: 'Anglický: plynně (C1)',
			languages: 'Jazyky',
			my_attributes: 'Mé vlastnosti',
			task_completion: 'dotahuji úkoly, aktivně řeším problémy',
			team_player: 'týmový hráč (pro tým žiju)',
			work_interests: 'Zájmy spojené s prací',
		},
		en: {
			brief_encounters: 'Brief encounters',
			detail_oriented: 'detail-oriented',
			honest: 'honest, reliable, communicative, empathetic',
			interest_1: 'Advent of code, gamedev (Godot)',
			interest_2: 'charts, data visualization',
			interest_3: 'psychology',
			lang_de: 'German: passive (A1)',
			lang_en: 'English: fluent (C1)',
			languages: 'Languages',
			my_attributes: 'My attributes',
			task_completion: 'task completion, active problem-solving',
			team_player: 'team player (living for the team)',
			work_interests: 'Work-related interests',
		},
	})
</script>

<section>
	<div class="flex flex-wrap gap-1">
		<Badge>HTML5</Badge>
		<Badge>CSS3</Badge>
		<Badge>Sass</Badge>
		<Badge>Tailwind 4</Badge>
		<Badge>Flex</Badge>
		<Badge>Grid</Badge>
		<Badge>Jest</Badge>
		<Badge>refactoring</Badge>
		<Badge>code reviews</Badge>
		<Badge>Git</Badge>
		<Badge>eslint</Badge>
		<Badge>prettier</Badge>
		<Badge>Web Vitals</Badge>
		<Badge>SSR</Badge>
		<Badge>Azure Devops</Badge>
		<Badge>Jira</Badge>
		<Badge>Copilot</Badge>
		<Badge>scrum</Badge>
	</div>

	<div class="flex flex-wrap gap-1">
		<h3 class="w-full">{t('brief_encounters')}</h3>

		<Badge class="border-accent">AlpineJs</Badge>
		<Badge class="border-accent">Node.js</Badge>
		<Badge class="border-accent">Express</Badge>
		<Badge class="border-accent">Cypress</Badge>
		<Badge class="border-accent">Redis</Badge>
		<Badge class="border-accent">Elasticsearch</Badge>
		<Badge class="border-accent">Sentry</Badge>
		<Badge class="border-accent">Webpack</Badge>
		<Badge class="border-accent">Docker</Badge>
		<Badge class="border-accent">Kubernetes</Badge>
		<Badge class="border-accent">CI pipelines</Badge>
	</div>

	<div class="bg-accent mt-4 rounded p-4">
		<h3 class="mt-0">{t('my_attributes')}</h3>

		<ul>
			<li>{t('honest')}</li>
			<li>{t('task_completion')}</li>
			<li>{t('team_player')}</li>
			<li>{t('detail_oriented')}</li>
		</ul>

		<h3>{t('work_interests')}</h3>

		<ul>
			<li>{t('interest_1')}</li>
			<li>{t('interest_2')}</li>
			<li>{t('interest_3')}</li>
		</ul>
	</div>

	<div>
		<h3>{t('languages')}</h3>
		<div>{t('lang_en')}</div>
		<div>{t('lang_de')}</div>
	</div>
</section>
