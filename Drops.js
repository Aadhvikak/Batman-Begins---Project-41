class Drops{
    //Constructor that takes x and y position for drops
    constructor(x,y){
        var options = {
            'restitution': 0.1,
            'friction': 0.01
        }
        //Circular Matter Body for the drops
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;
        World.add(world, this.body);
    }

    //Update function to reposition the drops when they cross the end of the canvas 
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0, 500), y:random(0,650)});
        }
    }

    //A function that draws an ellipse at the drops position so they can be displayed
    display(){
        noStroke();
        fill(0,0,255);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
    
}