var bg , bgIMG;
var cat,mouse;
var catIMG1 , catIMG2 , catIMG3 ;
var mouseIMG1 , mouseIMG2 , mouseIMG3;


function preload() {
    //load the images here
   bgIMG = loadImage("garden.png");

   catIMG1 = loadAnimation("tomOne.png");
   catIMG2 = loadAnimation("tomTwo.png","tomThree.png");
   catIMG3 = loadAnimation("tomFour.png");
   mouseIMG1 = loadAnimation("jerryOne.png");
   mouseIMG2 = loadAnimation("jerryTwo.png","jerryThree.png");
   mouseIMG3 = loadAnimation("jerryFour.png")



}

function setup(){
    createCanvas(1000,800);
    
    bg = createSprite(500,400,1000,800);
    bg.addImage("bg",bgIMG);
    
    cat = createSprite(870,600);
    cat.addAnimation("tomSleeping",catIMG1);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("jerryStanding",mouseIMG1);
    mouse.scale = 0.15;

    

}

function draw() {

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

        cat.velocityX = 0;
        cat.addAnimation("tomLastImage",catIMG3);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("tomLastImage");
        mouse.addAnimation("jerryLastImage",mouseIMG3);
        mouse.scale = 0.15;
        mouse.changeAnimation("jerryLastImage");
    }
    

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("tomRunning",catIMG2);
        cat.changeAnimation("tomRunning");

        mouse.addAnimation("jerryTeasing",mouseIMG2);
        mouse.changeAnimation("jerryTeasing");
    }

  

}
