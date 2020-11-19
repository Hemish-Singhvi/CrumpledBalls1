class Paper {
    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':1.2,
            //'isStatic':true
        }
        this.body = Bodies.circle(x, y, radius, options);
        fill("purple");
        this.radius = radius;
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        ellipse(0, 0, this.width, this.height);
        pop();
    }
}