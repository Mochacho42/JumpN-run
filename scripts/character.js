let images = [];
let index = 0;
let elapsed = 0;
const speed = 25;

for (w = 0 ; w < 5 ; w++) {
  images[w] = new Image();
  images[w].src = "images/pika" + w + ".png";
}

function Character() {
  this.charHeight = 50;
  this.charWidth = 25;
  this.charX = 100;
  this.charY = 350;

  this.phy = new Physics(53, 51);
  this.phy.setForce(0, 4);

  this.draw = function() {

    this.phy.applyForce();

    if (elapsed++ % speed == 0) {
      index = (index + 1) % images.length;
    }

    ctx.beginPath();
    ctx.drawImage(images[index], this.phy.x, this.phy.y, images[index].width/4, images[index].height/4);    
    ctx.fill();
    ctx.closePath();
  }

  this.jump = function() {
    str_counter++;
    y += 10;
  }
}
