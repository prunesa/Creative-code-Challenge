
const stepSize = 5;

function setup() {
  createCanvas(windowWidth,windowHeight);
    if(width < height){
    maxDimension = height;
  }else{
    maxDimension = width;
}
}
function draw() {
  background (180,70,93);
  
   for(let i = 0; i < maxDimension; i = i + stepSize * 2){
     
      arc (windowWidth/2,windowHeight/2,i,i,0,i);
       stroke(255);
      strokeWeight (2);
   noFill();
}
}
