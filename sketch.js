const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine,world;

var gameState = "onSling";
var bg ;
var score = 0;

function preload () {

  bg = loadImage("bg.jpg");
polygonImg= loadImage("polygon.png");

}

function setup() {
  createCanvas(1600,800); 

 engine = Engine.create();
 world = engine.world;

  ground = new Ground(800,800,1600,20);

  ground1 = new Ground (800,400,200,10);

  box1 = new Box(730,235,30,40);
  box2 = new Box(760,235,30,40);
  box3 = new Box(790,235,30,40);
  box4 = new Box(820,235,30,40);
  box5 = new Box(850,235,30,40);

  box6 = new Box(730,220,30,40);
  box7 = new Box(760,220,30,40);
  box8 = new Box(790,220,30,40);

  box9 = new Box(820,220,30,40);

  polygon = Bodies.circle(400,200,20);

  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:400,y:200});

}

function draw() {
  background(bg);  
  drawSprites();

  noStroke();
  textSize(50);
  fill("black");
  text("Score: "+ score,1200,200);

  Engine.update(engine);


  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  ground.display();
  ground1.display();

  box1.score();
  box2.score(); 
  box3.score();
  box4.score();
  box5.score(); 
  box6.score();
  box7.score();
  box8.score();
  box9.score();


  push();
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);

  pop();


}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingShot.attach(this.polygon);
  }
}

async function getBackgroundImg () {

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if (hour>=06 && hour<=19){
      bg = "bg.jpg";
  }

  else {
      bg = "bg2.jpeg";

  }
  backgroundImg = loadImage(bg);
               
}