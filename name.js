var speed = 0.01;

// function windowResized() {
  // resizeCanvas(windowWidth, windowHeight);
// }

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.style("z-index", "-1000");
  canvas.elt.style.position = "fixed";
  canvas.style("top", "0");
  canvas.style("left", "0");
  camera(0, -200, 1000, 0, 0, 0, 0, 1, 0);
  // normalMaterial();
  //debugMode();
}

function draw() {
  if (width < 600) {
    return
  }
  background(255);
  // fill(210)
  stroke(0)
  strokeWeight(1.25);
  translate(windowWidth-600, -250)
  // scale(0.85);

  // ㅅ
  push();
  rotateY(frameCount * speed);
  rotateX(frameCount * speed);
  cone(75, -50);
  pop();

  // ㅡ
  translate(0, 100, 0);
  push();
  rotateX(frameCount * speed);
  rotateY(frameCount * speed);
  box(150, 10, 10);
  pop();


  // ㅌ
  push();
  translate(0, 100, 0);
  rotateZ(frameCount * speed);
  box(10, 77, 10);
  pop();

  push();
  translate(30, 65.5, 0);
  rotateX(frameCount * speed);
  rotateY(frameCount * speed);
  box(70, 10, 10);
  pop();

  push();
  translate(30, 100, 0);
  rotateY(frameCount * speed);
  box(70, 10, 10);
  pop();

  push();
  translate(30, 135, 0);
  rotateZ(frameCount * speed);
  box(70, 10, 10);
  pop();


  // ㅔ
  push();
  translate(110, 100, 0);
  rotateX(frameCount * speed);
  box(10, 100, 10);
  pop();

  push();
  translate(130, 100, 0);
  rotateZ(frameCount * speed);
  box(10, 100, 10);
  pop();

  push();
  translate(100, 100, 0);
  rotateY(frameCount * speed);
  box(30, 10, 10);
  pop();


  // ㄹ
  push();
  translate(90, 175, 0);
  rotateY(frameCount * speed);
  box(90, 10, 10);
  pop();

  push();
  translate(90, 205, 0);
  rotateX(frameCount * speed);
  box(90, 10, 10);
  pop();

  push();
  translate(90, 230, 0);
  rotateZ(frameCount * speed);
  box(90, 10, 10);
  pop();

  push();
  translate(130, 190, 0);
  rotateY(frameCount * speed);
  box(10, 30, 10);
  pop();

  push();
  translate(50, 215, 0);
  rotateZ(frameCount * speed);
  box(10, 30, 10);
  pop();


  // ㄹ
  push();
  translate(0, 315, 0);
  rotateY(frameCount * speed);
  box(90, 10, 10);
  pop();

  push();
  translate(0, 345, 0);
  rotateX(frameCount * speed);
  box(90, 10, 10);
  pop();

  push();
  translate(0, 380, 0);
  rotateZ(frameCount * speed);
  box(90, 10, 10);
  pop();

  push();
  translate(40, 330, 0);
  rotateY(frameCount * speed);
  box(10, 30, 10);
  pop();

  push();
  translate(-40, 365, 0);
  rotateZ(frameCount * speed);
  box(10, 30, 10);
  pop();

  // ㅏ
  push();
  translate(70, 350, 0);
  rotateX(frameCount * speed);
  box(10, 120, 10);
  pop();

  push();
  translate(90, 350, 0);
  rotateY(frameCount * speed);
  box(50, 10, 10);
  pop();

}