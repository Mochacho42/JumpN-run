function stars()
{
    var starx = mainCanvas.width;
    var stary = rand(mainCanvas.height - mainCanvas.height/2.5);
    var dy = -2;

    function drawStar() {
        ctx.beginPath();
        ctx.arc(starx, stary, 10, 0, Math.PI*2);
        ctx.fillStyle = "gold";
        ctx.fill();
        ctx.closePath();
    }

    function moveStar() {
        drawStar();
        stary += dy;
    }
}
