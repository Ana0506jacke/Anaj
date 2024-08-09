function setup() {
    createCanvas(600, 600);
     background("BLACK");
  }
  
  function draw() {
    stroke ("PURPLE");
    fill ("ORANGE");
   
    if(mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
  
  }
  