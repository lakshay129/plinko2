const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;

 var engine, world;
 var ground1;
 var plinko1=[];
 var division1=[];
 var particle1;
 var score =0;
 var turn=0;
 var PLAY=1;
 var END =0;
 var gameState=PLAY;
  

function setup() {
 createCanvas(550,800);
 engine = Engine.create();
 world = engine.world;
 ground1=new ground(width/2,height,width,20);
 
 

 for (var i=7; i<=width;i=i+67){
    division1.push(new division(i,700,10,180));
  }

 for(var k=30;k<=width;k=k+70){
     plinko1.push(new plinko(k,200))
  }
  
 for(var k=17;k<=width;k=k+70){
    plinko1.push(new plinko(k,300))
 }
 
 for(var k=30;k<=width;k=k+60){
  plinko1.push(new plinko(k,400))
}

for(var k=20;k<=width;k=k+70){
  plinko1.push(new plinko(k,500))
}


}

function draw() {
  background("black"); 
  Engine.update(engine); 
  ground1.display();
  
  for (var r=0; r<division1.length;r++){
    division1[r].display();
  }
  for (var r=0; r<plinko1.length;r++){
    plinko1[r].display();
  }
  

  textSize(23)
  text ("200",19,637)

  textSize(23)
  text ("200",83,637)

  textSize(23)
  text ("2000",149,637)

  textSize(23)
  text ("2000",219,637)

  textSize(23)
  text ("2000",280,637)

  textSize(23)
  text ("500",347,637)

  textSize(23)
  text ("500",420,637)

  textSize(23)
  text ("1000",480,637)

  textSize(25)
  text("TURN ="+turn,300,80);

  textSize(25)
  text("SCORE ="+score,100,80);



 // for (var r=0; r<particle1.length;r++){
   // particle1[r].display();
  //}


  stroke ("yellow");
  line (0,600,550,600); 
}

function mouseClicked(){
  console.log("mousePressed1");
 if(gameState===PLAY){
  console.log("mousePressed");
   turn++;
   particle1=new particle(mouseX,40);
   particle1.display();
  
   
 }

}