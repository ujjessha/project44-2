var shirt;
var fits;
var collarR,collarM;
var form,player;
var database
var buttonImg,pocketImg;

function preLoad(){
   buttonImg=loadImage("Button.png");
   pocketImg=loadImage("pocket.jpg");
}


function setup() {
  createCanvas(800,800);
 // database=firebase.database();

  textSize(52);   
  fits=createSelect();
  collarR=createSelect();
  collarM=createSelect();
  fits.position(200,200);
  fits.option('choose');
  fits.option('regular');
  fits.option('modern');
  fits.option('slim');
  fits.option('classic');
  fits.changed(mySelectEvent);
 
   /*form=new Form();
   player=new Player();
   button=createSprite(300,600,30,30);
  button.addImage(buttonImg);
   pocket=createSprite(400,600,20,20);
   pocket.addImage(pocketImg);
 */
}


function mySelectEvent(){
  var shirtFit=fits.value();
  if(shirtFit===regular){
    text("fit is regular",200,200);
  }else if(shirtFit===modern){
    text("fit is modern",200,200);

  }else if(shirtFit===slim){
    text("fit is slim",200,200);
  }else if(shirtFit===classic){
    text("fit is classic",200,200);

  }

  
}
function draw() {
  background(255,255,255);  

 
 
}
