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
	section.section
		h2.title Meeting Times
		p
		|	We're still assessing how we'll hold meetings for this upcoming semester.
		|	If we can gather safely in person and the SIC is open, we'll hold
		|	meetings there once again. Otherwise, we'll hold meetings online likely
		|	on our discord.
	Carousel
	Calendar
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
