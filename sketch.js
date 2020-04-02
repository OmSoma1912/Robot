var x=60;
var y=440;
var radius = 45;
var bodyHeight = 160;
var neckHeight = 70;
var easing = 0.04;

function setup(){
  createCanvas(1200,1200);
  strokeWeight(2);
  ellipseMode(RADIUS);
}
function draw(){
  background("white");
  var targetX=mouseX;
  x = x + (targetX - x) * easing;
  
  if(mouseIsPressed){
    neckHeight = 16;
    bodyHeight = 90;
  }
  else{
    neckHeight = 70;
    bodyHeight = 160;
  }
  var neckY = y - bodyHeight - neckHeight - radius;
  
  stroke(100);
  line(x + 12, y - bodyHeight, x + 12, neckY);
  
  noStroke();
  fill("blacK");
  ellipse(x - 25, y - 33, 15, 15);
  ellipse(x + 10, y - 33, 15, 15);
  
  rect(x - 45, y - bodyHeight, 75, bodyHeight - 33);
  
  ellipse(x+12,neckY,radius,radius);
  
  fill("white");
  ellipse (x-25,neckY,radius-20,radius-10);

  ellipse (x+15,neckY-20,10,10);
}