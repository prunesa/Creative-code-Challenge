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
    let end = radians(i/maxDimension*360)*frameCount/80; 
    let start = 0
     if  (end < radians (i/maxDimension*360))
     { end = end   
     } else {
       end = radians(i*maxDimension/360)/frameCount*20
     }
     loop
      arc (
        windowWidth/2,
        windowHeight/2,
        i,
        i,
        start,
        end);
       stroke(255);
      strWeight = 1;

  updatePixels();{
  strWeight = i/200;
  strokeWeight(strWeight);
   noFill();
  }
}
}