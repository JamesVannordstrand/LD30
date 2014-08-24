//the base game class
function Game() {
  //get the canvas and canvas 2D context 
  this.homeWorldCanvas = document.getElementById("homeWorldCanvas");
  this.homeWorldContext = this.homeWorldCanvas.getContext("2d");
  this.homeWorldCursor = new Cursor(this.homeWorldCanvas, this.onClick);


  this.frontierCanvas = document.getElementById("frontierCanvas");
  this.frontierContext = this.frontierCanvas.getContext("2d");
  this.frontierCursor = new Cursor(this.frontierCanvas, this.onClick);

  this.fps = 60;
  this.running = true;
  this.map = new Map();
  this.player = new Player("PLAYER");
}

Game.prototype.onClick = function() {
  alert("Clicked");
};

//initialize the game
Game.prototype.start = function() {
  //setup an interval for the game loop to be called on TODO: untested
  this._intervalId = setInterval(Game.loop, 1000 / game.fps);
  //tell the cursor to listen for events on this canvas 
  this.homeWorldCursor.listen(this.homeWorldCanvas);
  this.frontierCursor.listen(this.frontierCanvas);
 
  //TODO: test unit
  // var lance = new Unit("lance", "#666000", {x:300, y:300, w: 32, h:32}, 100);
  // var blake = new Unit("blake", "red", {x:300, y:300, w: 32, h:32}, 100);
  var bryce = new PigUnit("homeWorld");
  var james = new ChickenUnit("frontier");
  var badboy = new EnemyUnit();
  // this.player.addUnit("frontier", lance);
  // this.player.addUnit("frontier", blake);
  // this.player.addUnit("frontier", bryce);
  this.player.addUnit("frontier", james);
  this.player.addUnit("homeWorld", bryce);
  this.player.addEnemyUnit("homeWorld", badboy);
}

//draw the game
Game.prototype.draw = function() {

  //draw the map
  this.map.drawGrid(this.homeWorldContext);
  this.map.drawGrid(this.frontierContext);

  //draw the player's units
  this.player.drawHomeWorldUnits(this.homeWorldContext);
  this.player.drawFrontierUnits(this.frontierContext);
 
  //draw the player
  this.player.drawPlayerHomeWorld(this.homeWorldContext);
  this.player.drawPlayerFrontier(this.frontierContext);
};

//update the game
Game.prototype.update = function() {
  this.homeWorldCursor.checkDirty();
  this.frontierCursor.checkDirty();
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

