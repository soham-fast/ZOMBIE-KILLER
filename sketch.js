
var gameState = "open";

var zombie,tank,zomImg,tankImg,TRImg,LRImg;
var stryImg,infoImg,strtImg,shopImg;
var coinImg,playImg,aimImg;

var gun1Img,gun2Img,gun3Img,gun4Img;
var tank1Img,tank2Img,tank3Img,tank4Img;
var score=0;
 //var stButtonImg;


function preload(){
  zomImg=loadAnimation("images/z1.png","images/z2.png","images/z3.png","images/z4.png","images/z5.png","images/z6.png","images/z7.png",);
  tankImg= loadImage("images/tank.png");
  TRImg=loadImage("images/TR.png");
  LRImg=loadImage("images/LR.png");
  aimImg=loadImage("images/aim.png")

  gun1Img= loadImage("images/prj11.png");
  gun2Img= loadImage("images/prj (2).png");
  gun3Img= loadImage("images/prj (5).png");
  gun4Img= loadImage("images/prj (8).png");

  tank1Img= loadImage("images/prj10.png");
  tank2Img= loadImage("images/prj12.png");
  tank3Img= loadImage("images/prj (1).png");
  tank4Img= loadImage("images/prj (3).png");



  stryImg= loadImage("images/bg.png");
  infoImg= loadImage("images/zk info bg.jpg");
  strtImg= loadImage("images/playbg.jpg");
  shopImg= loadImage("images/shopbg.jpg")

  coinImg= loadImage("images/coin.png");
  //shopImg = loadImage("images/shop.png");
  playImg = loadImage("images/playbt.png");


}

function setup() {
  createCanvas(windowWidth,windowHeight);
   stButton=createButton("START");
   stButton.position(windowWidth/2,windowHeight-100)
  
}

function draw() {
  //trex.debug = true;

  
  if (gameState === "open"){
    background(stryImg);
   stButton.mousePressed(()=>{
     gameState = "info"
     console.log("yes");
     info()
   })

}
  
  
  drawSprites();

  
}

