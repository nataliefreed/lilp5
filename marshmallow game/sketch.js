var button;

var gameState = "start";
var numMarshmallows = 0;
var gameText = "";

function setup() {
  createCanvas(400, 300);
  button = createButton("Yes");
  button.position(width/2-25, height + 50);
  
  button.mousePressed(buttonAction);
  
  gameText = "Would you like to play the marshmallow game?"
}

function draw() {
  background(0);
  
  displayText(gameText);
  displayMarshmallows(numMarshmallows);
}

function displayText(t) {
  textAlign(CENTER);
  fill(255);
  text(t, width/2, height/1.5);
}

function displayMarshmallows(num) {
  push();
  rectMode(CENTER);
  translate(width/2-floor(num/2)*(50), height/3);
  for(var i=0;i<num;i++) {
    rect(0, 0, 40, 50, 5);
    translate(50, 0);
  }
  pop();
}

function buttonAction() {
  if(gameState === "start") { //pressed Yes
      gameState = "starting";
      gameText = "Ok, let's begin.";
      setTimeout('changeState("firstMarshmallow")', 2000);
      button.hide();
  }
  else if(gameState === "firstMarshmallow") { //Pressed Eat It
    numMarshmallows = 0;
    gameText = "I hope it was worth it."
    gameState = "lost";
    button.hide();
  }
}

function changeState(state) {
  if(gameState != "lost") {
    gameState = state;
  }
  
  if(gameState === "firstMarshmallow") {
    numMarshmallows = 1;
    gameText = "Here is a marshmallow for you.\n\nIf you can wait 1 minute before eating it,\n you can have 3 marshmallows.";
    button.show();
    button.html("Eat it");
    setTimeout('changeState("won")', 60000);
  }
  else if(gameState === "won") {
    numMarshmallows = 3;
    gameText = "Here are some more marshmallows.\n\n You will go far in life.";
    button.hide();
  }
}
