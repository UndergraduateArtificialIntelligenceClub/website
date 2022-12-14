<template lang="pug">
section.section
	h2.title Upcoming Events
	p
	|	Check out our 
	a(href='https://uais.eventbrite.com/') EventBrite
	|	page to stay up to date with upcoming events.
	FullCalendar(:options='options')
</template>

<style lang="sass">
.fc .fc-list-sticky .fc-list-day > *
	background: unset

.fc .fc-list-event:hover td
	background-color: #f5f5f528
</style>

<script lang='ts'>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import googlePlugin from '@fullcalendar/google-calendar'

export default {
	name: 'Calendar',
	components: {
		FullCalendar
	},
	data() {
		return {
			options: {
				plugins: [
					dayGridPlugin,
					listPlugin,
					googlePlugin
				],
				googleCalendarApiKey: import.meta.env.PUBLIC_GOOGLE_CALENDAR,
				initialView: 'dayGridMonth',
				headerToolbar: {
					left: 'prev,today,next',
					center: 'title',
					right: 'dayGridMonth,listMonth'
				},
				eventSources: [{
					googleCalendarId: 'ualberta.ca_jllnjo7p3k6pedrio4ftfah7qg@group.calendar.google.com',
				}],
				eventClick: this.handleEventClick
			}
		}
	},
	methods: {
		handleEventClick: function(arg: { event: { url: string | URL | undefined; }; jsEvent: { preventDefault: () => void; }; }) {
			window.open(arg.event.url, '_blank')
			arg.jsEvent.preventDefault()
		}
	}
}
</script>
