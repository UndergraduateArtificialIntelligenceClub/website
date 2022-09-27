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
			link: "https://docs.google.com/forms/d/e/1FAIpQLSfAz_H8DCimG7Vb-ciArqd3QkKVsVH-k4v_k_CV8FHkeTNZrg/viewform"
		}
	},
	fetch({ params, redirect }) {
		redirect(301, this.data().link)
	}
}
</script>
