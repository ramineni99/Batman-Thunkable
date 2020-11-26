var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3803e79c-b3be-4434-a66e-dec179a69a94","503c8a04-2e68-41cc-a58a-1ec2b5d902b8","7890c219-bf94-4b30-b87f-782b91e34caa","08891578-8ca5-4043-b642-6e6596d53be3"],"propsByKey":{"3803e79c-b3be-4434-a66e-dec179a69a94":{"name":"batman","sourceUrl":null,"frameSize":{"x":303,"y":462},"frameCount":3,"looping":true,"frameDelay":12,"version":"CDS1vYbhGS9CjI.JfeDxwc7BX6VX4RGh","loadedFromSource":true,"saved":true,"sourceSize":{"x":606,"y":924},"rootRelativePath":"assets/3803e79c-b3be-4434-a66e-dec179a69a94.png"},"503c8a04-2e68-41cc-a58a-1ec2b5d902b8":{"name":"batmanJump","sourceUrl":null,"frameSize":{"x":303,"y":462},"frameCount":1,"looping":true,"frameDelay":12,"version":"SdIpsuyrslQvmhIn.El.syUuPdNZBauw","loadedFromSource":true,"saved":true,"sourceSize":{"x":303,"y":462},"rootRelativePath":"assets/503c8a04-2e68-41cc-a58a-1ec2b5d902b8.png"},"7890c219-bf94-4b30-b87f-782b91e34caa":{"name":"batarang","sourceUrl":null,"frameSize":{"x":750,"y":650},"frameCount":1,"looping":true,"frameDelay":12,"version":"YChKnulNBkLV9RTxBqRZtb7XZ.ibI6Rk","loadedFromSource":true,"saved":true,"sourceSize":{"x":750,"y":650},"rootRelativePath":"assets/7890c219-bf94-4b30-b87f-782b91e34caa.png"},"08891578-8ca5-4043-b642-6e6596d53be3":{"name":"background","sourceUrl":null,"frameSize":{"x":1097,"y":708},"frameCount":1,"looping":true,"frameDelay":12,"version":"p1nggeULShOjVnTQFqpLQdbw0bnuDJhv","loadedFromSource":true,"saved":true,"sourceSize":{"x":1097,"y":708},"rootRelativePath":"assets/08891578-8ca5-4043-b642-6e6596d53be3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var batman=createSprite(10,300,50,50);
 var picture = createSprite(200,700,100,100);
 var PLAY = 1;
var END = 0;
var gameState=PLAY;
var score=0;
var batGroup = createGroup();
 batman.setAnimation("batman");
 picture.setAnimation("background");
 picture.scale=2;
  picture.depth=0;
  batman.setCollider("circle",5,0,10);
  batman.scale=(2.5);
  var ground = createSprite(200,390,400,20);
  ground.visible=false;
function draw() {
  background("black");
  if(gameState==PLAY){
    batman.velocityX=1;
    ground.width=ground.width+200;
    camera.x=batman.x;
    picture.velocityX=-2;
    if(picture.x<batman.x/2-50){
      picture.x=batman.x;
    }
    score=score+1;

  if(keyDown("space")){
    playSound("assets/category_jump/ninja_jump_2.mp3");
    batman.velocityY=-10;
  }
     batman.velocityY=batman.velocityY+0.5;
     batman.collide(ground);
       if(batGroup.isTouching(batman)){
         playSound("assets/category_male_voiceover/game_over_male.mp3");
         gameState=END;
       }
     spawnBatarangs();
     drawSprites();
     fill("white");
     textSize(20);
     text("Score:"+score,camera.x+50,camera.y-150);
     noFill();
     
  }
  else if(gameState==END){
    background("purple");
    textSize(30);
    text("GAME OVER",110,200);
  }
 
}

function spawnBatarangs(){
  if(World.frameCount%150==0){
  var batarang = createSprite(400,300,50,50);
  batarang.y=randomNumber(20,320);
  batarang.setAnimation("batarang");
  batarang.scale=0.3;
  batarang.setCollider("rectangle",0,0,40,40);
  batarang.velocityX=-2;
  batarang.lifetime=250;
  batGroup.add(batarang);
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
