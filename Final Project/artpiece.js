function setup() {
    createCanvas(500,600);
  }
  
  function draw() {
    background('rgb(144,238,144)');
    

    //computer
    quad(380,300,480,300,470,350,370,350);
    quad(370,350,470,350,450,375,350,375);
    textSize(12)
    fill(255)
    text("I love coding!",390,325);


    //head
    strokeWeight(1);
    fill('rgb(189,154,122)');
    ellipse(225, 160, 55, 65);
    
    //eyes
    strokeWeight(5);
    fill(0);
    point(218,150);
    point(232,150);
    
    //nose
    point(225,160);
    

    //mouth
    arc(222, 175, 20, 20, 0, PI + QUARTER_PI, PIE);
    

    //hair
    line(200,140,175,120);
    line(210,130,200,120);
    line(250,140,270,120);
    line(240,130,250,120);
    line(225,125,225,110);
    

    //arms
    line(125,200,75,150);
    line(325,200,375,150);
  
    
    strokeWeight(1);
    fill(120,45,78);
    //body
    rect(175,192,100,125);
    //shoulders
    rect(125,192,50,20);
    rect(275,192,50,20);
    //legs
    rect(200,318,20,80);
    rect(230,318,20,80);
    

    //number
    strokeWeight(5);
    line(210,220,210,270);
    line(230,220,250,220);
    line(250,220,230,270);
  
    //feet
    fill(51);
    triangle(210,400,200,420,220,420);
    triangle(240,400,230,420,250,420);
    
    //signature
    fill(51);
    textSize(22);
    text("Lucas Johnson",270,500 );
  }