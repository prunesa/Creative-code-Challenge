const zoomColor = 2;
const saturation = 60;
const lightness = 100;
const scrollSpeed = 2.5;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  noStroke();
}

function draw() {
  let hue = frameCount * scrollSpeed % 360;
  for(let i = height; i > 0 ; i-=1){
    let newHue = hue+i;
    
    fill((newHue/zoomColor)%360, saturation, lightness);
    circle(width/2, height/2, i);
  }
}