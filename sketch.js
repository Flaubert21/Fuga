var player,enemy,cloud,thunders
var background




function setup(){
createCanvas(windowsWidth,windowsHeigth);

player = createSprite(40,40,width/2,height/2);
enemy = createSprite(40,40,width/2 + 200, height/2);
cloud = createSprite(50,50,width/2 + 100, height/2 - 50);
thurders = createSprite(30,30,width/2 + 250,height/2);

}


function draw(){
background("black");
drawSprites();
 
}
