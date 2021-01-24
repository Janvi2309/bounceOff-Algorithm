var fixedRect, movingRect;
var object3, object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object3 = createSprite(600, 100, 50, 80);
  object3.shapeColor = "green";
  object3.debug = true;
  object4 = createSprite(600, 800,80,30);
  object4.shapeColor = "green";
  object4.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  object4.velocityY = -5;
  object3.velocityY = +5;

}

function draw() {
  background("white"); 
  
  

  bounceOff(movingRect, fixedRect);
  bounceOff(object3, object4);

  drawSprites();
  
}

function bounceOff(object1,object2) {

if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}

}