<template lang="pug">
label.label {{ text }}
	span.has-text-danger(v-if='required')=' *'
</template>

<script >
export default {
	name: 'Lbl',
	props: [
		'text',
		'required'
	]
}
</script>