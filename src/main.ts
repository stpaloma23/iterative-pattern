import * as PIXI from "pixi.js"

const load = (app: PIXI.Application) => {
  return new Promise<void>((resolve) => {
      app.loader.add('assets/hello-world.png').load(() => {
          resolve();
      });
  });
};

const main = async () => {
  // Actual app
  let app = new PIXI.Application(); //making a new pixijs application 

  // Display application properly
  document.body.style.margin = '0';
  app.renderer.view.style.position = 'absolute';
  app.renderer.view.style.display = 'block';

  // View size = windows
  app.renderer.resize(window.innerWidth, window.innerHeight);

  // Load assets
  await load(app);

  let container = new PIXI.Container();
  app.stage.addChild(container) ;

  let colorGradient = [0x8651bd,0x7b49b7,0x6f41b2,0x6339ac,0x5631a6,0x492aa1,0x3a239b,0x271c96,0x3a239b,0x492aa1,0x5631a6,0x6339ac,0x6f41b2,0x7b49b7,0x8651bd];
  let gradIndex = 0; 
  let currWidth = screen.width;
  let currHeight = screen.height;
  let posiitonOne = 0;
  let positionTwo = 0;


  // adding first rectangle to the drawing
  let draw = new PIXI.Graphics();
  draw.beginFill(colorGradient[gradIndex]);
  draw.drawRect(0,0,currWidth,currHeight);
  app.stage.addChild(draw);
  gradIndex++; 
  let bool = true

  while(bool){
    // when to stop the whole loop 
    if (currWidth < (screen.width/50) ){
      bool = false
      break
    }
    
    currHeight -=10;
    currWidth -=10;
    posiitonOne += 4;
    positionTwo += 4;
    let rect = new PIXI.Graphics();
    rect.beginFill(colorGradient[gradIndex]);
    rect.drawRect(posiitonOne,positionTwo,currWidth,currHeight);
    app.stage.addChild(rect);
    gradIndex ++;
    // making sure the gradient is repeating
    if(gradIndex == colorGradient.length){
      gradIndex = 0;
    }
  }
  // // Handle window resizing
  window.addEventListener('resize', (_e) => {
      app.renderer.resize(window.innerWidth, window.innerHeight);
    container.x = window.innerWidth/2;
    container.y = window.innerHeight/2;
  });

  document.body.appendChild(app.view);

};

main();

