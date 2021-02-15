class Bird {
    constructor(x, y ) {
      var options = {
          'restitution':0.8,
          friction:1,
          density:1
      
         
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width =50;
      this.height =50;
      
      World.add(world, this.body);
    }
    display(){
      //namespacing or nicknaming
      var pos =this.body.position;
      pos.x=mouseX
      pos.y=mouseY
      var angle = this.body.angle
      //to start applying changes from this point
      push();
      //to translate the x and y position 
      translate(pos.x,pos.y);
      //to rotate it at a particular angle
      rotate(angle)
      //to make x and y to center of the rectangle
      rectMode(CENTER);
      fill("red");
      rect(0,0, this.width, this.height);
     // to stop applying changes from this point
      pop();
    }
  };
  