<template lang="pug">
div
	section.section
		h1.title Fall 2022 Hex Tournament
		h2.subtitle Important Links
		.content
			ul
				li(v-for='main_link in hex_tournament.main_links')
					a.is-block(:href='main_link.link') {{ main_link.title }}
		h2.subtitle Poster
		img(:src='require(`@/assets/images/poster.png`)')
</template>

<script >
export default {
	head: {
		title: 'Hex Tournament'
	},
	async asyncData({ $content, params }) {
		const resources = await $content(params.slug || 'resources').fetch()
		return {
			hex_tournament: resources.hex_tournament,
		}
	}
}
</script>
