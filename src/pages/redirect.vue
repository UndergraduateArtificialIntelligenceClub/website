<template lang="pug">
section.section
	| If you aren't redirected, 
	a(href='https://uais.eventbrite.com/') click here
</template>

<script lang="ts">
export default {
	head: {
		title: 'Redirecting'
	},
	methods: {
		redirect: function() {
			window.location = "https://uais.eventbrite.com/"
		}
	},
	mounted: function() {
		this.redirect()
	}
}
</script>