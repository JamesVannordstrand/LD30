//the screen variable
var screen = {
  tileW: 20,
  tileH: 15,
  pixW:  640,
  pixH:  480
}

//draws a grid representing the tile layout of the screen
function drawGrid() {
  //draw horizontal lines
  for(i = 0; i < screen.pixH / screen.tileH; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i * screen.tileH);
    ctx.lineTo(screen.pixW, i * screen.tileH)
    ctx.stroke();
  }
  //draw vertical lines
  for(i = 0; i < screen.pixW / screen.tileW; i++) {
    ctx.beginPath();
    ctx.moveTo(i * screen.tileW, 0);
    ctx.lineTo(i * screen.tileW, screen.pixH);
    ctx.stroke();
  }
}

///////////////////////////////////////////////////////////////////////////////
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);
drawGrid();

var lance = new unit("lance", "#666000", {x:300, y:300, w: 32, h:32});
drawUnit(ctx, lance, true);
