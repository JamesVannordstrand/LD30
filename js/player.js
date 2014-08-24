function Player(name) {
    this.name = name;
    this.homeWorldResources = 0;
    this.frontierResources = 0;
    this.homeWorldUnits = [];
    this.frontierUnits = [];
}

//draw player stats
Player.prototype.drawPlayerHomeWorld = function(context) {
  var message = "Resources - " 
    + this.homeWorldResources;
  
  context.fillStyle = "black";
  context.font = "20px Georgia";
  return context.fillText(message, 100, 480);
}

Player.prototype.drawPlayerFrontier = function(context) {
  var message = "Resources - " 
    + this.frontierResources;
  
  context.fillStyle = "black";
  context.font = "20px Georgia";
  return context.fillText(message, 100, 480);
}

//add a specific unit to player
Player.prototype.addUnit = function(planet, unit){ 
  if(planet == "frontier"){
    this.frontierUnits.push(unit);
  }else{
    this.homeWorldUnits.push(unit);
  }
}

//goes through all players units to check health and see if needs removed
Player.prototype.checkHealth = function(){ 
  for(var i = 0; i < this.frontierUnits.length; i++){
    if(this.frontierUnits[i].hp <= 0){
      var index = this.frontierUnits.indexOf(frontierUnits[i]);
      this.frontierUnits.splice(index, 1);
    }
  }

  for(var i = 0; i < this.homeWorldUnits.length; i++){
    if(this.homeWorldUnits[i].hp <= 0){
      var index = this.homeWorldUnits.indexOf(homeWorldUnits[i]);
      this.homeWorldUnits.splice(index, 1);
    } 
  }
}

//Add resources to player
Player.prototype.addResources = function(planet, amount){
  if(planet == "frontier"){
    this.frontierResources += amount;
  }else{
    this.homeWorldResources += amount;
  }  
} 

//draws all the players units 
Player.prototype.drawHomeWorldUnits = function(ctx){
  for(var i = 0; i < this.homeWorldUnits.length; i++){
    this.homeWorldUnits[i].drawUnit(ctx, true);
  }
}

Player.prototype.drawFrontierUnits = function(ctx){
  for(var i = 0; i < this.frontierUnits.length; i++){
    this.frontierUnits[i].drawUnit(ctx, true);
  }
}

//takes resources from one planet to the other 
transferResources = function(from, to, amount){
  if(from.frontierResources >= amount){
    from.addResources(from, -amount);
    to.addResources(to, amount);
  }
}