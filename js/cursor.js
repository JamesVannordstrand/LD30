function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

canvas.addEventListener('click', function(evt) {
  var mousePosition = getMousePos(canvas, evt);
}, false);