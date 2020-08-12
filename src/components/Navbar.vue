<template lang="pug">
nav.navbar
	.navbar-brand
		a(href='/').navbar-item
			img.image.is-48x48(src='~/assets/images/logo.svg', width='56')
			h3.is-size-3 UAIS
		a.navbar-burger.burger(
			role='button'
			aria-label: 'menu'
			aria-expanded='false'
			data-target='navbarMenu'
			@click='toggle()'
			:class='{"is-active": active}'
		)
			span(v-for='_ in 3', aria-hidden='true')
	.navbar-menu#navbarMenu(:class='{"is-active": active}')
		.navbar-end
			NavbarLink(
				v-for='link in links'
				:key='link.text'
				:link='link'
			)
</template>

<style lang="sass" scoped>
.navbar-item img
	max-height: unset
</style>

<script >
import NavbarLink from './NavbarLink.vue'
import links from '~/assets/data/links.json'

export default {
	name: 'Navbar',
	components: {
		NavbarLink
	},
	methods: {
		toggle() {
			this.active = !this.active
		}
	},
	data() {
		return {
			active: false,
			links: links.nav
		}
	}
}
</script>