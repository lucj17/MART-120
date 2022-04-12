var characterX = 225;
var characterY = 10;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var obsticle1X = 30;
var obsticle1Y = 50;
var obsticleXSpeed;
var obsticleYSpeed;

var obsticle2X = 450;
var obsticle2Y = 300;

var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    obsticleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) +5);
    obsticleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) +5);
    
}

function draw()
{
    background('rgb(144,238,144)');
    stroke(0);
    fill(0);
    // top
    rect(0,0,width,10);
    // left
    rect(0,0,10,height);
    // bottom
    rect(0, height-10,width-50, 10);
    // right
    rect(width-10,0,10,height);

    // exit title
    textSize(16);
    fill('red');
    text("EXIT", width-100,height-20)

    // character
    fill(51);
    square(characterX, characterY, 50, 10);

    // keys
    if(keyIsDown(w))
    {
        characterY -= 5;   
    }
    if(keyIsDown(s))
    {
        characterY += 5;   
    }
    if(keyIsDown(a))
    {
        characterX -= 5;   
    }
    if(keyIsDown(d))
    {
        characterX += 5;   
    }

    // obsticle 1 moving
    fill('red');
    circle(obsticle1X, obsticle1Y, 30);

    // obsticleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    // obsticleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    obsticle1X += obsticleXSpeed;
    obsticle1Y += obsticleYSpeed;

    if(obsticle1X > width || obsticle1Y > height)
    {
        obsticle1X = 0;
        obsticle1Y = 0;
    } 
    if(obsticle1X < 0 || obsticle1Y < 0)
    {
        obsticle1X = width;
        obsticle1Y = height;
    }

    // osticle 2
    fill('yellow');
    circle(obsticle2X,obsticle2Y, 20);

    obsticle2X -= obsticleXSpeed + 2;
    obsticle2Y -= obsticleYSpeed + 5;
    
    if(obsticle2X > width)
    {
        obsticle2X = 0;
    } 
    if(obsticle2Y > height)
    {
        obsticle2Y = 0;
    }
    if(obsticle2X < 0)
    {
        obsticle2X = width;
    }
    if(obsticle2Y < 0)
    {
        obsticle2Y = height;
    }

    // exit
    if(characterX > width-75 && characterY > height-75)
    {
        fill(0);
        stroke(5);
        textSize(45);
        text("You Win!", width/2-100, height/2-100);
    }

    // mouse click
    fill('orange');
    square(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
