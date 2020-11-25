var mrect,frect,r1,r2,r3,r4,r5;
var ob1,ob2;

function setup() {
  createCanvas(400,400);
 mrect= createSprite(200, 200, 50, 50);
 mrect.shapeColor="blue";
frect = createSprite(200,100,50,50);
frect.shapeColor="blue";
r1=createSprite(200,200,10,10);
r1.shapeColor="blue";
r1.velocityY=4;
r2=createSprite(200,250,10,10);
r2.shapeColor="blue";
r3=createSprite(200,300,10,10);
r3.shapeColor="blue";
r4=createSprite(200,350,10,10);
r4.shapeColor="black";
r4.velocityY=-2;
r5=createSprite(200,400,10,10);
r5.shapeColor="red";

frect.velocityY=3;
r5.velocityY=-3;


}

function draw() {
  background("cyan");  
  mrect.x=mouseX;
  mrect.y=mouseY;
 if( isTouching(mrect,r5)){
  mrect.shapeColor="black";
  r5.shapeColor="black";
 }
 else{
  mrect.shapeColor="blue";
  r5.shapeColor="red";
 }

 if( isTouching(mrect,r1)){
  mrect.shapeColor="black";
  r1.shapeColor="black";
 }
 else{
  mrect.shapeColor="blue";
  r1.shapeColor="blue";
 }

 if( isTouching(mrect,r2)){
  mrect.shapeColor="black";
  r2.shapeColor="black";
 }
 else{
  mrect.shapeColor="blue";
  r2.shapeColor="blue";
 }
bounceOff(frect,r5);
bounceOff(r2,r4);
  drawSprites();
}
