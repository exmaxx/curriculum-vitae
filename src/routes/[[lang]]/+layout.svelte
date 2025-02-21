<script lang="ts">
	import i18n from '$lib/i18n'

	const { children } = $props()

	const t = i18n({
		cs: {
			here: 'zde',
			source_code: 'Zdrojový kód',
		},
		en: {
			here: 'here',
			source_code: 'Source code',
		},
	})
</script>

<div class="bg-zinc-400 print:bg-none">
	<div class="a4-paper relative mx-auto bg-white text-[11px] print:pb-0">
		{@render children()}

		<div class="absolute right-0 bottom-0 mr-1 mb-4 origin-bottom-left translate-full -rotate-90 text-xs text-zinc-400">
			{t('source_code')}: <a href="https://github.com/exmaxx/curriculum-vitae">{t('here')}</a>
			(HTML, CSS, Tailwind 4)
		</div>
	</div>
</div>

<style>
	.a4-paper {
		width: 210mm;
		max-width: 210mm;
	}
</style>
