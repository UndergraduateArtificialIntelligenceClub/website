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
		|	We meet bi-weekly Friday from 3:30-5:00pm at the Student Innovation Centre, between
		|	CCIS and the Biological Sciences building.
		|	We also have a reading group that meets from 1-2pm every Monday in the Student Innovation Centre.
		|	We're currently working through the Deep Learning textbook by Ian Goodfellow, Yoshua Bengio, and Aaron Courville.
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