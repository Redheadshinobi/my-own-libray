var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapecolor = "green"
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapecolor = "green"
  gameObject3 = createSprite(300,400,50,50);
  gameObject3.shapecolor = "green"
  gameObject4 = createSprite(100,100,50,50);
  gameObject4.shapecolor = "green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
else{
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
}
  drawSprites();
}
function isTouching(object1,object2){
 ( object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x <object2.width/2 + object1.width/2
   && object1.y - object2.y < object2.height/2 + object1.height/2
 &&object2.y - object2.y <object2height/2 + object1.height/2)
   return true;
  }
   else{
   return false;
  }
}