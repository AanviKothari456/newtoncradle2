class Rope{
    constructor(bodyA, pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
         length:220
        }
       
        this.pointB = pointB;
        this.pointX=bodyA.x;
        this.pointY=bodyA.y-250;
    
        this.rope1=Constraint.create(options);
        
       
World.add(world,this.rope1);
    }

    display(){
       
if (this.rope1.bodyA){
    var pointA=this.rope1.bodyA.position;
    var pointB=this.pointB;
        
    push();

    stroke('cyan');
    strokeWeight(3);
line(pointB.x, pointB.y, pointA.x, pointA.y);
    pop();

}


    }
    attach(body){
        this.rope1.bodyA=body;
    }
    fly(){
this.rope1.bodyA=null;
    }
    }