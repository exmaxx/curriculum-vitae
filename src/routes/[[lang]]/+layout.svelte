<script lang="ts">
	import SourceCodeNote from './(components)/SourceCodeNote.svelte'
	import PrintNote from './(components)/PrintNote.svelte'

	const { children } = $props()
</script>

<div
	class="sm:grid-areas-main min-h-dvh items-center
	 bg-zinc-400 py-1 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:grid-rows-[1fr_auto_1fr]
	  print:bg-white"
>
	<PrintNote class="sm:[grid-area:top] 2xl:justify-self-end 2xl:[grid-area:left] print:hidden" />

	<div
		class="not-print:with-a4-bottom-gap shadow-2x mx-auto bg-white
		 [grid-area:main] sm:w-[210mm] sm:max-w-[210mm]
		  print:pb-0 print:shadow-none"
	>
		{@render children()}
	</div>

	<SourceCodeNote class="mt-4 self-start [grid-area:bottom] print:hidden" />
</div>
