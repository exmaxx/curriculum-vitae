<script lang="ts">
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			surname: 'Uličný',
		},
		en: {
			surname: 'Ulicny',
		},
	})
</script>

<div>
	<h1>Marek {t('surname')}</h1>
	<p class="a4:-mt-1 mt-2 text-[1.8em] leading-9">Senior Software Engineer</p>
</div>
