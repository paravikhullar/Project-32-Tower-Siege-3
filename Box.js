class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    this.image = loadImage("boxbox.png");
    this.visibility = 255;
    }

  display(){

    //console.log(this.body.speed);
    if(this.body.speed<4){
        super.display();
      }

      else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility-5;
        tint(255, this.visibility);
        image(this.image,this.body.position.x, this.body.position.y, 70,70);
        pop();
      }
    }

    score(){
      if(this.visibility<0 && this.visibility>-105){
        score++;
      }
    }
  
  
  };

// class Box{
//     constructor(x, y, width, height, color) {
//         var options = {
//             'restitution':0.2,
//             'friction':3,
//             'density':1.0
//         }
//         this.body = Matter.Bodies.rectangle(x, y, width, height, options);
//         this.width = width;
//         this.height = height;
//         this.color = color;
//         // this.image = loadImage("base.jpg");
//         World.add(world, this.body);
//       }
//       display(){
//         var angle = this.body.angle;
//         push();
//         translate(this.body.position.x, this.body.position.y);
//         rotate(angle);
//         rectMode(CENTER);
//         fill("lightblue");
//         rect(0,0,this.width,this.height);
//         // imageMode(CENTER);
//         // image(this.image, 0, 0, this.width, this.height);
//         pop();
//       }
//   }