<script lang="ts">
	import type { Snippet } from 'svelte'
	import { present, gate } from '../present'
	import { useLang } from '../i18n.svelte.js'
	import type { SkillsHighlightNode } from '../types'

	let { node }: { node: SkillsHighlightNode; children?: Snippet } = $props()
	const i18n = useLang()
</script>

<section>
	<ul class="flex flex-col gap-1 pl-0">
		{#each present(node.items) as skill}
			<li class="flex items-center gap-2 text-nowrap">
				{#each gate(skill.logo) as logo}
					<picture class="w-4.5">
						<img src={logo} alt="{skill.name}-logo" />
					</picture>
				{/each}

				<span class="text-[1.2em]">
					<strong>{skill.name}</strong>: {skill.years}
					{i18n.t(node.yearsLabel)}
				</span>
			</li>
		{/each}
	</ul>
</section>
