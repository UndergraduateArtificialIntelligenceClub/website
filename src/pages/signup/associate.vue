<template lang="pug">
div
	section.section
		h1.title UAIS Event Attendance
		p
			| Please use your @ualberta email address for registration as a Regular Member of the Undergraduate Artifical Intelligence Society
		form(
			action='https://api.uais.dev/attendance'
			method='post'
		)
			br
			Lbl(
				text='First Name'
				:required='true'
			)
			.field.has-addons
				.control.has-icons-left
					input.input(
						type='text'
						name='firstname'
						placeholder='First Name'
						required='true'
					)
					span.icon.is-left
						fa(:icon='["fas", "user"]')
			Lbl(
				text='Last Name'
				:required='true'
			)
			.field.has-addons
				.control.has-icons-left
					input.input(
						type='text'
						name='lastname'
						placeholder='Last Name'
						required='true'
					)
					span.icon.is-left
						fa(:icon='["fas", "user"]')
			Lbl(
				text='Email Name'
				:required='true'
			)
			.field.has-addons
				.control.has-icons-left
					input.input(
						type='email'
						name='email'
						placeholder='ccid@ualbert.ca'
						required='true'
					)
					span.icon.is-left
						fa(:icon='["fas", "envelope"]')
			.field
				Lbl(text='Organization Affiliation')
				.control
					label.radio
						input(
							type='radio'
							name='org'
							vlaue='university'
						)
						|	University
					label.radio
						input(
							type='radio'
							name='org'
							vlaue='company'
						)
						|	Company
					label.radio
						input(
							type='radio'
							name='org'
							vlaue='program'
						)
						|	Other
			Lbl(text='Name of Organization')
			.field.has-addons
				.control
					input.input(
						type='text'
						name='orgname'
						placeholder='Organization Name'
					)
			Lbl(text='Position at Organization')
			.field.has-addons
				.control
					input.input(
						type='text'
						name='position'
						placeholder='Position Title'
					)
			.field
				.control
					input.button.is-info(
						type='submit'
						value='Submit'
					)
</template>

<style lang="sass" scoped>
.radio
	display: block
	width: max-content
	& + &
		margin: 0
</style>

<script lang="ts">
import Lbl from '~/components/Label.vue'

export default {
	head: {
		title: 'Associate Member Signup'
	},
	components: {
		Lbl
	}
}
</script>