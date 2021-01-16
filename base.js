class Base {
    constructor(x, y, width, height) {
      var options = {
          isStatic: true,
          density:1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbin.png")
      this.image.scale = 0.5;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      //strokeWeight(2);
      //stroke("black")
      //fill("purple");
      image(this.image,0, 0, this.width,this.height);
      pop();
    }
  };