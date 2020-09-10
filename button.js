class Button{
    constructor(x,y,width,height){
        var options={

        isStatic:true
        }
    
   this.x=x;
   this.y=y;
    this.width=width;
    this.height=height;
   

}

    display(){

     rect(this.x,this.y,50,50);
    }
}