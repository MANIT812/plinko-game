const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground1;
var divisions=[];
var plinko1=[];
var particle=null;
var ascore=0;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ground1=new Ground(400,390,800,20);
  for(var i=10; i<800; i=i+80){
    divisions.push(new Division(i,330));
  }
  for(var x=20; x<800; x=x+40){
    plinko1.push(new Plinko(x,50));
  }
  for(var l=10; l<800; l=l+40){
    plinko1.push(new Plinko(l,80));
  }
  for(var f=20; f<800; f=f+40){
    plinko1.push(new Plinko(f,110));
  }
  for(var a=10; a<800; a=a+40){
    plinko1.push(new Plinko(a,140));
  }
  for(var f=20; f<800; f=f+40){
    plinko1.push(new Plinko(f,170));
  }
  for(var a=10; a<800; a=a+40){
    plinko1.push(new Plinko(a,200));
  }
  for(var f=20; f<800; f=f+40){
    plinko1.push(new Plinko(f,230));
  }
  for(var a=10; a<800; a=a+40){
    plinko1.push(new Plinko(a,260));
    
  }
  
}

function draw() {
  background("black");  
  Engine.update(engine);
  ground1.display();
  for(var j=0; j<divisions.length; j++){
    divisions[j].display();
  }
  for (var n=0; n<plinko1.length; n++){
    plinko1[n].display();
  }
  if(particle!=null){
    particle.display();
    console.log("the")
  }
score();
  textSize(20);
  text("500",40,300);
  text("500",100,300);
  text("500",200,300);
  text("200",280,300);
  text("200",350,300);
  text("200",430,300);
  text("100",500,300);
  text("100",580,300);
  text("100",680,300);
  text(ascore,100,25);
}
function keyPressed(){
  if(keyCode===32){
       console.log("was")
       particle=new Particle(mouseX,10);
  }
}
