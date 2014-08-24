//the map class
function Map() {
  this.tileW = 20;
  this.tileH = 15;
  this.pixW = 640;
  this.pixH = 480;
}

//draws a grid representing the tile layout of the this
Map.prototype.drawGrid = function(c) {
  //draw horizontal lines
  for(i = 0; i < this.pixH / this.tileH; i++) {
    c.beginPath();
    c.moveTo(0, i * this.tileH);
    c.lineTo(this.pixW, i * this.tileH)
    c.stroke();
  }
  //draw vertical lines
  for(i = 0; i < this.pixW / this.tileW; i++) {
    c.beginPath();
    c.moveTo(i * this.tileW, 0);
    c.lineTo(i * this.tileW, this.pixH);
    c.stroke();
  }
}

