var crumpled_ballSprite,crumpled_ballImage
var dustbinSprite 
var groundSprite

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var options={
	isStatic = false,
	restitution = 0.3,
	friction = 0.5,
	distance = 1.2

}

function preload()
{
	crumpled_ballImage = loadImage("ball.png")
	
}

function setup() {
	createCanvas(800, 700);
   
	groundSprite = createSprite(400,670,800,10)
	groundSprite.shapeColor = "yellow"

	crumpled_ballSprite = createSprite(100,630)
	crumpled_ballSprite.addImage(crumpled_ballImage)
	crumpled_ballSprite.scale = 0.1

	dustbinSprite = createSprite(650,550,100,50)
	dustbinSprite1 = createSprite(650,550,100,50)
	dustbinSprite2 = createSprite(650,550,100,50)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	
		Matter.Body.applyForce(paperObject.body,paperObject.body.position ,{x:85,y:-85})
	}

}



