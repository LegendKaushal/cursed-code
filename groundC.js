class grounds
{

    constructor(x,y,width,height)
    {
        var ground_Z = {

           isStatic:true
          }

     this.body = Bodies.rectangle(x,y,width,height,ground_Z)
     this.width = width
     this.height = height
     World.add(worldV,this.body)
    }

    display()
    {
       var pos = this.body.position
     
       rectMode(CENTER)
       fill("black")
       rect(pos.x,pos.y,this.width,this.height)
       
    }

}