<script lang="ts">
	import Project from '$lib/components/atoms/Project.svelte'
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			now: 'nyní',

			proj_rascasone_description: 'Malá mezinárodní vývojářská agentura.',
			proj_rascasone_details_1: 'Vedl týmy 1–3 lidí',
			proj_rascasone_details_2: 'Komunikace s klienty a plánování projektů',
			proj_rascasone_details_3:
				'Full-stack v Ruby on Rails (1 rok) — webová aplikace pro pojišťovacího makléře, vylepšení aplikace bezpečnostní agentury',
			proj_rascasone_details_4: 'Několik frontendů v Reactu',

			proj_esticom_description:
				'Webová aplikace pro stavební inženýry - stavební nákresy, odhady cen prací, rozesílání nabídek. Malý mezinárodní tým.',
			proj_esticom_details_1:
				'Vyvíjel jsem komplexní interaktivní tabulku pro odhad cen a stránku pro tvorbu koncové nabídky, včetně preview PDF',
		},
		en: {
			now: 'now',

			proj_rascasone_description: 'Co-owned and led a small international development agency.',
			proj_rascasone_details_1: 'Led teams of 1–3',
			proj_rascasone_details_2: 'Client communication and project planning',
			proj_rascasone_details_3:
				'Full-stack Ruby on Rails (1 year) — web app for an insurance broker, enhancements to a security agency app',
			proj_rascasone_details_4: 'Several frontends in React (including Esticom and Dr. Max)',

			proj_esticom_description: 'Web application for civil engineers. Small international team.',
			proj_esticom_details_1:
				'Developed complex interactive cost estimation table and final bid page with resulting PDF preview',
		},
	})
</script>

<section>
	<Project
		position="Full-stack Developer / Team Leader / Co-owner"
		period="2015-2019"
		title="Rascasone, Czech Republic"
		badges={['Hybrid']}
		links={[{ url: 'https://www.rascasone.com' }]}
	>
		<p>
			<em>{t('proj_rascasone_description')}</em>
		</p>

		<ul>
			<li>{t('proj_rascasone_details_1')}</li>
			<li>{t('proj_rascasone_details_2')}</li>
			<li>{t('proj_rascasone_details_3')}</li>
			<li>{t('proj_rascasone_details_4')}</li>
		</ul>

		<div class="mt-2 ml-5">
			Tech:

			<ul class="inline list-none pl-0 leading-5">
				<li class="badge badge-highlight inline">Ruby on Rails</li>
				<li class="badge badge-highlight inline">Ruby</li>
				<li class="badge inline">REST API</li>
				<li class="badge inline">JavaScript</li>
				<li class="badge inline">React</li>
			</ul>
		</div>
	</Project>
</section>

<section>
	<Project
		position="Frontend Developer (React)"
		period="2016-2017"
		title="Esticom ({t('now')} Procore), USA"
		badges={['Remote']}
		links={[{ url: 'https://www.esticom.com' }]}
	>
		<p>
			<em>{t('proj_esticom_description')}</em>
		</p>

		<ul>
			<li>{t('proj_esticom_details_1')}</li>
		</ul>

		<div class="mt-2 ml-5">
			Tech:
			<ul class="inline list-none pl-0 leading-5">
				<li class="badge badge-highlight inline">React</li>
				<li class="badge inline">Redux</li>
				<li class="badge inline">REST API</li>
			</ul>
		</div>
	</Project>
</section>
