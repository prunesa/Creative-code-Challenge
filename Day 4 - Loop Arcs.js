const stepSize =10;

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
  let currentStep = frameCount % stepSize;
  let startingY = currentStep *2- stepSize;
  
   for(let i = 0; i < maxDimension; i = i + stepSize ){
       arc (windowWidth/2,windowHeight/2,i,i,0,frameCount/i*5);
       stroke(255);
      strokeWeight (2);
   noFill();
   }
   
 }