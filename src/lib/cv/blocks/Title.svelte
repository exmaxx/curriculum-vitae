<script lang="ts">
	import type { Snippet } from 'svelte'
	import { useLang } from '../i18n.svelte.js'
	import type { TitleNode } from '../types'

	let { node }: { node: TitleNode; children?: Snippet } = $props()
	const i18n = useLang()
</script>

<div class={node.class}>
	<h1>{node.firstName} {i18n.t(node.surname)}</h1>
	<p class="a4:-mt-1 mt-2 text-[1.8em] leading-9">{i18n.t(node.role)}</p>
</div>
