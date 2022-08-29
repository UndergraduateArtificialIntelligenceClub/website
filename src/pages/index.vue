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
		|	We hold meetings every week on
		strong Fridays @ 4:00 PM
		| in the Student Innovation Center (SIC), starting Steptember 9th 2022.
		| It's in the connection between CCIS and Biological Sciences. Please refer
		| to the calendar below to see what we have planned for that day.
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
