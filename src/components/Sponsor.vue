<template lang="pug">
div
	img(:src='`/images/sponsors/${sponsor.logo}`' :alt='sponsor.name')
	a.is-size-3(:href='sponsor.link', target='_blank', rel='noopener noreferrer')
		span.icon
			i(:class='openIcon')
		span.ml-4 {{ sponsor.name }}
</template>

<style lang="sass" scoped>
a
	display: flex
	height: fit-content
	width: fit-content
	align-items: center

img
	height: 100px
	width: 100%
	object-fit: contain
	object-position: left
	margin-block: 1rem
</style>

<script lang='ts'>
export default {
	name: 'Sponsor',
	props: ['sponsor'],
	data() {
		return {
			openIcon: 'fa-solid fa-link'
		}
	}
}
</script>
