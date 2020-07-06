<template lang="pug">
div
	Navbar
	Nuxt
	Footer
</template>

<style lang="sass">
@import '~assets/main.sass'
</style>

<script lang="ts">
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'

export default {
	components: {
		Navbar,
		Footer
	}
}
</script>