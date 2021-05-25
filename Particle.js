class Particle{
    constructor(x,y){
        var options={
            restitution:0.1
        }
        this.body=Bodies.circle(x,y,5,options);
        this.radius=5;
        World.add(world,this.body);

    }
    display(){
 
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        fill("red")
        ellipseMode(RADIUS);
        ellipse(0,0,5,5);
        pop();
    }
}