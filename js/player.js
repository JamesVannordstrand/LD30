function player(name, computer) {
    this.name = name;
    this.computer = computer;
    this.homeWorldResources = 0;
    this.frontierResources = 0;
    this.homeWorldUnits = [];
    this.frontierUnits = [];
}

player.prototype.drawPlayer = function(context) {
  var message;
  
  message = this.name + "       Resources - " 
    + this.homeWorldResources +
    "                         Resources - " 
    + this.frontierResources;

  context.fillStyle = "red";
  context.font = "20px Georgia";
  return context.fillText(message, 240, 480);
}   