var squareling;
var tblink = 0;
var tbounce = 0;
var bounceOffset = 0;
var mood = "happy";

var sleepyIndex = 0;
var sleepyRate = 0.05;
var sleepyPerFrame = sleepyRate;

var numSleepyImgs = 4;
var happyImg, blinkImg, angryImg, sleepyImg;
var sleepyImgs = [];

function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);
  happyImg = loadImage("images/happy.png");
  blinkImg = loadImage("images/blinkhappy.png");
  angryImg = loadImage("images/angry.png");
  for (var i = 0; i < numSleepyImgs; i++) {
    sleepyImgs.push(loadImage("images/sleepy" + i + ".png"));
  }
}

function draw() {
  background(255);
  if (mood == "happy") {
    if (shouldBlink()) {
      image(blinkImg, width/2, height/2 - bounceOffset);
    } else {
      image(happyImg, width/2, height/2 - bounceOffset);
    }
  } else if (mood == "tired") {
    image(sleepyImgs[int(sleepyIndex)], width/2, height/2);
    sleepyIndex += sleepyPerFrame;
    if (sleepyIndex > (numSleepyImgs - sleepyRate)) {
      sleepyPerFrame = sleepyRate * -1.0;
    } else if (sleepyIndex < 0) {
      sleepyPerFrame = sleepyRate;
    }
  } else if (mood == "angry") {
    image(angryImg, width/2 + random(-2, 2), height/2 + random(-1, 1));
  }
}

function shouldBlink() {
  var should = (noise(tblink) > 0.65);
  tblink += 0.04;
  return should;
}

function mousePressed() {
  if (mood == "happy") {
    mood = "angry";
  } else if (mood == "angry") {
    mood = "tired";
  } else if (mood == "tired") {
    mood = "happy";
  }
}