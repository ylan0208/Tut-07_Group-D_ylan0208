let lineSettings;
let lines = []//array

function setup() {
  createCanvas(windowWidth, windowHeight);//Create a canvas of windowsize
  setLines();
}

function draw(){
  background(246, 240, 221);//set background color as paper yellow
  for (let l of lines){
    l.display();
  }
}

function windowResized(){
  //when window size is changed, adjust canvas
  resizeCanvas(windowWidth, windowHeight);
}

class Line {
  constructor(tx, ty, leng, xOff, ys, ang, color, sw) {

    this.moveX = 0;
   
    this.initData = {
      tx: tx,
      ty: ty,
      leng: leng, //length
      xOff: xOff,
      ys: ys, //y scale
      ang: ang, // angle
      color: color,
      sw: sw, //strokeweight
    }
    //save initial properties for later animation
    this.init()
  }

  init() {
    //initialise line properties
    this.tx = this.initData.tx;
    this.ty = this.initData.ty;
    this.xOff = this.initData.xOff;
    this.ys = this.initData.ys;
    this.leng = this.initData.leng;
    this.ang = this.initData.ang;
    this.color = this.initData.color;
    this.sw = this.initData.sw;
    
    let xOff = this.xOff * width;
    let leng = this.leng * width;
    this.yPos = width * this.ys;
    //calculate x y position of 2 endpoints of each line
    this.x1 = -leng / 2 + xOff + this.moveX
    this.y1 = this.yPos
    this.x2 = leng / 2 + xOff + this.moveX
    this.y2 = this.yPos

  }


  display() {

    let xOff = this.xOff * width;
    let leng = this.leng * width;
    this.yPos = width * this.ys;
    this.x1 = lerp(this.x1, -leng / 2 + xOff + this.moveX, 0.09)
    this.x2 = lerp(this.x2, leng / 2 + xOff + this.moveX, 0.09)
    this.y1 = lerp(this.y1, this.yPos, 0.09)
    this.y2 = lerp(this.y2, this.yPos, 0.09)

    //draw the line
    push();
    stroke(this.color);
    strokeWeight(this.sw);
    translate(this.tx * width, this.ty * width);
    rotate(this.ang);
    line(this.x1, this.y1, this.x2, this.y2);
    pop();
  }
}

function drawLines({ x, y, angle, color, weight, lengthLeft, lengthRight, distanceStart, distanceEnd, num}) {
  
  for (let i = 0; i <= num; i++) {//Draw number of the lines
    let xOff = map(i, 0, num, -0.03, 0.01);//line position on the x
    strokeWeight(weight);//line weight
    let length = map(i, 0, num, lengthLeft, lengthRight);//line length
    let yOff = map(i, 0, num, distanceStart, distanceEnd);//line position on the y
    let l = new Line(x, y, length, xOff, yOff, angle, color, weight)
    lines.push(l)
  }
}

function setLines(){
  strokeCap(SQUARE);
  
  
  //radians angle mode value
  let lineSettings = [//array for each set of lines
    { x: 0.27, y: 0.44, angle: -0.58, color: 0, weight: 1, lengthLeft: 0.28, lengthRight: 0.20, distanceStart: -0.05, distanceEnd: 0.03, num: 20 },
    { x: 0.59, y: 0.39, angle: -0.58, color: 0, weight: 1, lengthLeft: 0.76, lengthRight: 0.76, distanceStart: -0.06, distanceEnd: 0.02, num: 20 },
    { x: 0.30, y: 0.50, angle: -0.58, color: 0, weight: 1, lengthLeft: 0.03, lengthRight: 0.03, distanceStart: -0.07, distanceEnd: 0.05, num: 40 },
    { x: 0.34, y: 0.56, angle: -0.58, color: 0, weight: 1, lengthLeft: 0.26, lengthRight: 0.22, distanceStart: -0.13, distanceEnd: -0.10, num: 14 },
    { x: 0.48, y: 0.45, angle: -0.58, color: 0, weight: 10, lengthLeft: 0.30, lengthRight: 0.28, distanceStart: -0.13, distanceEnd: -0.12, num: 1 },
    { x: 0.78, y: 0.24, angle: -0.58, color: 0, weight: 10, lengthLeft: 0.14, lengthRight: 0.15, distanceStart: -0.14, distanceEnd: -0.12, num: 1 },
    { x: 0.68, y: 0.32, angle: -0.58, color: 0, weight: 10, lengthLeft: 0.05, lengthRight: 0.08, distanceStart: -0.15, distanceEnd: -0.11, num: 2 },
    { x: 0.69, y: 0.31, angle: -0.58, color: 0, weight: 1, lengthLeft: 0.04, lengthRight: 0.29, distanceStart: -0.18, distanceEnd: 0.01, num: 40},
    { x: 0.68, y: 0.44, angle: -0.58, color: 0, weight: 1, lengthLeft: 0.76, lengthRight: 0.76, distanceStart: -0.06, distanceEnd: 0.02, num: 20},
    { x: 0.78, y: 0.375, angle: -0.58, color: 0, weight: 2, lengthLeft: 0.3, lengthRight: 0.39, distanceStart: -0.06, distanceEnd: 0.02, num: 20},
    { x: 0.70, y: 0.58, angle: -0.58, color: 0, weight: 6, lengthLeft: 0.60, lengthRight: 0.60, distanceStart: -0.15, distanceEnd: -0.15, num: 1},
    { x: 0.48, y: 0.53, angle: -0.58, color: 0, weight: 2, lengthLeft: 0.33, lengthRight: 0.33, distanceStart: -0.025, distanceEnd: 0.01, num: 10},
    { x: 0.78, y: 0.44, angle: -0.58, color: 0, weight: 6, lengthLeft: 0.20, lengthRight: 0.20, distanceStart: -0.15, distanceEnd: -0.15, num: 1},
    { x: 0.48, y: 0.45, angle: -0.58, color: 0, weight: 1, lengthLeft: 0.53, lengthRight: 0.53, distanceStart: -0.13, distanceEnd: -0.11, num: 1 },
    { x: 0.45, y: 0.64, angle: -0.58, color: 0, weight: 6, lengthLeft: 0.20, lengthRight: 0.20, distanceStart: -0.15, distanceEnd: -0.15, num: 1},
    { x: 0.30, y: 0.56, angle: -0.58, color: 0, weight: 4, lengthLeft: 0.20, lengthRight: 0.20, distanceStart: -0.15, distanceEnd: -0.08, num: 1},
  ];for (let settings of lineSettings){//Iteration
    drawLines(settings);//Call drawLines() to draw the lines
  }
}

