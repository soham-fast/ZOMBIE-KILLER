function play(){
    background(strtImg);
    tank=createSprite(windowWidth/2,windowHeight/1.5);
   
    tank.addImage(tankImg);
   // tank.addImage("right",TRImg);
    //tank.addImage("left",LRImg);
    function keyPressed(){
if(keyDown("s")){
    console.log("hi")
}
    }
    /*if(keyWentDown(RIGHT_ARROW)){
       tank.rotation=90;
       console.log("right")

    }else if(keyDown("left")){
        tank.changeImage("left",LRImg);
    }*/

    Aim=createSprite(windowWidth/2,windowHeight/2);
    Aim.addImage(aimImg);
    Aim.scale=0.2

    Aim.x=mouseX;
    Aim.y=mouseY;
}