<script lang="ts">
	import Project from '$lib/components/atoms/Project.svelte'
	import useI18n from '$lib/composables/useI18n.svelte.js'

	const t = useI18n({
		cs: {
			now: 'nyní',

			proj_esticom_description:
				'Webová aplikace pro stavební inženýry - stavební nákresy, odhady cen prací, rozesílání nabídek. Malý mezinárodní tým.',
			proj_esticom_details_1:
				'Vyvíjel jsem komplexní interaktivní tabulku pro odhad cen a stránku pro tvorbu koncové nabídky, včetně preview PDF',
		},
		en: {
			now: 'now',

			proj_esticom_description: 'Web application for civil engineers. Small international team.',
			proj_esticom_details_1:
				'Developed complex interactive cost estimation table and final bid page with resulting PDF preview',
		},
	})
</script>

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
