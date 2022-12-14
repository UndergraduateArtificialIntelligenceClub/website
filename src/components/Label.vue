<template lang="pug">
label.label {{ text }}
	span.has-text-danger(v-if='required')=' *'
</template>

<script lang='ts'>
export default {
	name: 'Lbl',
	props: [
		'text',
		'required'
	]
}
</script>
