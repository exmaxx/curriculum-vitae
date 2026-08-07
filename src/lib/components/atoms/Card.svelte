<script lang="ts">
	let { children } = $props()
</script>

<div class="badge-highlight rounded border px-2.5 py-3">
	{@render children()}
</div>
