<script lang="ts">
	import useI18n from '$lib/composables/useI18n.svelte.js'

	interface Props {
		class?: string
	}

	const { class: classes }: Props = $props()

	const t = useI18n({
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
	class={`text-accent zoom-2 a4:zoom-[3] a4:my-3 a4:gap-1 flex flex-col items-center 2xl:mr-10 2xl:flex-row 2xl:gap-6
 		${classes}`}
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
