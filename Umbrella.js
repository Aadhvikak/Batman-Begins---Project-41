class Umbrella{
    //Constructor that takes x and y position 
    constructor(x,y){
        var options = {
            'isStatic': true,
        }

        //Circular Matter Body for the umbrella
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        World.add(world, this.body);
        //Loaded Image of the boy with the umbrella
        this.image = LoadImage("Images/WalkingFrame/walking_1.png","Images/WalkingFrame/walking_2.png","Images/WalkingFrame/walking_3.png","Images/WalkingFrame/walking_4.png","Images/WalkingFrame/walking_5.png","Images/WalkingFrame/walking_6.png","Images/WalkingFrame/walking_7.png","Images/WalkingFrame/walking_8.png",)
    }

    //A function to display the body
    display(){
        var posit = this.body.position;
        imageMode(CENTER);
        image(this.image, posit.x, posit.y+70,300,300);
    }
}