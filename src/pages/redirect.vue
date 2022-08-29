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
			link: "https://forms.gle/BkdkzrS5HQzHXWqWA"
		}
	},
	fetch({ params, redirect }) {
		redirect(301, this.data().link)
	}
}
</script>
