function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  
  var speed=(abs(pmouseX-mouseX)+abs(pmouseY-mouseY))/2 ;
  
  if (mouseIsPressed){
    stroke(180,70,93,80);
  } else {
    stroke(255,80);
  }
  strokeWeight(speed);
  line (windowWidth/2,windowHeight/2, mouseX, mouseY);

}