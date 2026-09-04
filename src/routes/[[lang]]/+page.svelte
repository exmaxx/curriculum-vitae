<script lang="ts">
	import { cv } from '$lib/cv/data'
	import Renderer from '$lib/cv/Renderer.svelte'
</script>

<Renderer nodes={[cv]} />
