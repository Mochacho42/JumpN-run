let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
let image = document.getElementById('sunset');
// var x = canvas.width / 2;
// var y = canvas.height / 2;

image.addEventListener('load', function(){
    ctx.drawImage(image, 50, 100, 150, 100);
}, false);
