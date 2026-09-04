<script lang="ts">
	import type { Snippet } from 'svelte'

	let { class: className = '', children }: { class?: string; children?: Snippet } = $props()
</script>

<section
	class="mt-6 flex flex-col gap-8 print:break-inside-avoid not-first:print:mt-0 not-first:print:pt-8 print:not-first-of-type:h-[97vh] {className}"
>
	{@render children?.()}
</section>
