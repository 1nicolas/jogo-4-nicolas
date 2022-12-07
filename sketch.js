//crie as variaveis dos seus personagens aqui
var player;
var escrivaninha;
var escriIMG
var cama
var camaIMG
var spriescri
var cenarioACE, cenarioAPA, cenarioDES


function preload(){
  //carregue as imagens dos personagens aqui
  escriIMG = loadImage('../assets/pixil-frame-0 (1).png');
  camaIMG = loadImage('../assets/cama.png');
  cenarioACE = loadImage('../assets/cenarioA.png')
  cenarioACE.playing = true
  cenarioDES = loadImage('../assets/cenarioB.png')
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //crie os sprites aqui
  
  cenarioAPA = createSprite(windowWidth/2,windowHeight/2)
  cenarioAPA.shapeColor = ('green')
  cenarioAPA.addImage('piscada', cenarioACE)
  cenarioAPA.addImage('desligado', cenarioDES)
  cenarioAPA.scale = 0.35
  frameRate(80)
  cenarioAPA.frameDelay = 90
  
  
  
  

  
  

  
  player = createSprite(width/2,height/2,250,500);
  player.shapeColor = "green";
  
  
  
  
  

}

function draw() {
  background('gray'); 

  if(keyDown('w')){
    player.y -=20
  }
  if(keyDown('s')){
    player.y +=20
  }
  if(keyDown('a')){
    player.x -=20
  }
  if(keyDown('d')){
    player.x +=20
  }

  MD()
    
  
  
  edges = createEdgeSprites()
  player.bounceOff(edges)
  
  

  drawSprites();
}
function MD(){
  setTimeout(function(){
    cenarioAPA.changeImage('desligado')
  },5000)
  console.log('entrou aqui')
}
