<script lang="ts">
	import i18n from '$lib/i18n'

	const t = i18n({
		cs: {
			print: 'Tisk',
			print_info: 'Klikněte a vytiskněte ve formátu A4',
			to_PDF: 'do PDF',
		},
		en: {
			print: 'Print',
			print_info: 'Click and print in A4 format',
			to_PDF: 'to PDF',
		},
	})
</script>

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
