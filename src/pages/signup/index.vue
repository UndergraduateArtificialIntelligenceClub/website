<template lang="pug">
div
	section.section
		h1.title Join the Undergraduate Artificial Intelligence Society!
		.columns
			.column
				h1.title.is-4 Regular Member
				p
					| Regular Members must be Undergraduate students at the University of Alberta.
				br
				a.button.is-info(href='/signup/regular') Join the UAIS
			.column
				h1.title.is-4 Associate Member
				p
					| Associate Members are any member who is not a currently enrolled
					| undergraduate student at the University of Alberta.
				br
				a.button.is-info(href='/signup/associate') Join the UAIS
</template>

<script lang="ts">
export default {
	head: {
		title: 'Signup'
	}
}
</script>