const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//Creating all variables
var world, engine, bodies; 
var umbrella; 
var maxDrops = 100; 
var drops = [];
var rand;
var night,thunder1, thunder2, thunder3, thunder4;
var Thunder;
var createThunderFrame = 0;

function preload(){
   //Preload all images
   night = loadImage("Images/thunderbolt/night.jpg")
   thunder1 = loadImage("Images/thunderbolt/1.png");
   thunder2 = loadImage("Images/thunderbolt/2.png");
   thunder3 = loadImage("Images/thunderbolt/3.png");
   thunder4 = loadImage("Images/thunderbolt/4.png");
}

function setup(){
  var canvas = createCanvas(600,600);  
    
  engine = Engine.create();
  world = engine.world;

  //Object for umbrella class
  umbrella = new Umbrella(200, 500);

  //For loop used to create object from the drop class and which pushes objects to the drops array
  for(var i = 0; i < maxDrops; i++){
      drops.push(new Drops(random(0,400), random(0,400)));
  }
}

function draw(){
    Engine.update(engine);

    //Create Background
    background(night); 

    //Randomizing the thunder effect using a switch case
    rand = Math.round(random(1,4));

    if(frameCount%80 === 0) {
        createThunderFrame = frameCount;
        Thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: Thunder.addImage(thunder1);
            break;
            case 2: Thunder.addImage(thunder2);
            break;
            case 3: Thunder.addImage(thunder3);
            break;
            case 4: Thunder.addImage(thunder4);
            break;
            default: break;
        }

        Thunder.scale = 0.5;
    }

    //Removing the thunder after 12 frames 
    if(createThunderFrame + 12 === frameCount && Thunder){
        Thunder.destroy();
    }

    //Display the umbrella
    umbrella.display();

    //Display and Updating the drops using their respective functions
    for(var i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    drawSprites();
}      

