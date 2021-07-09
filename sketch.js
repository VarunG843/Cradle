const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


let engine;
let world;
var roof;
var ball;
var ball2;
var ball3;
var ball4;
var ball5;
var ground;
var con;
var con2;
var con3;
var con4;
var con5;


//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var ball_options = {
		restitution: 0.8
	  }
	  
	  ball = Bodies.circle(400,180,10,ball_options);
	  World.add(world,ball);

	  ball2 = Bodies.circle(440,180,10,ball_options);
	  World.add(world,ball2);

	  ball3 = Bodies.circle(480,180,10,ball_options);
	  World.add(world,ball3);

	  ball4 = Bodies.circle(360,180,10,ball_options);
	  World.add(world,ball4);

	  ball5 = Bodies.circle(320,180,10,ball_options);
	  World.add(world,ball5);

	con = Matter.Constraint.create({
		pointA:{x:400,y:100},
		bodyB:ball,
		pointB:{x:0,y:0},
		length:150,
		stiffness:0.5
	});

	con2 = Matter.Constraint.create({
		pointA:{x:440,y:100},
		bodyB:ball2,
		pointB:{x:0,y:0},
		length:150,
		stiffness:0.5
	});

	con3 = Matter.Constraint.create({
		pointA:{x:480,y:100},
		bodyB:ball3,
		pointB:{x:0,y:0},
		length:150,
		stiffness:0.5
	});

	con4 = Matter.Constraint.create({
		pointA:{x:360,y:100},
		bodyB:ball4,
		pointB:{x:0,y:0},
		length:150,
		stiffness:0.5
	});

	con5 = Matter.Constraint.create({
		pointA:{x:320,y:100},
		bodyB:ball5,
		pointB:{x:0,y:0},
		length:150,
		stiffness:0.5
	});

	  World.add(world,con);
	  World.add(world,con2);
	  World.add(world,con3);
	  World.add(world,con4);
	  World.add(world,con5);

	  ellipseMode(RADIUS);

	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);
  ellipse(ball3.position.x,ball3.position.y,10);
  ellipse(ball4.position.x,ball4.position.y,10);
  ellipse(ball5.position.x,ball5.position.y,10);

  rect(roof.position.x,roof.position.y,230,20);

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);

  strokeWeight(2);
  stroke(255);
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);

  strokeWeight(2);
  stroke(255);
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);

  strokeWeight(2);
  stroke(255);
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);

  strokeWeight(2);
  stroke(255);
  line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y);

}

function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball3,{x:0,y:0},{x:0.0075,y:0});
  
    }

}
