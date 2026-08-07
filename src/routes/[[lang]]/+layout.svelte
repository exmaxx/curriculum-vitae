<script lang="ts">
	import SourceCodeNote from './(components)/SourceCodeNote.svelte'
	import PrintNote from './(components)/PrintNote.svelte'
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
	<PrintNote class="a4:[grid-area:top] 2xl:justify-self-end 2xl:[grid-area:left] print:hidden" />

	<div
		class="not-print:with-a4-bottom-gap a4:w-[210mm] a4:max-w-[210mm] relative
		 mx-auto bg-white shadow-2xl [grid-area:main]
		  print:pb-0 print:shadow-none"
	>
		<div class="zoom-1.5 a4:-top-8 absolute -top-11 right-2 mb-2 *:p-1 *:before:content-none print:hidden">
			<LangSwitcher />
		</div>

		{@render children()}
	</div>

	<SourceCodeNote class="mt-4 self-start [grid-area:bottom] print:hidden" />
</div>
