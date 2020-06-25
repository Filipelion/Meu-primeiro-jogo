let imagemCenario;
let imagemPersonagem;
let imagemInimigo;

let cenario;
let somDoJogo;
let somPulo;
let personagem;
let inimigo;

let matrixPersonagem;
let matrixInimigo;

function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
  matrixPersonagem = matrixFuncion(4, 4, 220, 270);
  matrixInimigo = matrixFuncion(7, 4, 104, 104);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(matrixPersonagem, imagemPersonagem, 0, 110, 135, 220, 270);
  inimigo = new Inimigo(matrixInimigo, imagemInimigo, windowWidth - 52, 52, 52, 104, 104);
  somDoJogo.loop();
  frameRate(30);
  
}

function keyPressed() {
  if(key === 'ArrowUp'){
    personagem.pula();
    somPulo.play();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  personagem.aplicaGravidade();
  inimigo.exibe();
  inimigo.move();

  if(personagem.estaColidindo(inimigo)) {
    console.log('Colidiu');
    noLoop();

  }
}

function matrixFuncion(lin, col, largura, altura){
  var matrix = []

  for (var i = 0; i < lin; i++){
      for(var j=0; j < col; j++) {
          matrix.push([j*largura, i*altura]);
      }
  }
  return matrix;
}