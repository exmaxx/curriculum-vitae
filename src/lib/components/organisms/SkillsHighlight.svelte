<script lang="ts">
	import Card from '$lib/components/atoms/Card.svelte'
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

<h2 class="mt-0">{t('skills')}</h2>

<div class="mt-2 mb-4 grid grid-cols-2 gap-2 text-nowrap">
	<Card>
		<div class="flex items-center gap-2">
			<picture class="w-6">
				<img src="vue-logo.svg" alt="vue-logo" />
			</picture>
			<div>
				<div class="font-bold">Vue</div>
				<div>4 {t('years')}</div>
			</div>
		</div>
	</Card>

	<Card>
		<div class="flex items-center gap-2">
			<picture class="w-6">
				<img src="react-logo.svg" alt="react-logo" />
			</picture>
			<div>
				<div class="font-bold">React</div>
				<div>3 {t('years')}</div>
			</div>
		</div>
	</Card>

	<Card>
		<div class="flex items-center gap-2">
			<picture class="w-6">
				<img src="svelte-logo.svg" alt="svelte-logo" />
			</picture>
			<div>
				<div class="font-bold">Svelte</div>
				<div>{t('learning')}</div>
			</div>
		</div>
	</Card>

	<Card>
		<div class="flex items-center gap-2">
			<picture class="max-h-8 w-6">
				<img src="typescript-logo.svg" alt="typescript-logo" />
			</picture>
			<div>
				<div class="font-bold">Typescript</div>
				<div>3 {t('years')}</div>
			</div>
		</div>
	</Card>
</div>
