import type { Component } from 'svelte'
import Text from './Text.svelte'
import Strong from './Strong.svelte'
import Em from './Em.svelte'
import Link from './Link.svelte'

type PartProps = { text: string; href?: string }

export const partViews: Record<string, Component<PartProps>> = {
	text: Text,
	strong: Strong,
	em: Em,
	link: Link,
}
