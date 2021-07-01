function shop2(){
    background(shopImg);
    stroke("yellow") 
    textFont("impact")
    text(score,windowWidth/10,windowHeight/9); 

  gun1=createSprite(windowWidth/5,windowHeight/3);
  gun1.addImage(gun1Img);
  gun1.scale=1.5
    
  gun2=createSprite(windowWidth/2.5,windowHeight/3.1);
  gun2.addImage(gun2Img);
  gun2.scale=1.4
  
  gun3=createSprite(windowWidth/1.6,windowHeight/3.2);
  gun3.addImage(gun3Img);
  gun3.scale=1.5

  gun4=createSprite(windowWidth/1.2,windowHeight/3.4);
  gun4.addImage(gun4Img);
  gun4.scale=1.5

  gun1Bt = createButton("PURCHASE");
  gun1Bt.position(windowWidth/6,windowHeight/2);

  gun2Bt = createButton("PURCHASE");
  gun2Bt.position(windowWidth/2.8,windowHeight/2)

  gun3Bt = createButton("PURCHASE");
  gun3Bt.position(windowWidth/1.7,windowHeight/2)

  gun4Bt = createButton("PURCHASE");
  gun4Bt.position(windowWidth/1.3,windowHeight/2)

  text("$500",windowWidth/6,windowHeight/1.7); 
  text("$1500",windowWidth/2.8,windowHeight/1.7); 
  text("$2000",windowWidth/1.7,windowHeight/1.7); 
  text("$3000",windowWidth/1.3,windowHeight/1.7); 


}