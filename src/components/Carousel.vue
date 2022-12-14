<template lang="pug">
section.section
		h2.title Event Images
		p Some images from our past events!
		Flicking(:options='main', :plugins="plugins")
			img.panel(:src='image', v-for='(image, index) in images', :key='index')
</template>

<style lang="sass">
@import url("@egjs/vue3-flicking/dist/flicking.css")

.panel
	object-fit: contain
	box-shadow: none
</style>

<script lang='ts'>
import Flicking from '@egjs/vue3-flicking'
import { AutoPlay } from '@egjs/flicking-plugins'

const images = [...Array(13).keys()]
	.map((i) => `/images/events/${i}.jpg`)

export default {
	name: 'Carousel',
	components: {
		Flicking
	},
	data() {
		return {
			main: {
				align: 'prev',
				circular: true,
			},
			plugins: [new AutoPlay()],
			images
		}
	}
}
</script>
