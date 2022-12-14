<template lang="pug">
figure.image.is-128x128
	img.is-rounded(:src='`/images/headshots/` + imgFile + `.jpg?format=webp`', :alt='alt', loading='lazy')
</template>

<style lang="sass" scoped>
img
	width: 100%
	height: 100%
	object-fit: cover
</style>

<script lang="ts" >
export default {
	name: 'Headshot',
	props: ['imgFile', 'alt']
}
</script>
