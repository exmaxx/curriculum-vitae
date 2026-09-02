<script lang="ts">
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			detail_oriented: 'zaměřený na detaily',
			honest: 'upřímný, spolehlivý, komunikativní, empatický',
			my_attributes: 'Osobnost',
			work_attitude: 'Aktivně řeším problémy',
			team_player: 'týmový hráč',
		},
		en: {
			detail_oriented: 'Detail-oriented',
			honest: 'Honest, reliable, communicative, empathetic',
			my_attributes: 'Personality',
			work_attitude: 'Proactive problem solver',
			team_player: 'Team player',
		},
	})
</script>

<section>
	<h3 class="mt-0">{t('my_attributes')}</h3>

	<ul>
		<li>{t('honest')}</li>
		<li>{t('detail_oriented')}</li>
		<li>{t('work_attitude')}</li>
		<li>{t('team_player')}</li>
	</ul>
</section>
