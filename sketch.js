var ball 
var bomb
var rasta
var gameOver
var END =0;
var PLAY =1;
function preload(){

ballImg = loadImage("Golfball.png")
 
bombImg = loadImage("corona.png")

rastaImg = loadImage("Road.png")

gameOverImg = loadImage("gameOver.png")
}

function setup() {

 createCanvas(1200,300) 
 
 rasta=createSprite(100,150);
 rasta.addImage(rastaImg);
 rasta.velocityX = -5;

 ball = createSprite(70,150);
 ball.addImage(ballImg);
 ball.scale=0.07;

 ball.setCollider("rectangle",0,0,40,40,50)

 gameOver = createSprite(650,150);
 gameOver.addImage(gameOverImg);
 gameOver.scale = 0.8;
 gameOver.visible = false;

}

function draw() {
 
drawSprites();
textSize(20);
fill(255);
text("Distance: "+ distance,900,30);


if(gameState===PLAY){
    
    distance = distance + Math.round(getFrameRate()/50);
    path.velocityX = -(6 + 2*distance/150);
    
    ball.y = World.mouseY;

    edges = createEdgeSprites();
   ball .collide(edges);
   if(path.x < 0 ){
    path.x = width/2;
}