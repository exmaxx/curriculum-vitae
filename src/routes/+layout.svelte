<script lang="ts">
	import '../app.css'

	if (import.meta.env.DEV) {
		import('../app.dev.css')
	}

	const { children } = $props()
</script>

{@render children()}
