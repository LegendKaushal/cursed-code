//Namespacing to a simpler format
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engineV,worldV;
var ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var redBird;

function setup() {
  createCanvas(1200,1000);
  engineV = Engine.create();
  worldV=engineV.world;


  //obeject -- physical obj vs displayed obj


  box1 = new boxClass(700,320,70,70)
  box2 = new boxClass(920,320,70,70)
  console.log("step1")

  box3 = new boxClass(700,240,70,70)
  box4 = new boxClass(920,240,70,70)
  console.log("step2")

  box5 = new boxClass(810,160,70,70)

  ground = new grounds(600,390,1200,20)
  console.log("step3")
  pig1 = new pigClass(810,350)

  pig2 = new pigClass(810,220)
  console.log("step4")
  log1 = new logClass(810,260,300,PI/2)
  

  log2 = new logClass(810,180,300,PI/2)

  console.log("step5")

  log3 = new logClass(760,120,150,PI/7)
  log4 = new logClass(870,120,150,-PI/7)
console.log("step6")
  redBird = new birdClass(0,0)
  console.log("step7")
  }



function draw() {
  background("lightgreen"); 
  Engine.update(engineV);
 

  box1.display()
  console.log("box1")

  box2.display()
  

  box3.display()
  box4.display()
  box5.display()

  console.log("step8")

  ground.display()
  
  pig1.display()
  pig2.display()

  console.log("step9")
  log2.display()

  log1.display()
  log3.display()
  log4.display()

  redBird.display()
  console.log("step10")
}