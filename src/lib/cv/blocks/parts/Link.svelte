<script lang="ts">
	let { text, href }: { text: string; href?: string } = $props()
</script>

<a {href}>{text}</a>
