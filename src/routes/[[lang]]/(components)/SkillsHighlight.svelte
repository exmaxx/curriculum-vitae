<script lang="ts">
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			skills: 'Dovednosti',
			years: 'roky',
		},
		en: {
			skills: 'Skills',
			years: 'years',
		},
	})
</script>

<section>
	<ul class=" flex flex-col gap-1 pl-0">
		<li class="flex items-center gap-2 text-nowrap">
			<picture class="w-4.5">
				<img src="vue-logo.svg" alt="vue-logo" />
			</picture>

			<span class="text-[1.2em]">
				<strong>Vue</strong>: 5 {t('years')}
			</span>
		</li>

		<li class="flex items-center gap-2 text-nowrap">
			<picture class="w-4.5">
				<img src="react-logo.svg" alt="react-logo" />
			</picture>

			<span class="text-[1.2em]">
				<strong>React</strong>: 4 {t('years')}
			</span>
		</li>

		<li class="flex items-center gap-2 text-nowrap">
			<picture class="w-4.5">
				<img src="typescript-logo.svg" alt="typescript-logo" />
			</picture>

			<span class="text-[1.2em]">
				<strong>TypeScript</strong>: 4 {t('years')}
			</span>
		</li>
	</ul>
</section>
