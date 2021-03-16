const stepSize = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(69,58,200);
  if(width < height){
    maxDimension = height;
  }else{
    maxDimension = width;
}
}

function draw() {
  background (255);
  
    let currentStep = frameCount % stepSize;
  let startingY = currentStep * 2 - stepSize;
  
   for(let i = startingY; i < maxDimension*2; i = i + stepSize * 2){
      circle(width/2, height/2, i );
     
      strWeight = 1;

  updatePixels();{
  strWeight = i/20;
  strokeWeight(strWeight);
}
   }
   
    stroke(180,70,93);
   
    noFill();  

}

