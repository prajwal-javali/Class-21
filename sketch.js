var fixedRect, movingRect, rect3, rect4, edges;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect3 = createSprite(20, 400, 20, 40);
  rect3.shapeColor = "yellow";
  rect3.velocityX = 3;
  rect4 = createSprite(1000, 400, 20, 40);
  rect4.shapeColor = "red";
  rect4.velocityX = -3;
  edges = createEdgeSprites();

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  bounceOff(fixedRect, movingRect);
  bounceOff(rect3, rect4);
  bounceOff(rect4, edges[1]);
  
  drawSprites();
}
