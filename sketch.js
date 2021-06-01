
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygon;
var ground1;
var base1, base2;
var b1, b2, b3, b4, b5, b6, b7;
var b8, b9, b10, b11, b12;
var b13, b14, b15, b16;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   polygon = new Polygon(50, 200, 40, 40);
   ground1 = new Ground(600, 600, 1200, 300);

   base1 = new Ground(480, 350, 320, 30);

   b1 = new Block(400, 345, 40, 40);
   b2 = new Block(430, 345, 40, 40);
   b3 = new Block(460, 345, 40, 40);
   b4 = new Block(490, 345, 40, 40);
   b5 = new Block(520, 345, 40, 40);
   b6 = new Block(550, 345, 40, 40);
   b7 = new Block(580, 345, 40, 40);

   b8 = new Block(430, 305, 40, 40);
   b9 = new Block(460, 305, 40, 40);
   b10 = new Block(490, 305, 40, 40);
   b11= new Block(520, 305, 40, 40);
   b12 = new Block(550, 305, 40, 40);

   b13 = new Block(460, 265, 40, 40);
   b14 = new Block(490, 265, 40, 40);
   b15 = new Block(520, 265, 40, 40);

   b16 = new Block(490, 225, 40, 40);


	Engine.run(engine);
  chain = new slingshot(polygon.body,{x:100, y:200});
}


function draw() {
  rectMode(CENTER);
  background("purple");
  Engine.update(engine);
  fill("pink");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  fill(rgb(52, 204, 255));
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  fill("gold");
  b13.display();
  b14.display();
  b15.display();
  fill("orange");
  b16.display();

  drawSprites();
  ground1.display();
 polygon.display();
 base1.display();
 
 // fill("pink");
 chain.display();
 textSize(25);
 stroke(0);
 fill(200);
 text("Drag the circle to destroy the blocks", 450, 50);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    chain.fly();
}

