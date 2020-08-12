<template lang="pug">
div
	section.section
		h1.title Presentations
		p
			| This is a collection of presentations from UAIS members and invited speakers.
			| You can also check out our 
			a(href='https://www.youtube.com/channel/UCUHf-X4nGh9JjQyYHd3Zd8A') YouTube Channel 
			| for some recorded presentations.
	section.section(v-for='presentation in presentations')
		h1.title {{ presentation.title }}
		h2.subtitle {{ presentation.name }}
		a.is-block(:href='presentation.link') Link to presentation
		p {{ presentation.desc }}
</template>

<script >
export default {
	head: {
		title: 'Presentations'
	},
	async asyncData({ $content, params}) {
		const resources = await $content(params.slug || 'resources').fetch()
		return {
			presentations: resources.presentations,
		}
	}
}
</script>