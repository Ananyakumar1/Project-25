
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,bin,paper;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     
	ground = new Ground(600,height,1200,20)
	//side1  = new Base(1000,305,170,170)
	//side2  = new Side(911,317,15,145)
	//side3  = new Side(1087,317,15,145)
	bin = new dustbin(1000,380,170,170)
	paperball = new Paper(100,100,40,40)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  keyPressed();
  paperball.display();
  ground.display();
  bin.display();
}

function keyPressed(){
   if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(paperball.body,paperball.body.position,{x:0.75,y:-0.75})
   }
}
 
