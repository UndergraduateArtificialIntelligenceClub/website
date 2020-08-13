<template lang="pug">
figure.image.is-128x128
	img.is-rounded(:src='require(`@/assets/images/headshots/${imgFile}.jpg`)')
</template>

<script >
export default {
	name: 'Headshot',
	props: ['imgFile']
}
</script>