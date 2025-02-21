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
	const currentLang = $derived((page.params.lang || DEFAULT_LANG)) as Lang
</script>

<article class="p-12">
	<div class="absolute right-12 text-secondary *:p-1 *:before:content-none">
		<LangSwitcher {langs} current={currentLang} />
	</div>

	<Title />

	<section class="my-6 flex gap-10">
		<Lead />
		<Contacts />
	</section>

	<section class="grid grid-cols-[380px_auto] gap-8">
		<div class="grid grid-cols-[200px_auto] content-start gap-x-4">
			<section class="col-span-2">
				<Experience />
			</section>

			<section>
				<History />
			</section>

			<div>
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
