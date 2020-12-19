//Create variables here

function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  
Foodstock=database.ref('Food');
Foodstock.on("value",readStock);



}


function draw() {  

  drawSprites();
  //add styles here
textSize
fill()
skroke()



if(keyWentDown(UP_ARROW)){
writeStock(FoodS);
dogs.addImage(dogHappy);

}



}
function readStock(data){



}

function writeStock(x){

if(x<=0){

  x=0;
}else{

x=x-1;

}

database.ref('/').update({

Food:x

})


}



