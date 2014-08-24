//the base game class
function Game() {
  this.fps = 60;
  this.running = true;
  this.map = new Map();
}

//initialize the game
Game.prototype.start = function() {
  this._intervalId = setInterval(Game.loop, 1000 / game.fps);

  //TODO: test unit
  this.lance = new Unit("lance", "#666000", {x:300, y:300, w: 32, h:32}, 100);
  this.playerOne = new Player("James");
}

//draw the game
Game.prototype.draw = function() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0,0,150,75);

  //draw the map
  this.map.drawGrid(ctx);

  //TODO: test draw
  this.lance.draw(ctx, true);
  
  //draw the player
  this.playerOne.drawPlayer(ctx);
};

//update the game
Game.prototype.update = function() {
  
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

