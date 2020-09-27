const images = []
for (let i = 0; i <= 11; i++) {
	let img = require(`./${i}.jpg?resize&size=800`)
	images.push(img)
}

export default function load() {
	return images
}