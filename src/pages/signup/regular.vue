<template lang="pug">
div
	section.section
		h1.title UAIS Membership Signup
		p
			| Please use your
			span.has-text-info=' @ualberta '
			| email address for registration as a Regular Member of the Undergraduate Artifical Intelligence Society
		form(
			action='https://api.uais.dev/signup/mysql_stuff'
			method='post'
		)
			input(
				type='hidden'
				name='membership'
				value='regular'
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
				Lbl(text='What program are you in?')
				.control
					label.radio
						input(
							type='radio'
							name='program'
							value='cs'
						)
						|	Computer Science
					label.radio
						input(
							type='radio'
							name='program'
							value='ce'
						)
						|	Computer Engineering
					label.radio
						input(
							type='radio'
							name='program'
							value='math'
						)
						|	Mathematics
					label.radio
						input(
							type='radio'
							name='program'
							value='stat'
						)
						|	Statistics
					label.radio
						input(
							type='radio'
							name='program'
							value='psych'
						)
						|	Psychology
					label.radio
						input(
							type='radio'
							name='program'
							value='other'
						)
						|	Other
			.field
				Lbl(text='What year are you in?')
				.control.has-icons-left
					.select
						select(name='year')
							option(
								value=''
								selected: true
							) Choose an option
							option(value='0') 0
							option(value='1') 1
							option(value='2') 2
							option(value='3') 3
							option(value='4') 4
							option(value='5+') 5+
					.icon.is-left
						fa(:icon='["fas", "calendar-check"]')
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

<script >
import Lbl from '~/components/Label.vue'

export default {
	head: {
		title: 'Regular Member Signup'
	},
	components: {
		Lbl
	}
}
</script>