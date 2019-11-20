var starx = w;
var stary = rand(h - h/2.5);
var dy = -2;

function drawStar() {
    ctx.beginPath();
    ctx.arc(starx, stary, 10, 0, Math.PI*2);
    ctx.fillStyle = "gold";
    ctx.fill();
    ctx.closePath();
}

function moveStar() {
    ctx.clearRect(0, 0, w, (h - h/2.5));
    draw();
    stary += dy;
}

setInterval(moveStar, 10);
