var tower,towerImage;
var door,doorImage,doorsGroup;
var climder,climberImage,climbersGroup;
var ghost,ghostImage;
var invisibleblock,invisibleblockGroup;


function preload(){
  towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  climberImage=loadImage("climber.png");
  ghostImage=loadImage("ghost-standing.png");

  
}


function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY=1;
  
  ghost=createSprite(200,200,50,50);
  ghost.addImage(ghostImage);
  ghost.scale=0.3;
  
  
  doorsGroup=new Group();
  climbersGroup=new Group();
  invisibleblockGroup=new Group();
}

function draw(){
  background(0);
  
  if(tower.y>400){
    tower.y=300;
  }

  if(keyDown("left_arrow")){
    ghost.velocityX=-3;
  }
  
if(keyDown("right_arrow")){
    ghost.velocityX=3;
  }
  
  if(keyDown("space")){
    ghost.velocityY=-1;
  }
             
  ghost.velocityY=ghost.velocityY+0.4;
  
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0;
    
  }
  
  if(invisibleblockGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
  }
  
  
  
  
  
  
  
  
  
  spawnDoors();
  
  drawSprites();
}

function spawnDoors(){
  if(frameCount%240===0){
    var door=createSprite(200,-50);
    door.addImage(doorImage);
    var climber=createSprite(200,10);
    climber.addImage(climberImage);
    door.x=Math.round(random(120,400))
    door.velocityY=1;
    climber.x=door.x;
    climber.velocityY=1;
    climber.lifetime=800;
    door.lifetime=800;
    ghost.depth=door.depth;
    ghost.depth+=1;
    var invisibleblock=createSprite(200,15);
    invisibleblock.width=climber.width;
    invisibleblock.height=2;
    invisibleblock.x=door.x;
    invisibleblock.debug=true;
    invisibleblock.velocityY=1;
    invisibleblockGroup.add(invisibleblock);
    doorsGroup.add(door);
    climbersGroup.add(climber);
  }
  

}









