class Slingshot{

  constructor(bodyA,bodyB){
   var options={
     stiffness :0.2,
     length :100,
    bodyA :bodyA,
    bodyB :bodyB    
   }
  
  this.Slingshot = Constraint.create(options)
  World.add(world,this.Slingshot)
  }
  display(){
      var A=this.Slingshot.bodyA.position;
      var B=this.Slingshot.bodyB.position;
   line(A.x,A.y,B.x,B.y)   
  }
}