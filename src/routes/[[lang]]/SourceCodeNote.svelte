<script lang="ts">
	import i18n from '$lib/i18n'

	const t = i18n({
		cs: {
			here: 'zde',
			source_code: 'Projděte si zdrojový kód',
		},
		en: {
			here: 'here',
			source_code: 'Check source code',
		},
	})
</script>

<div
	class="zoom-1 border-t bg-amber-50 py-2 text-center text-zinc-400 sm:absolute
			sm:right-0 sm:bottom-0 sm:m-px sm:origin-bottom-left sm:translate-x-full sm:-rotate-90 sm:border-none sm:bg-inherit sm:pl-4"
>
	{t('source_code')}: <a href="https://github.com/exmaxx/curriculum-vitae">{t('here')}</a>
	(HTML, CSS, Tailwind 4)
</div>
