//the cursor class
function Cursor(canvas, onClick) {
  this.canvas = canvas;
  this.onClick = onClick;
  this.mousePos = {x: 0, y: 0};
}

//get the mouse position on the given canvas
Cursor.prototype.getMousePos = function(x, y) {
  var rect = this.canvas.getBoundingClientRect();
  return new Vec2(x - rect.left, y - rect.top);
};

//have the cursor listen for events on the given canvas
//upon an event occuring, this cursor's 'onClick' function is called (onClick(evt))
Cursor.prototype.listen = function(c) {
  c.addEventListener('click', this.onClick, false);
};

