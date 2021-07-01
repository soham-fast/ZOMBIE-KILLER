var score=0;

function info(){
    background(infoImg);
    stButton.hide();
   
   


    //coinRect=createSprite(windowWidth/6,windowHeight/11,150,25);
    //coinRect.shapeColor="white";

    

    coin=createSprite(windowWidth/14,windowHeight/11)
    coin.addImage(coinImg);
    coin.scale=0.3
    textSize(30);
    stroke("yellow") 
    textFont("impact")
    text(score,windowWidth/10,windowHeight/9);
    

    shop=createButton("shop");
    shop.position(windowWidth/1.1,windowHeight/11);
    shop.mousePressed(()=>{
        console.log("shop")
        shop1();
        shop.hide();
        playBt.hide(); 
        stroke("yellow") 
    textFont("impact")
    text(score,windowWidth/10,windowHeight/9); 
    })

    playBt=createButton("PLAY");
    playBt.position(windowWidth/1.1,windowHeight/1.1,10,10)
    playBt.mousePressed(()=>{
        play();
        console.log("PLAY")
       // gameState="gamePlay";
        
        
        shop.hide();
        playBt.hide(); 
        coin.destroy(); 
    })

    
}