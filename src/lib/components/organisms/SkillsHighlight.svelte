<script>
	import Card from '$lib/components/atoms/Card.svelte'
</script>

<h2 class="mt-0">Dovednosti</h2>

<div class="grid grid-cols-2 gap-2 text-nowrap mt-2 mb-4">
	<Card>
		<div class="flex items-center gap-2">
			<picture class="w-6 ">
				<img src="vue-logo.svg" alt="vue-logo" />
			</picture>
			<div>
				<div class="font-bold">Vue</div>
				<div>4 roky</div>
			</div>
		</div>
	</Card>

	<Card>
		<div class="flex items-center gap-2">
			<picture class="w-6">
				<img src="react-logo.svg" alt="react-logo" />
			</picture>
			<div>
				<div class="font-bold">React</div>
				<div>3 roky</div>
			</div>
		</div>
	</Card>

	<Card>
		<div class="flex items-center gap-2">
			<picture class="w-6">
				<img src="svelte-logo.svg" alt="svelte-logo" />
			</picture>
			<div>
				<div class="font-bold">Svelte</div>
				<div>učím se</div>
			</div>
		</div>
	</Card>

	<Card>
		<div class="flex items-center gap-2">
			<picture class=" max-h-8 w-6">
				<img src="typescript-logo.svg" alt="typescript-logo" />
			</picture>

			<div>
				<div class="font-bold">Typescript</div>
				<div>3 roky</div>
			</div>
		</div>
	</Card>
</div>
