<script lang="ts">
	import i18n from '$lib/i18n'

	const t = i18n({
		cs: {
			contact: 'Kontakt',
		},
		en: {
			contact: 'Contact',
		},
	})
</script>

<address class="bg-accent rounded px-4 py-3 not-italic">
	<h2 class="m-0">{t('contact')}</h2>

	<p class="flex flex-col">
		<a href="tel:+420777163654">+420 777 163 654</a>
		<a href="mailto:xulicny@gmail.com">xulicny@gmail.com</a>
	</p>
</address>
