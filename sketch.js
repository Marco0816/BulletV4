const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var canvas;
//var player1, player2;
var gun1, gun2;
var gun1_img, gun2_img;
var floatfloor;
var engine,world;
var rect;

function preload() {
  //car1_img = loadImage("../assets/car1.png");
  //gun1_img = loadImage("../assets/Gun1_img.png")
  gun2_img = loadImage("../assets/Gun2_img.png")
}

function setup() {


  canvas = createCanvas(1500, 700);

  engine = Engine.create();
  world =  engine.world;
  ground = new Ground (750,height,1200,40)
  rect1 = new Rectangle(500,300,100,30)
  rect2 = new Rectangle2(400,300,100,30)

 // player1 = createSprite(200,200,20,65);
 // player1.shapeColor = "black"
  //player2 = createSprite(900,200,20,65);
  //player2.shapeColor = "black"

  //gun1 = createSprite(600,300,10,10);
  gun1 = new Gun(470,300)
  //gun1.addImage(gun1_img);
  //gun1.scale = 0.4;

  //gun2 = createSprite(500,300,10,10);
  //gun2.addImage(gun2_img);
  //gun2.scale = 0.4;

}

function draw() {
  background("white");
  Engine.update(engine)
  ground.display();
  gun1.display();
  rect1.display();
  rect2.display();
  drawSprites();
}