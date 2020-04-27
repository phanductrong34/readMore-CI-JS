//ANIMATION 
var bm = document.getElementsByClassName('bm');
Array.from(bm).forEach(el =>{
    var animation = bodymovin.loadAnimation({
        container : el,
        path: `./lottie/${el.dataset.file}/${el.dataset.file}.json`,
        renderer: 'svg',
        loop: true,
        autoplay: true
    }) 
})