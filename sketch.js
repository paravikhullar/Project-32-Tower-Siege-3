
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;
var score = 0;

function preload()
{

}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1 = new Box(900,348,50,50);
  box2 = new Box(850,348,50,50);
  box3 = new Box(800,348,50,50);
  box4 = new Box(750,348,50,50);
  box5 = new Box(700,348,50,50);
  box6 = new Box(650,348,50,50);
  box7 = new Box(600,348,50,50);

  box8 = new Box(870,300,50,50);
  box9 = new Box(820,300,50,50);
  box10 = new Box(770,300,50,50);
  box11 = new Box(720,300,50,50);
  box12 = new Box(670,300,50,50);
  box13 = new Box(620,300,50,50);

  box14 = new Box(850,250,50,50);
  box15 = new Box(800,250,50,50);
  box16 = new Box(750,250,50,50);
  box17 = new Box(700,250,50,50);
  box18 = new Box(650,250,50,50);

  box19 = new Box(800,200,50,50);
  box20 = new Box(750,200,50,50);
  box21 = new Box(700,200,50,50);

  box22 = new Box(750,150,50,50);


//   var polygon_options = {
//     'restitution':0.8,
//     'friction':1.0,
//     'density':1.0
// }

   polygon = new Pentagon(100,100);
  // polygon = Bodies.polygon(100,100, 5,20, polygon_options);

  // World.add(world,this.polygon);

  slingshot= new SlingShot(polygon.body, {x:100, y:80});



  ground = new Ground(500,500,1000,20);

  platform1 = new Ground(750,350,450,15);


  Engine.run(engine);
  //bgImg();

  
}


function draw() {
  bgImg();
  rectMode(CENTER);

 if(backgroundImg){
  background(backgroundImg);
 }
 else {
   console.log("error");
 }

  text("Score : "+score, 900, 100);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  
  box8.display();
  
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();
  box21.display();

  box22.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();



  polygon.display();
  slingshot.display();


  //imageMode(CENTER);
  // fill("blue");
  //image(polygonImg, polygon.position.x, polygon.position.y, 30,30);

  ground.display();
  platform1.display();


  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body, {x:mouseX , y:mouseY});
  }
  
  
  function mouseReleased(){
	 slingshot.chain.bodyA = null;
  }

  function keyPressed(){

    if(keyCode == 32){
        slingshot.chain.bodyA = polygon.body;
    }
}

async function bgImg(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;

  console.log(responseJSON);

  var hour = datetime.slice(11,13);

  if(hour<=6 && hour>= 18){
    backgroundImg = rgb(69,81,85);
  }
  else{
    backgroundImg = rgb(255,255,102);
  }
}

