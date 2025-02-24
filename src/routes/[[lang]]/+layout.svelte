<script lang="ts">
	import i18n from '$lib/i18n'

	const { children } = $props()

	const t = i18n({
		cs: {
			here: 'zde',
			source_code: 'Zdrojový kód',
			print: 'Tisk',
			print_info: 'Klikněte a vytiskněte ve formátu A4',
			to_PDF: 'do PDF',
		},
		en: {
			here: 'here',
			source_code: 'Source code',
			print: 'Print',
			print_info: 'Click and print in A4 format',
			to_PDF: 'to PDF',
		},
	})
</script>

<div
	class="sm:grid-areas-main min-h-dvh items-center
	 bg-zinc-400 py-1 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:grid-rows-[1fr_auto_1fr]
	  print:bg-none"
>
	<div
		class="text-accent zoom-2 sm:zoom-[3] flex flex-col
		items-center sm:my-3 sm:gap-1 sm:[grid-area:top]
		2xl:mr-10 2xl:flex-row 2xl:gap-6 2xl:justify-self-end 2xl:[grid-area:left]
		print:hidden"
	>
		<div class="flex flex-col items-center text-nowrap">
			<div>
				<button class="underline hover:cursor-pointer hover:text-white" onclick={() => window.print()}>
					{t('print')}
				</button>

				{t('to_PDF')}
			</div>

			<div class="zoom-[0.4]">{t('print_info')}</div>
		</div>

		<span class="mx-3 hidden 2xl:inline">&RightArrow;</span>
		<span class="mx-3 2xl:hidden">&DownArrow;</span>
	</div>

	<div
		class="a4-bottom shadow-2x relative mx-auto bg-white
		 [grid-area:main] sm:w-[210mm] sm:max-w-[210mm]
		  print:pb-0 print:shadow-none"
	>
		{@render children()}

		<div
			class="zoom-1 right-0 border-t bg-amber-50 py-2 text-center text-zinc-400
			sm:absolute sm:bottom-0 sm:mt-0 sm:mr-1 sm:mb-4 sm:origin-bottom-left sm:translate-full sm:-rotate-90 sm:border-none sm:bg-inherit sm:py-0"
		>
			{t('source_code')}: <a href="https://github.com/exmaxx/curriculum-vitae">{t('here')}</a>
			(HTML, CSS, Tailwind 4)
		</div>
	</div>
</div>
