var enemy1,enemy2;
var shootor1,shootor2;
var ss1,ss2;
var ene1,ene2
var backgroundg

function preload(){
enemy1=loadImage("images/enemy1.jpg")
enemy2=loadImage("images/enemy22.png")
shootor1 = loadImage("images/noobspace2.png")
shootor2 = loadImage("images/prospace.jpg")
backgroundg = loadImage("images/bg2.png")
}

function setup(){
createCanvas(displayWidth,displayHeight);
ss1 = createSprite(200,200);
ss1.addImage(shootor1)
 
ene2 = createSprite(200,200)
ene2.addImage(enemy2)
ene2.scale=0.2;

}

function draw(){
background(backgroundg)
ss1.x=mouseX;
ss1.y=mouseY;





drawSprites();
}