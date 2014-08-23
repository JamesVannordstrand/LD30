var screen = {
  tileW: 20,
  tileH: 15,
  pixW:  640,
  pixH:  480
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,75);

//draw horizontal lines
for(i = 0; i < screen.tileH; ++i) {
  ctx.beginPath();
  ctx.moveTo(0, i * screen.pixH);
  ctx.lineTo(screen.tileW * screen.pixW, i * screen.pixH)
  ctx.stroke();
}
//draw vertical lines
for(i = 0; i < screen.tileH; ++i) {
  ctx.beginPath();
  ctx.moveTo(i * screen.pixW, 0);
  ctx.lineTo(i * screen.pixW, screen.tileH * screen.pixH);
  ctx.stroke();
}
