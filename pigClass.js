class pigClass 
{

    constructor(x,y)
    {
        var pig_Options = {

            restitution:0.8,
            friction:0.3,
            density:1.5
          
        }



     this.body = Bodies.rectangle(x,y,50,50,pig_Options)
     this.width = 50
     this.height = 50
     World.add(worldV,this.body)
    }

    display()
    {
       var angle = this.body.angle
       var pos = this.body.position
     
       push()
       translate(pos.x,pos.y)

       angleMode(RADIANS)
       rotate(angle)
       

       rectMode(CENTER)
       strokeWeight(2)
       stroke("black")
       fill("green")
       rect(0,0,this.width,this.height)
       pop()
    }
    
}