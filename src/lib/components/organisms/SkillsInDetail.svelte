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
			work_attitude: 'aktivně řeším problémy',
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
			work_attitude: 'active problem-solving',
			team_player: 'team player (living for the team)',
			work_interests: 'Work-related interests',
		},
	})
</script>

<section>
	<div class="flex flex-wrap gap-1">
		<ul class="flex list-none flex-wrap gap-1 pl-0">
			<Badge component="li">HTML5</Badge>
			<Badge component="li">CSS3</Badge>
			<Badge component="li">Sass</Badge>
			<Badge component="li">Tailwind 4</Badge>
			<Badge component="li">Flex</Badge>
			<Badge component="li">Grid</Badge>
			<Badge component="li">Jest</Badge>
			<Badge component="li">refactoring</Badge>
			<Badge component="li">code reviews</Badge>
			<Badge component="li">Git</Badge>
			<Badge component="li">eslint</Badge>
			<Badge component="li">prettier</Badge>
			<Badge component="li">Web Vitals</Badge>
			<Badge component="li">SSR</Badge>
			<Badge component="li">Azure Devops</Badge>
			<Badge component="li">Jira</Badge>
			<Badge component="li">Copilot</Badge>
			<Badge component="li">scrum</Badge>
		</ul>
	</div>

	<div class="flex flex-wrap gap-1">
		<h3 class="w-full">{t('brief_encounters')}</h3>

		<ul class="flex list-none flex-wrap gap-1 pl-0">
			<Badge component="li" class="border-accent">AlpineJs</Badge>
			<Badge component="li" class="border-accent">Node.js</Badge>
			<Badge component="li" class="border-accent">Express</Badge>
			<Badge component="li" class="border-accent">Cypress</Badge>
			<Badge component="li" class="border-accent">Redis</Badge>
			<Badge component="li" class="border-accent">Elasticsearch</Badge>
			<Badge component="li" class="border-accent">Sentry</Badge>
			<Badge component="li" class="border-accent">Webpack</Badge>
			<Badge component="li" class="border-accent">Docker</Badge>
			<Badge component="li" class="border-accent">Kubernetes</Badge>
			<Badge component="li" class="border-accent">CI pipelines</Badge>
		</ul>
	</div>

	<div class="bg-accent mt-4 rounded p-4">
		<h3 class="mt-0">{t('my_attributes')}</h3>

		<ul>
			<li>{t('honest')}</li>
			<li>{t('work_attitude')}</li>
			<li>{t('team_player')}</li>
			<li>{t('detail_oriented')}</li>
		</ul>

		<h3 class="mt-3">{t('work_interests')}</h3>

		<ul>
			<li>{t('interest_1')}</li>
			<li>{t('interest_2')}</li>
			<li>{t('interest_3')}</li>
		</ul>
	</div>

	<div>
		<h3>{t('languages')}</h3>
		<ul>
			<li>{t('lang_en')}</li>
			<li>{t('lang_de')}</li>
		</ul>
	</div>
</section>
