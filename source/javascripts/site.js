// This is where it all goes :)
console.log('%cif ur reading this, hi ;)', 'color: lightseagreen; font-size: 24px;');


function nextImage() {
    let imgDirSize = 7;
    let currImg = document.querySelector('.carousel > img');
    let loc = currImg.src.split('/');
    let index = parseInt(loc[loc.length - 1], 10);
    loc[loc.length - 1] = (index + 1) % imgDirSize + '.jpg';
    currImg.src = loc.join('/');
}

setInterval(() => {nextImage()}, 3000);