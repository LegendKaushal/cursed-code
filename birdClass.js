class birdClass 
{

    constructor(x,y)
    {
        var bird_options = {

            restitution:0.8,
            friction:0.3,
            density:1.5
          
        }



     this.body = Bodies.rectangle(x,y,50,50,bird_options)
     this.width = 50
     this.height = 50
     World.add(worldV,this.body)
    }

    display()
    {
       var angle = this.body.angle
       var pos = this.body.position
       pos.x = mouseX
       pos.y = mouseY

       push()
       translate(pos.x,pos.y)

       angleMode(RADIANS)
       rotate(angle)
       

       rectMode(CENTER)
       strokeWeight(2)
       stroke("black")
       fill("red")
       rect(0,0,this.width,this.height)
       pop()
    }
    
}