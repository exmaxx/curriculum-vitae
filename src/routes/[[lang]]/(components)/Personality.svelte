<script lang="ts">
	import i18n from '$lib/i18n'

	const t = i18n({
		cs: {
			detail_oriented: 'zaměřený na detaily',
			honest: 'upřímný, spolehlivý, komunikativní, empatický',
			my_attributes: 'Osobnost',
			work_attitude: 'aktivně řeším problémy',
			team_player: 'týmový hráč (pro tým žiju)',
		},
		en: {
			detail_oriented: 'Detail-oriented',
			honest: 'Honest, reliable, communicative, empathetic',
			my_attributes: 'Personality',
			work_attitude: 'Active problem-solver',
			team_player: 'Team player (living for the team)',
		},
	})
</script>

<section>
	<h3 class="mt-0">{t('my_attributes')}</h3>

	<ul>
		<li>{t('honest')}</li>
		<li>{t('work_attitude')}</li>
		<li>{t('team_player')}</li>
		<li>{t('detail_oriented')}</li>
	</ul>
</section>
