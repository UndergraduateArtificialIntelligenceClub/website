<template lang="pug">
section.section
	| If you aren't redirected, 
	a(:href='link') click here
</template>

<script lang="ts">
export default {
	head: {
		title: 'Redirecting'
	},
	data() {
		return {
			link: "https://alberta.campuslabs.ca/engage/organization/albertaundergradai"
		}
	},
	fetch({ params, redirect }) {
		redirect(301, this.data().link)
	}
}
</script>