<template lang="pug">
div
	.box(v-for='(exec, index) in execs')
		article.media
			figure.media-left(v-if='index % 2 === 1')
				Headshot(:imgFile='exec.github')
			.media-content
				h2.title.has-text-primary {{ exec.name }} {{ exec.emoji }}
				h3.subtitle.is-3.has-text-info {{ exec.position }}
				p {{ exec.description }}
				.tag.is-info
					span.icon
						fa(:icon='["fab", "github"]')
					a(:href='"https://github.com/" + exec.github') {{ exec.github }}
				.tag.is-info
					span.icon
						fa(:icon='["fab", "slack"]')
					span @{{ exec.slack }}
				p
					span.has-text-success Blood Type: 
					span.has-text-danger {{ randomBloodType() }}
				p
					span.has-text-success SIN: 
					span {{ randomSIN() }}
				p
					span.has-text-success Credit Card PIN: 
					span {{ randomPIN() }}
			figure.media-right(v-if='index % 2 === 0')
				Headshot(:imgFile='exec.github')
</template>

<style lang="sass">
@import '~assets/_variables.scss'

.box .tag
	margin-right: 1rem

	&:last-of-type
		margin-right: 0

	a
		color: $white-ter
</style>

<script >
import execs from '~/assets/data/about.json'
import Headshot from '~/components/Headshot.vue'

export default {
	head: {
		title: 'About'
	},
	components: {
		Headshot
	},
	data() {
		return {
			execs: execs.people,
			randomBloodType: this.randomBloodType,
			randomSIN: this.randomSIN,
			randomPIN: this.rand3Digits
		}
	},
	methods: {
		randomBloodType: function() {
			const bloodGroup = ['A', 'B', 'AB', 'O']
			const bloodRh = ['-', '+']

			const randomGroup = bloodGroup[Math.floor(Math.random() * bloodGroup.length)]
			const randomRh = bloodRh[Math.floor(Math.random() * bloodRh.length)]
			return randomGroup + randomRh
		},
		rand3Digits: function() {
			const randNum = Math.floor(Math.random() * 1000)
			return String(randNum).padStart(3, '0')
		},
		randomSIN: function() {
			return `${this.rand3Digits()} ${this.rand3Digits()} ${this.rand3Digits()}`
		}
	}
}
</script>