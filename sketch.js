const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var poly, ground, stand1, stand2, polygon, engine, world,bg2;
var backgroundImg,backgroundImage;

function preload(){

  polygon = loadImage("polygon.png");
  getTime();

}

function setup() {
  
  createCanvas(950,450);
  
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();

  stand1 = new Stand(490,350,250,10);
  stand2 = new Stand(800,200,200,10);
 
  //stand 1 blocks
  block1 = new Box(400,275,30,40);
  block2 = new Box(430,275,30,40);
  block3 = new Box(460,275,30,40);
  block4 = new Box(490,275,30,40);
  block5 = new Box(520,275,30,40);
  block6 = new Box(550,275,30,40);
  block7 = new Box(580,275,30,40);
  block8 = new Box (430,235,30,40);
  block9 = new Box(460,235,30,40);
  block10 = new Box(490,235,30,40);
  block11 = new Box(520,235,30,40);
  block12 = new Box(550,235,30,40);
  block13 = new Box(460,195,30,40);
  block14 = new Box(490,195,30,40);
  block15 = new Box(520,195,30,40);
  block16 = new Box(490,155,30,40);

  //stand 2 blocks
  blocks1 = new Box(740,175,30,40);
  blocks2 = new Box(770,175,30,40);
  blocks3 = new Box(800,175,30,40);
  blocks4 = new Box(830,175,30,40);
  blocks5 = new Box(860,175,30,40);
  blocks6 = new Box(770,135,30,40);
  blocks7 = new Box(800,135,30,40);
  blocks8 = new Box(830,135,30,40);
  blocks9 = new Box(800,95,30,40);

  poly = Bodies.circle(50,200,20,{density : 2});
  World.add(world, poly);

  slingShot = new Slingshot(this.poly, {x:150, y:350})


}

function draw() {
 // background(220);
 if(backgroundImg){
  background(backgroundImg);
}
  textSize(20);
  fill("red");
  text("Drag the Hexagon Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();

  stand1.display();
  stand2.display();

  slingShot.display();

  strokeWeight(0);
  stroke(0);
  fill("skyblue");
  block1.display();
  fill("skyblue");
  block2.display();
  fill("skyblue");
  block3.display();
  fill("skyblue");
  block4.display();
  fill("skyblue");
  block5.display();
  fill("skyblue");
 
  block6.display();
  fill("skyblue");
  block7.display();
  // stage 2
  fill("pink");
  block8.display();
  fill("pink");
  block9.display();
  fill("pink");
  block10.display();
  fill("pink");
  block11.display();
  fill("pink");
  block12.display();
  // stage 3
  fill("cyan");
  block13.display();
  fill("cyan");
  block14.display();
  fill("cyan");
  block15.display();
  // stage 4
  fill("grey");
  block16.display();

   // stand2 
  // stage 1
  fill("skyblue");
  blocks1.display();
  fill("skyblue");
  blocks2.display(); 
  fill("skyblue")
  blocks3.display();
  fill("skyblue")
  blocks4.display();
  fill("skyblue")
  blocks5.display();
  // stage2
  fill("cyan");
  blocks6.display();
  fill("cyan")
  blocks7.display();
  fill("cyan")
  blocks8.display();

  fill("pink")
  blocks9.display();

  

   imageMode(CENTER)
  image(polygon ,poly.position.x, poly.position.y,40,40);

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(poly,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32)
  Matter.Body.setPosition(poly, {x:150, y:400});
  slingShot.attach(poly);
}


async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dt = responseJSON.datetime;
    var hour = dt.slice(11,13)
    console.log(dt);
    console.log(hour);
    if(hour>=08 && hour<=19){
        bg="bg1.png";
    }
    else{
        bg="bg2.png";
    }
    backgroundImg=loadImage(bg);
  }









