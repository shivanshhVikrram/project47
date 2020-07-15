var bg;
var cloudImage1,cloudImage2,cloudImage3;
var playerIdle,playerJump;
var player;
var platformImg;
var treeImg;
function preload(){
  bg = loadImage("BG.png");
  cloudImage1 = loadImage("cloud1.png");
  cloudImage2 = loadImage("cloud2.png");
  cloudImage3 = loadImage("cloud3.png");
  playerIdle = loadAnimation("idle.png");
  playerJump = loadAnimation("jump.png","jump1.png","jump2.png","jump6.png","jump7.png","jump9.png");
  platformImg = loadImage("platform1.png");
  treeImg = loadImage("tree1.png");
}
function setup() {
  createCanvas(displayWidth,600);
 // createSprite(400, 200, 50, 50);
 ground = createSprite(displayWidth/2,590,displayWidth,10);
 player = createSprite(100,580);
 player.addAnimation("player1",playerIdle);
 player.addAnimation("player2",playerJump);

 player.scale = 0.3;
 platform = createSprite (displayWidth-400,500);
 platform.addImage(platformImg);
tree = createSprite(displayWidth-400,200);
tree.addImage(treeImg);
}

function draw() {
  background(bg);
  image(treeImg,displayWidth-400,400);
  text(player.y,500,100)
  if (frameCount%250===0) {
    spawnClouds();

  } 
  if (keyWentDown(UP_ARROW)&& player.y>=512){
    player.changeAnimation("player2");
    player.velocityY = -12
  }
  player.velocityY += 0.8

  if (keyWentDown(RIGHT_ARROW)){
    player.changeAnimation("player2");
    player.velocityX = 3
  }
  if (keyWentUp(RIGHT_ARROW)){
    player.changeAnimation("player1");
    player.velocityX = 0
  }

  if (keyWentDown(LEFT_ARROW)){
    player.changeAnimation("player2");
    player.velocityX = -3
  }

  if (keyWentUp(LEFT_ARROW)){
    player.changeAnimation("player1");
    player.velocityX = 0
  }


  player.collide(ground);
  drawSprites();
}
function spawnClouds(){
  var cloud = createSprite(displayWidth,random(50,250));
  var rand = Math.round(random(1,3));
  switch(rand ){
    case 1:
      cloud.addImage(cloudImage1);
      break;

      case 2:
        cloud.addImage(cloudImage2);
        break;

        case 3:
          cloud.addImage(cloudImage3);
          break;





  }
  cloud.lifetime = 500;
  cloud.velocityX = -3;
  cloud.scale = 0.1
}