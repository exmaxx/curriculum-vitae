<script lang="ts">
	import { page } from '$app/state'
	import Title from '$lib/components/organisms/Title.svelte'
	import SkillsHighlight from '$lib/components/organisms/SkillsHighlight.svelte'
	import History from '$lib/components/organisms/History.svelte'
	import Experience from '$lib/components/organisms/Experience.svelte'
	import Links from '$lib/components/organisms/Links.svelte'
	import SkillsInDetail from '$lib/components/organisms/SkillsInDetail.svelte'
	import Lead from '$lib/components/organisms/Lead.svelte'
	import Contacts from '$lib/components/organisms/Contacts.svelte'
	import Education from '$lib/components/organisms/Education.svelte'
	import LangSwitcher from '$lib/components/atoms/LangSwitcher.svelte'
	import { type Lang, Langs } from '$lib/langs'
	import { DEFAULT_LANG } from '$lib/constants'

	const langs = Object.keys(Langs) as Lang[]
	const currentLang = $derived(page.params.lang || DEFAULT_LANG) as Lang
</script>

<article class="px-6 py-8 sm:px-12">
	<div class="text-secondary mb-2 text-right *:p-1 *:before:content-none sm:absolute sm:right-12 print:hidden">
		<LangSwitcher {langs} current={currentLang} />
	</div>

	<Title />

	<section class="my-5 flex flex-col sm:flex-row-reverse sm:gap-10">
		<Contacts />
		<Lead />
	</section>

	<section class="flex flex-col-reverse gap-8 sm:grid sm:grid-cols-[380px_auto]">
		<div class="grid grid-cols-[200px_auto] content-start gap-x-4">
			<section class="col-span-2">
				<Experience />
			</section>

			<section class="col-span-2 sm:col-span-1">
				<History />
			</section>

			<div class="col-span-2 sm:col-span-1">
				<Education />
				<Links />
			</div>
		</div>

		<div class="border-secondary rounded border-2 border-dashed p-6">
			<SkillsHighlight />
			<SkillsInDetail />
		</div>
	</section>
</article>
