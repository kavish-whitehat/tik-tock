function setup() {
  createCanvas(720, 400);
  noStroke();

  let h = hour();
  text('Current hour:\n' + h, 5, 50); 

  let m = minute();
  text('Current minute: \n' + m, 5, 50);

  let s = second();
  text('Current second: \n' + s, 5, 50);
  scAngle=map(sc,0,60,0,360)

  arc(50, 50, 80, 80, 0, PI + QUARTER_PI);  
}

function draw() {
  background(0);
  // Scale the mouseX value from 0 to 720 to a range between 0 and 175
  let c = map(mouseX, 0, width, 0, 175);
  // Scale the mouseX value from 0 to 720 to a range between 40 and 300
  let d = map(mouseX, 0, width, 40, 300);

  stroke(255,0,0);
  strokeWeight(7);
  line(0,100,0,0)

  ellipse(width/2, height/2, d, d);
}
