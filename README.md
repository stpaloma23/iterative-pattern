# iterative-pattern
I wanted to create a iterative pattern with rectangles. I wanted the rectangles to get gradually smaller and change positin. I also wanted to position of the rectangles to be slightly askew. I also wanted to use a gradient to show the different rectangles. 
Initially I did not plan for it to looklike there are two different spirals going on, but i like the way it came out.


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

