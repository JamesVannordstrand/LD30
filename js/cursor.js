//the cursor class
function Cursor(canvas, onClick) {
  this.canvas = canvas;
  this.onClick = onClick;
  this.mousePos = new Vec2(0,0);
}

//get the mouse position on the given canvas
Cursor.prototype.getMousePos = function(c, evt) {
  var rect = c.getBoundingClientRect();
  return new Vec2(evt.clientX - rect.left, evt.clientY - rect.top);
};

//have the cursor listen for events on the given canvas
//upon an event occuring, this cursor's 'onClick' function is called (onClick(evt))
Cursor.prototype.listen = function(c) {
  c.addEventListener('click', this.onClick, false);
};

