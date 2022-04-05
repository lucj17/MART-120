function setup() {
  createCanvas(500,600);
}

function draw() {
  background('rgb(144,238,144)');
  textSize(22)
  fill(51)
  text("Game Time",170,50);
  
  strokeWeight(1);
  fill('rgb(189,154,122)');
  ellipse(225, 160, 55, 65);
  
  strokeWeight(5);
  fill(0);
  point(218,150);
  point(232,150);
  
  point(225,160);
  
  arc(222, 175, 20, 20, 0, PI + QUARTER_PI, PIE);
  
  line(200,140,175,120);
  line(210,130,200,120);
  line(250,140,270,120);
  line(240,130,250,120);
  line(225,125,225,110);
  
  line(125,200,75,250);
  line(325,200,375,250);

  
  strokeWeight(1);
  fill(120,45,78);
  rect(175,192,100,125);
  rect(125,192,50,20);
  rect(275,192,50,20);
  rect(200,318,20,80);
  rect(230,318,20,80);
  
  strokeWeight(5);
  line(210,220,210,270);
  line(230,220,250,220);
  line(250,220,230,270);

  fill(51);
  triangle(210,400,200,420,220,420);
  triangle(240,400,230,420,250,420);
  
  fill(51);
  textSize(22);
  text("Lucas Johnson",270,500 );
}