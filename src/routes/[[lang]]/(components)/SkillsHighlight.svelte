<script lang="ts">
	import i18n from '$lib/i18n'

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

<section>
	<ul class=" flex flex-col gap-1 pl-0">
		<li class="flex items-center gap-2 text-nowrap">
			<picture class="w-4.5">
				<img src="vue-logo.svg" alt="vue-logo" />
			</picture>

			<span class="text-[1.2em]">
				<strong>Vue</strong>: 4 {t('years')}
			</span>
		</li>

		<li class="flex items-center gap-2 text-nowrap">
			<picture class="w-4.5">
				<img src="react-logo.svg" alt="react-logo" />
			</picture>

			<span class="text-[1.2em]">
				<strong>React</strong>: 3 {t('years')}
			</span>
		</li>

		<li class="flex items-center gap-2 text-nowrap">
			<picture class="w-4.5">
				<img src="svelte-logo.svg" alt="svelte-logo" />
			</picture>

			<span class="text-[1.2em]">
				<strong>Svelte</strong>: {t('learning')}
			</span>
		</li>

		<li class="flex items-center gap-2 text-nowrap">
			<picture class="w-4.5">
				<img src="typescript-logo.svg" alt="typescript-logo" />
			</picture>

			<span class="text-[1.2em]">
				<strong>TypeScript</strong>: 3 {t('years')}
			</span>
		</li>
	</ul>
</section>
