<template lang="pug">
div
	section.section
		h1.title Get Started
		h4.subtitle Here are some useful resources to get started in Machine Learning
		.content
			div(v-html='started')
	section.section
		h1.title Datasets
		h4.subtitle These are some free datasets to use
		.content
			div(v-html='datasets')
	section.section
		h1.title  University of Alberta Courses
		table.table.is-fullwidth.is-striped
			thead
				tr
					th Course Name
					th course Number
					th Days and Time
			tbody
				tr(v-for='course in courses')
					td {{ course.name }}
					td {{ course.number }}
					td {{ course.days }} {{ course.time }}
	section.section
		h1.title Popular Lectures
		h2.subtitle.is-spaced General Machine Learning
		p(v-for='lecture in lectures.general')
			a.is-block(:href='lecture.link') {{ lecture.title }}
			| {{ lecture.desc }}
		h2.subtitle.is-spaced Reinforcement Learning
		p(v-for='lecture in lectures.deep')
			a.is-block(:href='lecture.link') {{ lecture.title }}
			| {{ lecture.desc }}
		h2.subtitle.is-spaced Deep Learning
		p(v-for='lecture in lectures.deep')
			a.is-block(:href='lecture.link') {{ lecture.title }}
			| {{ lecture.desc }}
	section.section
		h1.title Miscellaneous
		p(v-for='etc in misc')
			a.is-block(:href='etc.link') {{ etc.title }}
			| {{ etc.desc }}
</template>

<style lang="sass">
.subtitle.is-spaced
	margin-top: 1.25rem
	margin-bottom: 0
</style>

<script >
import gettingStarted from '~/assets/data/getting-started.md'
import datasets from '~/assets/data/datasets.md'

export default {
	head: {
		title: 'Getting Started'
	},
	async asyncData({ $content, params}) {
		const resources = await $content(params.slug || 'resources').fetch()
		return {
			courses: resources.classes,
			lectures: resources.lectures,
			misc: resources.etc
		}
	},
	computed: {
		started() {
			return gettingStarted
		},
		datasets() {
			return datasets
		}
	}
}
</script>