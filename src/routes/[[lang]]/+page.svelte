<script lang="ts">
	import useTitle from '$lib/composables/useTitle.svelte.js'
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

	const getTitle = useTitle()
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
		<div class="flex flex-col gap-4">
			<section class="border-secondary bg-accent flex flex-col gap-3 rounded-xl px-5 pb-4">
				<h2>{getTitle('summary')}</h2>

				<Lead />
			</section>

			<section class="border-secondary bg-accent flex flex-col gap-3 rounded-xl px-5 pb-4">
				<h2>{getTitle('skills')}</h2>

				<SkillsHighlight />
				<SkillsTech />
			</section>

			<section class="border-secondary bg-accent flex flex-col gap-3 rounded-xl px-5 pb-4">
				<h2>{getTitle('whoIAm')}</h2>

				<Personality />
				<Interests />
				<Languages />
				<Education />
				<Profiles />
			</section>
		</div>

		<section>
			<h2 class="mt-1 bg-zinc-100">{getTitle('experienceWorkSelection')}</h2>

			<ExperienceWork />

			<h2 class="mt-6 bg-zinc-100">{getTitle('experienceProjects')}</h2>

			<ExperienceProjects />
		</section>
	</PaperPage>

	<!-- Page #2 -->

	<PaperPage>
		<section>
			<h2 class="mt-1 bg-zinc-100">{getTitle('experienceWorkOther')}</h2>

			<ExperienceWorkOther />

			<h2 class="mt-6 bg-zinc-100">{getTitle('experienceProjectsOther')}</h2>

			<ExperienceProjectsOther />
		</section>
	</PaperPage>
</article>
