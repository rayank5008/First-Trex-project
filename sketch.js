var edges
var trex ,trex_running;
var ground,ground_Image
function preload(){
trex_running=loadAnimation ("trex1.png","trex3.png","trex4.png")
ground_Image=loadAnimation("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(100,180,10,40)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5
 trex.x=50
 ground=createSprite(300,180,600,10)
 ground.addAnimation("walking",ground_Image)
 ground.velocityX=-3  
ground.x=ground.width/2
 edges=createEdgeSprites()
}

function draw(){
  background("white")
console.log(ground.x)
  if(keyDown("space")){
    trex.velocityY=-10
  }
  if(ground.x<0){
    ground.x=ground.width/2
  }
  trex.velocityY=trex.velocityY+0.8
  trex.collide(ground)  

  drawSprites()

}
