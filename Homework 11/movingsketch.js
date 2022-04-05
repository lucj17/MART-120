var headX = 225;
var headY = 160;
var headDirection = 1;

var bodyX = 175;
var bodyY = 192;
var bodyDirection = 3;

var size = 22;
var count = 0;
var sizeDirection = 2;

var lshoulderX = 125
var rshoulderX = 275

var footY = 400

var movement = 13;
function setup() {
    createCanvas(500,600);
  }
  
  function draw() {
    background('rgb(144,238,144)');
    textSize(size);
    fill(51);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Game Time",170,50);
    
    //head
    strokeWeight(1);
    fill('rgb(189,154,122)');
    ellipse(headX, headY, 55, 65);
    if (headX >= 300 || headX <= 200) {
        movement *= 1;
      }
      headX += movement;
    if (headY >= 300 || headY <= 200) {
        movement *= 1;
      }
      headY += movement;
    
    //eyes
    strokeWeight(5);
    fill(0);
    point(218,150);
    point(232,150);
    //nose
    point(225,160);
    
    //smile
    arc(222, 175, 20, 20, 0, PI + QUARTER_PI, PIE);
    
    //hair
    line(200,140,175,120);
    line(210,130,200,120);
    line(250,140,270,120);
    line(240,130,250,120);
    line(225,125,225,110);
    
    //arms
    line(125,200,75,250);
    line(325,200,375,250);
  
    //body
    strokeWeight(1);
    fill(120,45,78);
    rect(bodyX,bodyY,100,125);
    //shoulders
    rect(lshoulderX,192,50,20);
    if (lshoulderX >= 175 || lshoulderX <= 0) {
        movement *= -1;
      }
      lshoulderX += movement;

    rect(rshoulderX,192,50,20);

    if (rshoulderX >= 350 || rshoulderX <= 175) {
        movement *= 1;
      }
      rshoulderX += movement;

    //legs
    rect(200,318,20,80);
    rect(230,318,20,80);
    
    //number17
    strokeWeight(5);
    line(210,220,210,270);
    line(230,220,250,220);
    line(250,220,230,270);
  
    //feet
    fill(51);
    triangle(210,footY,200,420,220,420);
    if (footY >= 350 || footY <= 175) {
        movement *= 1;
      }
      footY += movement;
    triangle(240,footY,230,420,250,420);
    
    //signature
    fill(51);
    textSize(25);
    text("Lucas Johnson",270,500 );
  }