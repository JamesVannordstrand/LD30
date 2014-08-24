//the base game class
function Game() {
  //get the canvas and canvs 2D context 
  this.canvas = document.getElementById("myCanvas");
  this.context = this.canvas.getContext("2d");

  this.fps = 60;
  this.running = true;
  this.map = new Map();
  this.cursor = new Cursor(this.canvas, this.onClick);
}

Game.prototype.onClick = function() {
  alert("CLicked");
};

//initialize the game
Game.prototype.start = function() {
  this._intervalId = setInterval(Game.loop, 1000 / game.fps);
 
  //TODO: test unit
  this.lance = new Unit("lance", "#666000", {x:300, y:300, w: 32, h:32}, 100);

  this.playerOne = new Player("James");
  this.cursor.listen(this.canvas);
}

//draw the game
Game.prototype.draw = function() {
  this.context.fillStyle = "#FF0000";
  this.context.fillRect(0,0,150,75);

  //draw the map
  this.map.drawGrid(this.context);

  //TODO: test draw
  this.lance.draw(this.context, true);
  
  //draw the player
  this.playerOne.drawPlayer(this.context);
};

//update the game
Game.prototype.update = function() {
  this.cursor.checkDirty()
};

//the main game loop - run on an interval
Game.prototype.loop = function() {
  this.update();
  this.draw();
}

//create the game and begin it
var game = new Game();
game.start();
game.draw();

