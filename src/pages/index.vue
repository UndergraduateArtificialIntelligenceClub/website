<template lang="pug">
div
	section.section
		h2.title Basic Information
		p
		|	The University of Alberta Undergraduate Artificial Intelligence Society
		|	is a group of students interested in discussing, learning about, and
		|	applying Artificial Intelligence techniques of all kinds.
		|	We welcome all students regardless of field of study or AI knowledge.
		|	You can check 
		a(href='/constitution.pdf') our constitution
		|.
	Carousel
	Calendar
	section.section
		h2.title Meeting Times
		p
		|	This year, we will be meeting on
		a(href="https://gather.town/uYObQTFYMhktnM7j/uais")=" Gather "
		|	between 2-6pm. Come join us anytime within that timeframe.
</template>

<style lang="sass">
.fc a
	color: #fff

.fc .fc-daygrid-day.fc-day-today
	background-color: #fff3
</style>

<script >
import Carousel from '~/components/Carousel.vue'
import Calendar from '~/components/Calendar.vue'

export default {
	head: {
		title: 'Home'
	},
	components: {
		Carousel,
		Calendar
	}
}
</script>
