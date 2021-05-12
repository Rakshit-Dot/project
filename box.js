class Box {
    constructor(x, y,width,height,angle) {
      var options = {
        'density':0.1,
        'friction': 0.1,
        'restitution':0.3
      };
      this.body = Bodies.rectangle(x, y, width,height,angle, options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body,PI/2)
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('black')
      fill('brown')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };