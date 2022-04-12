var characterX = 225;
var characterY = 10;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var obsticleX = 30;
var obsticleY = 50;
var obsticleXSpeed;
var obsticleYSpeed;

var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    obsticleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obsticleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
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

    // obsticle moving
    fill('red');
    circle(obsticleX, obsticleY, 30);

     obsticleXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     obsticleYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    obsticleX += obsticleXSpeed;
    obsticleY += obsticleYSpeed;

    if(obsticleX > width)
    {
        obsticleX = 0;
    }
    if(obsticleX < 0)
    {
        obsticleX = width;
    }
    if(obsticleY > height)
    {
        obsticleY = 0;
    }
    if(obsticleY < 0)
    {
        obsticleY = height;
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
