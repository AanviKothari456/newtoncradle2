 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
 
function preload()
{
  
}
var bob1,bob2,bob3,bob4,bob5,roof,chain1,chain2,chain3,chain4,chain5;
function setup() {
   canvas= createCanvas(1200,600);
 
 
   engine = Engine.create();
   world = engine.world;
 
 /* let canvasmouse=Mouse.create(canvas.elt)
  canvasmouse.pixelRatio=pixelDensity();
  let options={
     mouse: canvasmouse
  }
  mConstraint=MouseConstraint.create(engine,options);
  World.add(world,mConstraint);
   //Create the Bodies Here.
    */
   roof = new Roof(480,135,500,20);

 
var bobStartingX= 600
var bobStartingY= 200
var bobDiameter=40
 
 /*  bob1 = new Bob(bobStartingX-bobDiameter*2,bobStartingY+350,bobDiameter)
   bob2 = new Bob(bobStartingX-bobDiameter,bobStartingY+350,bobDiameter)
   bob3 = new Bob(bobStartingX,bobStartingY+350,bobDiameter)
   bob4 = new Bob(bobStartingX+bobDiameter,bobStartingY+350,bobDiameter)
   bob5 = new Bob(bobStartingX+bobDiameter*2,bobStartingY+350,bobDiameter)
   */
  /*
   rope2 = new chain(ball1.body,roof.body,-80,0)
   rope3 = new chain(ball2.body,roof.body,-40,0)
   rope4 = new chain(ball3.body,roof.body,0,0)
   rope5 = new chain(ball4.body,roof.body,+40,0)
  rope6 = new chain(ball5.body,roof.body,+80,0)
  */
   ball1=new Ball(280,400,100);
   ball2=new Ball(380,400,100);
   ball3=new Ball(480,400,100);
   ball4=new Ball(580,400,100);
   ball5=new Ball(680,400,100);
   
   rope2=new Rope(ball1.body,{x:280,y:150});
   rope3=new Rope(ball2.body,{x:380,y:150});
   rope4=new Rope(ball3.body,{x:480,y:150});
   rope5=new Rope(ball4.body,{x:580,y:150});
   rope6=new Rope(ball5.body,{x:680,y:150});
 
   Engine.run(engine);
 }
 
 
function draw() {
   

   background('pink');
/* bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 */
/*chain1.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();
*/
rope2.display();
rope3.display();
rope4.display();
rope5.display();
rope6.display();

ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();
 roof.display();

  drawSprites();
}
 
function keyPressed() {
   if (keyCode === UP_ARROW) {
      Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:-100})
    
    }
  }
  function mouseDragged(){
   Matter.Body.setPosition(ball1.body, {x:mouseX, y:mouseY});
 
 }
 
 /*function KeyPressed(){
   if (keyCode===32){
     rope.attach(ball.body);
 
   }
 
 
 }
 */
 
 function MouseReleased(){
   rope.fly();
 }
 

