<script lang="ts">
	import '../app.css'
	let { children } = $props()
</script>

<div class="bg-zinc-400 print:bg-none">
	<div
		class=" a4-paper relative mx-auto border border-b-zinc-300 bg-white p-12 text-[11px] print:border-none print:pb-0"
	>
		{@render children()}

		<div class="absolute right-0 bottom-0 mb-4 mr-1 origin-bottom-left translate-full -rotate-90 text-xs text-zinc-400">
			Zdrojový kód (HTML, CSS, Tailwind 4): <a href="https://github.com/exmaxx/curriculum-vitae">zde</a>
		</div>
	</div>
</div>

<style>
	.a4-paper {
		width: 210mm;
		max-width: 210mm;
		background-image: linear-gradient(white, white calc(100% - 1px), zinc);
		background-size: auto 297mm;
	}
</style>
