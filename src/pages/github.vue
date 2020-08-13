<template lang="pug">
section.section
	| If you aren't redirected, 
	a(:href='link') click here
</template>

<script >
export default {
	head: {
		title: 'Redirecting'
	},
	data() {
		return {
			link: "https://github.com/UndergraduateArtificialIntelligenceClub/"
		}
	},
	fetch({ params, redirect }) {
		redirect(301, this.data().link)
	}
}
</script>