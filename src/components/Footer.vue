<template lang="pug">
.footer
	.columns
		.column.is-4.is-offset-2
			h5.is-size-5 Site Links
			a.is-block(
				v-for='siteLink in siteLinks'
				:href='siteLink.link'
				v-if='siteLink.link[0] === "/"'
			) {{ siteLink.text }}
		.column.is-4.is-offset-2
			h5.is-size-5 Social Media
			a.is-block(
				v-for='social in socials'
				:href='social.link'
			)
				span.icon.has-text-info
					fa(:icon='social.icon')
				span {{ social.text }}
</template>

<style lang="sass" scoped>
h5
	margin-bottom: .25em
</style>

<script lang="ts">
import links from '~/assets/data/links.json'

export default {
	name: 'Footer',
	data() {
		return {
			siteLinks: [
				...links.nav,
				{
					text: 'Home',
					link: '/'
				}
			].reverse(),
			socials: links.socials
		}
	}
}
</script>