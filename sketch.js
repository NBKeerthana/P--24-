
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,paperBall;
var bottomBin, rightBin, leftBin;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,680,1200,20);
	paperBall=new Paper (50,150,15,15);
	bottomBin=new Dustbin(800,662.5,120,15);
	rightBin=new Dustbin(865,628,15,70);
	leftBin=new Dustbin(735,628,15,70);		

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paperBall.display();
  bottomBin.display();
  rightBin.display();
  leftBin.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:35,y:-35});

	}
}

