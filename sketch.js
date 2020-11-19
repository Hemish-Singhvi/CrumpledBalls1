
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall, ground, bin1, bin2, bin3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

	paperBall = new Paper(100, 300, 20);
	ground = new Ground(800, 350, 1600, 10);
	bin1 = new Bin(1200, 340, 200, 15, PI);
	bin2 = new Bin(1100, 297, 15, 100, PI/2);
	bin3 = new Bin(1300, 297, 15, 100, PI/2);

	Engine.run(engine);
	engine.world.gravity.y = 1.5;
  
}


function draw() {
  background(0);
  drawSprites();
  if (keyWentDown("up")){
	 keyPressed(); 
  }
  paperBall.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  
}

function keyPressed(){
	Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:64, y:-41});
}

