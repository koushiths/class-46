var bgimg
var groundimg,ground
var cannonimg,cannon
var sqimg,sq,sq2,sq3,sq3,sq4,sq5,sq6,sq7,sq8,sq9,sq10,sq11,sq12
var cbimg,cannonball

function preload(){
bgimg=loadImage("images/bg.png")
groundimg=loadImage("images/ground.png")
cannonimg=loadImage("images/cannon ball.png")
sqimg=loadImage("images/square.png")
cbimg=loadImage("images/cbimg.png")


}

function setup() {
  createCanvas(1535,749);

  ground=createSprite(700,400,20,20)
  ground.addImage(groundimg)
  ground.scale=0.23

  cannonball=createSprite(700,500,20,20)
  cannonball.addImage(cbimg)
  cannonball.scale=0.2
  cannonball.visible=true
  cannonball.debug=true

  cannon=createSprite(700,600,20,20)
  cannon.addImage(cannonimg)
  cannon.scale=0.25

  sq=createSprite(869,330,20,20)
  sq.addImage(sqimg)
  sq.scale=0.03

  sq2=createSprite(805,330,20,20)
  sq2.addImage(sqimg)
  sq2.scale=0.03

  sq3=createSprite(740,330,20,20)
  sq3.addImage(sqimg)
  sq3.scale=0.03

  sq4=createSprite(675,330,20,20)
  sq4.addImage(sqimg)
  sq4.scale=0.03

  sq5=createSprite(610,330,20,20)
  sq5.addImage(sqimg)
  sq5.scale=0.03

  sq6=createSprite(545,330,20,20)
  sq6.addImage(sqimg)
  sq6.scale=0.03

  sq7=createSprite(570,270,20,20)
  sq7.addImage(sqimg)
  sq7.scale=0.03

  sq8=createSprite(634,270,20,20)
  sq8.addImage(sqimg)
  sq8.scale=0.03

  sq9=createSprite(634,270,20,20)
  sq9.addImage(sqimg)
  sq9.scale=0.03

  sq10=createSprite(634,270,20,20)
  sq10.addImage(sqimg)
  sq10.scale=0.03

  sq11=createSprite(634,270,20,20)
  sq11.addImage(sqimg)
  sq11.scale=0.03

  sq12=createSprite(634,270,20,20)
  sq12.addImage(sqimg)
  sq12.scale=0.03
}

function draw() 
{
  background(bgimg);

  if(mousePressedOver(cannon)){
    cannonball.visible=true
    cannonball.velocityY=-1
  }

  if(cannonball.isTouching(sq)){
    sq.destroy();
    cannonball.velocityY=0
    cannonball.y=500
    cannonball.x=700
  }

  if(cannonball.isTouching(sq2)){
    sq2.destroy();
    cannonball.velocityY=0
    cannonball.y=500
    cannonball.x=700
  }

  if(cannonball.isTouching(sq3)){
    sq3.destroy();
    cannonball.velocityY=0
    cannonball.y=500
    cannonball.x=700
  }

  if(cannonball.isTouching(sq4)){
    sq4.destroy();
    cannonball.velocityY=0
    cannonball.y=500
    cannonball.x=700
  }

  if(cannonball.isTouching(sq5)){
    sq5.destroy();
    cannonball.velocityY=0
    cannonball.y=500
    cannonball.x=700
  }

  if(cannonball.isTouching(sq6)){
    sq6.destroy();
    cannonball.velocityY=0
    cannonball.y=500
    cannonball.x=700
  }


  if(cannonball.isTouching(sq7)){
    sq7.destroy();
    cannonball.velocityY=0
    cannonball.y=500
    cannonball.x=700
  }

  if(cannonball.isTouching(sq8)){
    sq8.destroy();
    cannonball.velocityY=0
    cannonball.y=500
    cannonball.x=700
  }

  if(cannonball.isTouching(sq9)){
    sq9.destroy();
    cannonball.velocityY=0
    cannonball.y=500
    cannonball.x=700
  }

  if(cannonball.isTouching(sq10)){
    sq10.destroy();
    cannonball.velocityY=0
    cannonball.y=500
    cannonball.x=700
  }

  if(cannonball.isTouching(sq11)){
    sq11.destroy();
    cannonball.velocityY=0
    cannonball.y=500
    cannonball.x=700
    
  }

  if(cannonball.isTouching(sq12)){
    sq12.destroy();
    cannonball.velocityY=0
    cannonball.y=500
    cannonball.x=700
    
  }

  drawSprites();
  

}
// create cannon balls
// create the box
// create the square with images




