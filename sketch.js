var ground,player;
var obstacle;
var ground2;
function setup(){
createCanvas(1000,700);

ground=createSprite(500,height,1000,20);
ground.shapeColor="red";
player=createSprite(50,650,20,20);
obstacle1=createSprite(362,675,60,10);
obstacle2=createSprite(558,668,40,10);
obstacle2.velocityX=2;
barrier1=createSprite(550,668,5,20);
barrier2=createSprite(805,668,5,20);
barrier1.visible=false;
barrier2.visible=false;
ground2=createSprite(440,600,880,15);
}
function draw(){
 background("black");
 fill(255);
obstacle2.bounceOff(barrier1);
obstacle2.bounceOff(barrier2);

 text(mouseX+","+mouseY,mouseX,mouseY);
drawSprites();
}
