var boy;
var boyrunning;
var path;
var pathimage;
var invisibleleft;
var invisibleright;

function preload(){
  boyrunning = loadAnimation ("Runner-1.png","Runner-2.png");
  pathimage = loadImage ("path.png");
}

function setup(){
  createCanvas(400,400);
  path = createSprite (200,100,200,200);
  path.addImage(pathimage);
  path.scale = 1.2;
  boy = createSprite (200,200,30,30);
  boy.addAnimation("running",boyrunning);
  boy.scale = 0.1;
  invisibleleft = createSprite (35,200,23,400);
  invisibleright = createSprite (375,200,23,400);
}

function draw() {
  background(0);
  boy.collide(invisibleright);
  boy.collide(invisibleleft);
  boy.x = World.mouseX;
  path.velocityY = 4;
  if (path.y > 400) {
    path.y = path.height/4;
  }
  invisibleright.visible = false;
  invisibleleft.visible = false;
  drawSprites();
}
