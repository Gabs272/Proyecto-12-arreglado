var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("jake1.png", "jake2.png", "jake3.png", "jake4.png");
}

function setup(){
  createCanvas(400, 400);

  path = createSprite(200,200,20,20);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  boy = createSprite(200,350,50,50);
  boy.addAnimation("running",boyImg);
  boy.scale=0.8;
  
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;

  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
}

function draw() {
  background("white");
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  console.log (path.y);

  drawSprites();
}
