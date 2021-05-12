const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var box;
var square;
var circle;




function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    box=new Box(350,500,70,100,PI/2);
   square=new Square(700,500,100,100);
   circle= new Circle(900,500,69);
 



  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    box.display();
    square.display();
    circle.display();
    
    

    
 
}