function Star()
{
let starx = mainCanvas.width;
let stary = rand(mainCanvas.height - mainCanvas.height/2.5);
let dx = -9;

this.drawStar = function()  
    {
        ctx.beginPath();
        ctx.arc(starx, stary, 10, 0, Math.PI*2);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.closePath();
    }

this.moveStar = function()  
    {
        starx += dx;
    }
}
