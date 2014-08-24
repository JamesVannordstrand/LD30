//the map class
function Map() {
  this.tileW = 20;
  this.tileH = 15;
  this.pixW = 320;
  this.pixH = 480;
}

//draws a grid representing the tile layout of the this
Map.prototype.drawGrid = function(ctx) {
  //draw horizontal lines
  for(i = 0; i < this.pixH / this.tileH; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * this.tileH);
    ctx.lineTo(this.pixW, i * this.tileH)
    ctx.stroke();
  }
  //draw vertical lines
  for(i = 0; i < this.pixW / this.tileW; i++) {
    ctx.beginPath();
    ctx.moveTo(i * this.tileW, 0);
    ctx.lineTo(i * this.tileW, this.pixH);
    ctx.stroke();
  }
}