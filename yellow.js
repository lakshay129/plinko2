class yellow{
    constructor(x,y){

    this.width=600;
    this.height=3;

    this.body=Bodies.rectangle(x,y,this.width,this.height,{isStatic:true});
    World.add (world,this.body)
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill ("yellow");
        rect(pos.x,pos.y,this.width,this.height);
    }
}