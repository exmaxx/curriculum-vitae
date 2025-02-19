<script lang="ts">
	import '../../app.css'
	const { children } = $props()
</script>

<div class="bg-zinc-400 print:bg-none">
	<div class="a4-paper relative mx-auto p-12 text-[11px] print:pb-0">
		{@render children()}

		<div class="absolute right-0 bottom-0 mr-1 mb-4 origin-bottom-left translate-full -rotate-90 text-xs text-zinc-400">
			Zdrojový kód (HTML, CSS, Tailwind 4): <a href="https://github.com/exmaxx/curriculum-vitae">zde</a>
		</div>
	</div>
</div>

<style>
	.a4-paper {
		width: 210mm;
		max-width: 210mm;
		background-image: linear-gradient(white, white calc(297mm - 1px), red calc(297mm - 1px), white calc(297mm));
	}
</style>
