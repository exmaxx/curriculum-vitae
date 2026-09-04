import type { Component } from 'svelte'
import type { BlockType, CvNode } from './types'

import Document from './blocks/Document.svelte'
import Header from './blocks/Header.svelte'
import Title from './blocks/Title.svelte'
import Contacts from './blocks/Contacts.svelte'
import Page from './blocks/Page.svelte'
import Column from './blocks/Column.svelte'
import Section from './blocks/Section.svelte'
import Lead from './blocks/Lead.svelte'
import SkillsHighlight from './blocks/SkillsHighlight.svelte'
import BadgeGroups from './blocks/BadgeGroups.svelte'
import List from './blocks/List.svelte'
import Experiences from './blocks/Experiences.svelte'

type BlockProps = { node: CvNode; children?: import('svelte').Snippet }

export const registry: Record<BlockType, Component<BlockProps>> = {
	document: Document as Component<BlockProps>,
	header: Header as Component<BlockProps>,
	title: Title as Component<BlockProps>,
	contacts: Contacts as Component<BlockProps>,
	page: Page as Component<BlockProps>,
	column: Column as Component<BlockProps>,
	section: Section as Component<BlockProps>,
	lead: Lead as Component<BlockProps>,
	skillsHighlight: SkillsHighlight as Component<BlockProps>,
	badgeGroups: BadgeGroups as Component<BlockProps>,
	list: List as Component<BlockProps>,
	experiences: Experiences as Component<BlockProps>,
}
