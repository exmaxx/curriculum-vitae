<script lang="ts">
	import useI18n from '$lib/composables/useI18n.svelte.js'
	import LangSwitcher from '$lib/components/organisms/LangSwitcher.svelte'

	const { children } = $props()

	const t = useI18n({
		cs: {
			language: 'CZ',
		},
		en: {
			language: 'EN',
		},
	})
</script>

<svelte:head>
	<title>Marek Ulicny - CV ({t('language')})</title>
</svelte:head>

<div
	class="a4:grid-areas-main a4:grid a4:grid-cols-[1fr_auto_1fr]
	 a4:grid-rows-[1fr_auto_1fr] min-h-dvh items-center bg-zinc-400 py-1
	  print:bg-white"
>
	<div
		class="[grid-area:main] mx-auto w-fit origin-top not-print:mt-12 xl:scale-150
		 print:scale-100"
	>
		<div
			class="not-print:with-a4-bottom-gap a4:w-[210mm] a4:max-w-[210mm] relative
			 bg-white shadow-2xl print:pb-0 print:shadow-none"
		>
		<div class="a4:-top-8 absolute -top-11 right-2 mb-2 text-[1.5em] *:p-1 *:before:content-none print:hidden">
			<LangSwitcher />
		</div>

		{@render children()}
		</div>
	</div>
</div>
