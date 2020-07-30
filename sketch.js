
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	base = new Ground(400,680,700,15);
	paper = new Player(200,600,30,30);
	dustbin1 = new Dustbin(590,640,10,50);
	dustbin2 = new Dustbin(640,670,100,10);
	dustbin3 = new Dustbin(690,640,10,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
base.display();
paper.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
if (keyCode === UP_ARROW){
	keypressed();

}
}

function keypressed(){
	
Matter.Body.applyForce(paper.Body,paper.Body.position,{x:85,y:85})
}
