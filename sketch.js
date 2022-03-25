var path, path_Image
var boy, boy_running 
var invisibleGround1, invisibleGround2

function preload(){
  //pre-load images
  path_Image = loadImage("path.png")
  boy_running = loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);


  //create a path Sprite 
  path=createSprite(200,200,20,400);
  path.addImage("path",path_Image);
  path.velocityY = 4;
  path.scale=1.2;

  //create a boy sprite
  boy=createSprite(200,300);
  boy.addAnimation("running", boy_running);
  boy.scale=0.05;

  //creating invisible ground1
  invisibleGround1=createSprite(370,200,0.5,400);
  invisibleGround1.visible = false; 

  //creating invisible ground2 
  invisibleGround2=createSprite(40,200,0.5,400);
  invisibleGround2.visible = false;

}

function draw() {
  background(220);

  //moving boy to the left 
  if(mouseX < 200){
  boy.x = boy.x-6;
  boy.y = 300;
  } 

  //moving boy to the right
  if(mouseX > 200){
  boy.x = boy.x+6;
  boy.y = 300;
  } 

  //colliding boy with invisible grounds 
  boy.collide(invisibleGround1);
  boy.collide(invisibleGround2);

 //code to reset the background 
 if(path.y > 400){
  path.y = height/2;
 }

  drawSprites();
}
