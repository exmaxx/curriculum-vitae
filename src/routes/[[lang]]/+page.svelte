<script lang="ts">
	import useI18n from '$lib/composables/useI18n.svelte.js'
	import Title from './(components)/Title.svelte'
	import SkillsHighlight from './(components)/SkillsHighlight.svelte'
	import ExperienceWork from './(components)/ExperienceWork.svelte'
	import ExperienceWorkOther from './(components)/ExperienceWorkOther.svelte'
	import ExperienceProjects from './(components)/ExperienceProjects.svelte'
	import ExperienceProjectsOther from './(components)/ExperienceProjectsOther.svelte'
	import SkillsTech from './(components)/SkillsTech.svelte'
	import Lead from './(components)/Lead.svelte'
	import Contacts from './(components)/Contacts.svelte'
	import Education from './(components)/Education.svelte'
	import Profiles from './(components)/Profiles.svelte'
	import Languages from './(components)/Languages.svelte'
	import Personality from './(components)/Personality.svelte'
	import Interests from './(components)/Interests.svelte'
	import PaperPage from './(components)/PaperPage.svelte'

	const t = useI18n({
		cs: {
			learning: 'učím se',
			skills: 'Dovednosti',
			summary: 'Profil',
			years: 'roky',
			experience_work_title_selection: 'Praxe (Výběr)',
			experience_work_title_other: 'Praxe (Další)',
			experience_projects_title: 'Osobní projekty',
			experience_projects_title_other: 'Osobní projekty (Další)',
			who_am_i: 'Kdo jsem',
		},
		en: {
			learning: 'learning',
			skills: 'Skills',
			summary: 'Summary',
			years: 'years',
			experience_work_title_selection: 'Work Experience (Highlight)',
			experience_work_title_other: 'Work Experience (Additional)',
			experience_projects_title: 'Personal Projects',
			experience_projects_title_other: 'Personal Projects (Additional)',
			who_am_i: 'Who I am',
		},
	})
</script>

<article class="a4:px-11 px-6 py-8 print:shadow-none">
	<!-- FIXME: Ideally the header should be wrapped by paper page as well. -->
	<header class="a4:flex-row flex flex-col">
		<div class="ml-2 grow">
			<Title />
		</div>

		<div>
			<Contacts />
		</div>
	</header>

	<!-- Page #1 -->

	<PaperPage class="a4:grid a4:grid-cols-[auto_380px]">
		<section class="border-secondary bg-accent flex flex-col gap-3 rounded-xl px-5 pb-4">
			<h2>{t('summary')}</h2>

			<Lead />

			<h2 class="mt-1">{t('skills')}</h2>

			<SkillsHighlight />
			<SkillsTech />

			<h2 class="mt-1">{t('who_am_i')}</h2>

			<Personality />
			<Interests />
			<Languages />
			<Education />
			<Profiles />
		</section>

		<section>
			<h2 class="mt-1 bg-zinc-100">{t('experience_work_title_selection')}</h2>

			<ExperienceWork />

			<h2 class="mt-6 bg-zinc-100">{t('experience_projects_title')}</h2>

			<ExperienceProjects />
		</section>
	</PaperPage>

	<!-- Page #2 -->

	<PaperPage>
		<section>
			<h2 class="mt-1 bg-zinc-100">{t('experience_work_title_other')}</h2>

			<ExperienceWorkOther />

			<h2 class="mt-6 bg-zinc-100">{t('experience_projects_title_other')}</h2>

			<ExperienceProjectsOther />
		</section>
	</PaperPage>
</article>
