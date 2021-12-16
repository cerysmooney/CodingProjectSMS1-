let numberOfHexagonsAcross; // defining hexagons across the page
let mySide;                // defining spacing of hexagons
let numberOfHexagonsDown;  // defining hexagons down the page

function setup() {
  createCanvas(800, 800);
  numberOfHexagonsAcross = 18;
  numberOfHexagonsDown = 20; 
}

function draw() {
  background(249,166,2);
  mySide = width/numberOfHexagonsAcross; 
  
  
  for(let j=0; j < numberOfHexagonsDown; j++){
    drawLineOfHexagons(j*90, mySide);
  }
}

function drawLineOfHexagons(yPosition, sideSize){
    for(let i = 0; i < numberOfHexagonsAcross; i++){
    drawHexagon(3*mySide*i, yPosition, mySide);
  }
}

function drawHexagon(centreX, centreY, sideLength){ 

  polygon(centreX, centreY, sideLength, 6);    //drew hexagon (6 sides)
}

function polygon(x, y, radius, npoints) {   
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
