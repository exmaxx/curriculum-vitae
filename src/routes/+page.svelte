<script>
	import Title from './Title.svelte'
	import SkillsHighlight from './SkillsHighlight.svelte'
	import History from './History.svelte'
	import Experience from './Experience.svelte'
	import Links from './Links.svelte'
	import SkillsInDetail from './SkillsInDetail.svelte'
	import Lead from './Lead.svelte'
	import Contacts from './Contacts.svelte'
	import Education from './Education.svelte'
</script>

<article>
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

		<div class="border-2 border-dashed border-secondary p-6 rounded">
			<SkillsHighlight />
			<SkillsInDetail />
		</div>
	</section>
</article>
