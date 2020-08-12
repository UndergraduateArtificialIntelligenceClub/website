<template lang="pug">
div
	section.section
		h1.title UAIS Event Attendance
		p
			| If you are a registered member then please use your email address associated
			| to your membership, otherwise please sign-in with any email address you like.
			| We won't send you newsletters but might send material from the event.
		form(
			action='https://api.uais.dev/attendance'
			method='post'
		)
			br
			.field.has-addons
				.control.has-icons-left
					input.input(
						type='email'
						name='email'
						placeholder='email'
						required='true'
					)
					span.icon.is-left
						fa(:icon='["fas", "envelope"]')
				.control
					input.button.is-info(
						type='submit'
						value='Sign In'
					)
</template>

<style lang="sass" scoped>
.field
	justfy-content: center
</style>

<script >
export default {
	head: {
		title: 'Event Attendees'
	}
}
</script>