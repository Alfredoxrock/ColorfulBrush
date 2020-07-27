var hue;

function setup() {
createCanvas(windowWidth,windowHeight);
hue = 0;
background('black');
}

function draw() {
//background('black');
//mouseDragged();
}

function mouseDragged(){
  hue > 360 ? hue = 0 : hue++;
  colorMode(HSL,360);
  noStroke();
  fill(hue,200,200);
  ellipse(mouseX, mouseY, 25, 25);
}

function keyPressed() {
    if (keyCode == 82) {
        //alert("You typed the letter r!");
        hue = 0;
    }
}
