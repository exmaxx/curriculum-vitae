<script lang="ts">
	import type { Snippet } from 'svelte'
	import Project from '$lib/components/atoms/Project.svelte'
	import { present } from '../present.js'
	import { useLang } from '../i18n.svelte.js'
	import type { ExperiencesNode } from '../types.js'

	let { node }: { node: ExperiencesNode; children?: Snippet } = $props()
	const i18n = useLang()
</script>

{#each present(node.items) as item}
	<section>
		<Project {item} techLabel={i18n.t(node.techLabel ?? 'Tech')} />
	</section>
{/each}
