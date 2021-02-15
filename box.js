class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        friction:1,
        density:1
    
       
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    //namespacing or nicknaming
    var pos =this.body.position;
    var angle = this.body.angle
    //to start applying changes from this point
    push();
    //to translate the x and y position 
    translate(pos.x,pos.y);
    //to rotate it at a particular angle
    rotate(angle)
    //to make x and y to center of the rectangle
    rectMode(CENTER);
    fill("blue");
    rect(0,0, this.width, this.height);
   // to stop applying changes from this point
    pop();
  }
};
