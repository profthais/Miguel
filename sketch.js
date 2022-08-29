var innocent, innocentRun, innocentJump, innocentDeath;
var delegate, delegateImg;
var assassin, assassinImg;

function preload() {
    innocentRun = loadImage("assets/innocentRun.gif");
    innocentJump = loadImage("assets/innocentJump.gif");
    innocentDeath = loadImage("assets/innocentDeath.gif");
}

function setup() {
    createCanvas(600, 600);
  innocent = createSprite(300, 300, 20, 30);
  innocent.addImage("innocentImg", innocentRun);
}

function draw() {
    background(51);

    drawSprites();
}

