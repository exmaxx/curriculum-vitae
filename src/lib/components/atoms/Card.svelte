<script lang="ts">
	let { children } = $props()
</script>

<div class="badge-large rounded border px-2.5 py-3">
	{@render children()}
</div>
