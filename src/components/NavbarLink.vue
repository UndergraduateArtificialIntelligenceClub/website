<template lang="pug">
a.navbar-item(
	:target='link.target',
	:href='link.link'
)
	span.icon.has-text-info
		fa(:icon='link.icon')
	span {{ link.text }}
</template>

<script lang="ts">
export default {
	name: 'NavbarLink',
	props: ['link']
}
</script>