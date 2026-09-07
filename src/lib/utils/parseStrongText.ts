export type TextSegment = {
	type: 'text' | 'strong'
	content: string
}

export function parseStrongText(text: string): TextSegment[] {
	const segments: TextSegment[] = []
	const regex = /\*\*(.+?)\*\*/g
	let lastIndex = 0
	let match: RegExpExecArray | null

	while ((match = regex.exec(text)) !== null) {
		if (match.index > lastIndex) {
			segments.push({ type: 'text', content: text.slice(lastIndex, match.index) })
		}

		segments.push({ type: 'strong', content: match[1] })
		lastIndex = regex.lastIndex
	}

	if (lastIndex < text.length) {
		segments.push({ type: 'text', content: text.slice(lastIndex) })
	}

	return segments.length ? segments : [{ type: 'text', content: text }]
}
