<script lang="ts">
	import i18n from '$lib/i18n'
	import Title from './(components)/Title.svelte'
	import SkillsHighlight from './(components)/SkillsHighlight.svelte'
	import Experience from './(components)/Experience.svelte'
	import SkillsTech from './(components)/SkillsTech.svelte'
	import Lead from './(components)/Lead.svelte'
	import Contacts from './(components)/Contacts.svelte'
	import LangSwitcher from '$lib/components/organisms/LangSwitcher.svelte'
	import Education from './(components)/Education.svelte'
	import Profiles from './(components)/Profiles.svelte'
	import Languages from './(components)/Languages.svelte'
	import Personality from './(components)/Personality.svelte'
	import Interests from './(components)/Interests.svelte'

	const t = i18n({
		cs: {
			learning: 'učím se',
			skills: 'Dovednosti',
			years: 'roky',
		},
		en: {
			learning: 'learning',
			skills: 'Skills',
			years: 'years',
		},
	})
</script>

<article class="relative px-6 py-8 sm:px-12">
	<div class="text-secondary zoom-1.5 mb-2 text-right *:p-1 *:before:content-none sm:absolute sm:right-12 print:hidden">
		<LangSwitcher />
	</div>

	<Title />

	<section class="flex gap-4 not-italic">
		<Contacts />
	</section>

	<section class="mt-8 flex flex-col-reverse gap-10 sm:grid sm:grid-cols-[auto_360px]">
		<div class="border-secondary flex flex-col gap-3 rounded-xl bg-gray-100 px-4 pb-4">
			<h2>Summary</h2>

			<Lead />

			<h2 class="mt-1">{t('skills')}</h2>

			<SkillsHighlight />
			<SkillsTech />

			<h2 class="mt-1">Who I am</h2>

			<Personality />
			<Interests />
			<Languages />
			<Education />
			<Profiles />
		</div>

		<div>

			<h2 class="mt-1">Experience</h2>
			<div class="text-secondary zoom-[1.1]">Selection</div>

			<Experience />
		</div>
	</section>
</article>
