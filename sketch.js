function setup() {
  createCanvas(800,800);
 
  movingR=createSprite(400,100,30,30);
  movingR.velocityY = 5;
  fixedR=createSprite(400, 500, 50, 50);
  fixedR2=createSprite(100,500,75,75);
  fixedR.velocityY = -5;
  fixedR3=createSprite(700,600,20,20);
}

function draw() {
  background("green");  
  
 if(isTouching(movingR,fixedR3)){
  fixedR3.shapeColor = 'purple';
  movingR.shapeColor = 'purple';
 }
 else{
  fixedR3.shapeColor = 'blue';
  movingR.shapeColor = 'blue';
 }

  //movingR.x=mouseX;
  //movingR.y=mouseY;

  bounceOff(movingR,fixedR);
  
  drawSprites();

  text(movingR.width/2+fixedR.width/2,50,50);
  text(movingR.x-fixedR.x,400,50);

}

