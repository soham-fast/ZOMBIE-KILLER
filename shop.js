function shop1(){
    background(shopImg);

    backBt=createButton("BACK")
    backBt.position(windowWidth/1.1,windowHeight/11);
    backBt.mousePressed(()=>{
        info();
        backBt.hide();
        attachment.hide();
        
        tank1.destroy();
        tank2.destroy();
        tank3.destroy();
        tank4.destroy();

        tank1Bt.hide();
        tank2Bt.hide();
        tank3Bt.hide();
        tank4Bt.hide();

        gun1.destroy();
        gun2.destroy();
        gun3.destroy();
        gun4.destroy();

        gun1Bt.hide();
        gun2Bt.hide();
        gun3Bt.hide();
        gun4Bt.hide();

    })
   
    attachment=createButton("GUNS");
    attachment.position(windowWidth/1.3,windowHeight/11);
    attachment.mousePressed(()=>{
        shop2();
        attachment.hide();
        console.log("guns")

        tank1.destroy();
        tank2.destroy();
        tank3.destroy();
        tank4.destroy();

        tank1Bt.hide();
        tank2Bt.hide();
        tank3Bt.hide();
        tank4Bt.hide();
        
    })
  
  tank1=createSprite(windowWidth/5,windowHeight/3);
  tank1.addImage(tank1Img);
  tank1.scale=1.5
    
  tank2=createSprite(windowWidth/2.5,windowHeight/3.1);
  tank2.addImage(tank2Img);
  tank2.scale=1.4
  
  tank3=createSprite(windowWidth/1.6,windowHeight/3.2);
  tank3.addImage(tank3Img);
  tank3.scale=1.5

  tank4=createSprite(windowWidth/1.2,windowHeight/3.4);
  tank4.addImage(tank4Img);
  tank4.scale=1.5

  tank1Bt = createButton("PURCHASE");
  tank1Bt.position(windowWidth/6,windowHeight/2);

  tank2Bt = createButton("PURCHASE");
  tank2Bt.position(windowWidth/2.8,windowHeight/2)

  tank3Bt = createButton("PURCHASE");
  tank3Bt.position(windowWidth/1.7,windowHeight/2)

  tank4Bt = createButton("PURCHASE");
  tank4Bt.position(windowWidth/1.3,windowHeight/2)

  text("$1500",windowWidth/6,windowHeight/1.7); 
  text("$2000",windowWidth/2.8,windowHeight/1.7); 
  text("$3000",windowWidth/1.7,windowHeight/1.7); 
  text("$5000",windowWidth/1.3,windowHeight/1.7); 
}