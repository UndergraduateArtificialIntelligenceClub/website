export default {
	mode: 'spa',
	srcDir: 'src/',
	target: 'static',
	head: {
		titleTemplate: ' %s | Undergraduate Artificial Intelligence Society',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},
	styleResources: {
		sass: ['~/assets/main.sass']
	},
	plugins: [
	],
	components: true,
	buildModules: [
		'@nuxt/typescript-build',
		['@nuxtjs/imagemin', { enableInDev: true }],
		'@nuxtjs/dotenv',
		['@aceforth/nuxt-optimized-images', {
			optimizeImages: true,
			optimizeImagesInDev: true
		}]
	],
	modules: [
		'nuxt-fontawesome',
		'@nuxtjs/markdownit',
		'@nuxt/content'
	],
	build: {
	},
	fontawesome: {
		component: 'fa',
		imports: [
			{
				set: '@fortawesome/free-solid-svg-icons',
				icons: ['fas']
			},
			{
				set: '@fortawesome/free-brands-svg-icons',
				icons: ['fab']
			}
		]
	},
	markdownit: {
		linkify: true,
		breaks: true,
		injected: true
	},
	content: {
		dir: 'assets/data'
	},
	publicRuntimeConfig: {
		calendar: process.env.google_calendar
	}
}
