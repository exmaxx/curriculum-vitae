<script lang="ts">
	import { partKind } from '../maps'
	import { partHref, partShape, partText } from '../i18n'
	import { useLang } from '../i18n.svelte.js'
	import { partViews } from './parts/views'
	import type { Rich, TextPart } from '../types'

	let { value }: { value: Rich } = $props()
	const i18n = useLang()
	const parts = $derived(i18n.parts(value))

	const view = (part: TextPart) => ({
		kind: partKind[partShape(part)],
		text: partText(part),
		href: partHref(part),
	})
</script>

{#each parts as part}
	{@const el = view(part)}
	{#each [partViews[el.kind]].filter(Boolean) as View}
		<View text={el.text} href={el.href} />
	{/each}
{/each}
