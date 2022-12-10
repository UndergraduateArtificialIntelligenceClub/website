<template lang="pug">
div
	section.section
		h1.title.is-1 Fall 2022 Hex Tournament
		h2.subtitle Important Links
		.content
			ul
				li(v-for='main_link in hex_tournament.main_links')
					a.is-block(:href='main_link.link') {{ main_link.title }}
		h2.subtitle General Information
		.content
			p
			|	What is a Computer Hex Bot? Any computer program that is designed to
			|	play the board game Hex on the computer. Participants (individually
			|	or in teams) will build a computer program capable of playing Hex,
			|	subject to some constraints below. This bot can use any method of
			|	playing you want. It can perform search, use big neural networks, or
			|	incorporate human-determined rules. Bots must communicate with the
			|	terminal via a pre-defined set of inputs & outputs.
			p
				strong
					i.has-text-primary We have access to GPUs!
			img(:src='require(`@/assets/images/poster.png`)')
		h2.subtitle Runtime Restrictions
		.content
			ul
				li Single Threaded, able to run on a lab machine.
					ul
						li Excessive memory usage will result in termination of program & a loss
				li Returns ‘best move’ in 1.5 minutes or less.
				li Make sure you test on the lab machines!
		h2.subtitle Development restrictions
		.content
			ul
				li Train using 100 AWS servers? Go for it!
				li Build + Train a GPT clone? Why not!
				li Highly optimized MCTS written in C? Good luck!
				li RESTRICTION: Use of externally produced models is not allowed.
					ul
						li External layers in a model are okay, but must be cited.
	section.section
		h2.title.is-2 Sponsored by
		.content
			p Thank you to our sponsors for supporting the Hex Tournament!
		h3.title.is-3.has-text-warning Gold Sponsors
		#sponors
			img(:src='require(`@/assets/images/sponsors/${sponsor.logo}`)' :alt='sponsor.name' v-for='sponsor in sponsors.gold')
	section.section
		h2.title.is-2 Tiers
		p
		|	There are two tiers. The first one is for 1st and 2nd years, and the
		|	second one is for 3rd+ years. This is to help eliminate the
		|	advantage upper-year students have in taking higher-level courses.
	section.section
		h2.title.is-2 Prizes
		.content
			p These are the prizes for each tier.
			ul
				li(v-for='prize in hex_tournament.prizes')
					strong {{ prize.title }}
					p.has-text-success {{ prize.desc }}
</template>

<style lang="sass" scoped>
// images that contain ratio with height of 100px and shadow white
#sponsors img
	height: 100px
	width: auto
	margin-block: 1rem
</style>

<script>
export default {
	head: {
		title: 'Hex Tournament'
	},
	async asyncData({ $content, params }) {
		const resources = await $content(params.slug || 'resources').fetch()
		const sponsors = await $content('sponsors').fetch()
		console.log(sponsors)
		return {
			hex_tournament: resources.hex_tournament,
			sponsors: sponsors
		}
	}
}
</script>
