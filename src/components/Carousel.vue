<template lang="pug">
section.section
		h2.title Event Images
		p Some images from our past events!
		agile(:options='main')
			.slide(v-for='(image, index) in images', :key='index')
				img(:src='image')
			template(slot='prevButton')
				fa(:icon='["fas", "chevron-left"]')
			template(slot='nextButton')
				fa(:icon='["fas", "chevron-right"]')
</template>

<style lang="sass">
.agile
	width: 80%
	margin: auto

	&__actions
		position: absolute
		width: 100%
		top: 0
		height: 100%

	&__nav-button
		background: transparent
		border: none
		color: #fff
		cursor: pointer
		font-size: 2rem
		transition-duration: 300ms
		filter: drop-shadow(0 0 .2rem #000)

		&:hover
			color: #ccc
</style>

<script >
import { VueAgile } from 'vue-agile'
import load from '~/assets/images/events'

export default {
	name: 'Carousel',
	components: {
		agile: VueAgile
	},
	data() {
		return {
			main: {
				dots: false,
				slidesToShow: 1,
				autoplay: true,
				infinite: true
			},
			images: load()
		}
	}
}
</script>