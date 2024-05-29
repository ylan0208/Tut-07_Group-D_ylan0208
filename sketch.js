function setup() {
  createCanvas(windowWidth, windowHeight);//Create a canvas
  background(246, 240, 221);//background color
  createLines();
}

function draw()
{
  
}

function windowResized()
{
  //React to window size
  resizeCanvas(windowWidth, windowHeight);
  background(246, 240, 221);
  createLines();
}


function createLines()
{
  strokeCap(SQUARE);
  //scale the canvas.
  let scaleFactor = min(windowWidth/1920, windowHeight/1080);
  scale(scaleFactor);
  
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
  ];
  for (let settings of lineSettings) {//Iteration
    drawLines(settings);//Call drawLines() to draw the lines
  }
}

function drawLines({ x, y, angle, color, weight, lengthLeft, lengthRight, distanceStart, distanceEnd, num}) {
  push();
  translate(width * x, width * y);//Move the origin to (x, y).
  rotate(angle);//Rotate angle
  stroke(color);//line color
  for (let i = 0; i <= num; i++) {//Draw number of the lines
    let xOff = map(i, 0, num, -width * 0.03, width * 0.01);//line position on the x
    strokeWeight(weight);//line weight
    let length = map(i, 0, num, width * lengthLeft, width * lengthRight);//line length
    let yOff = map(i, 0, num, width * distanceStart, width * distanceEnd);//line position on the y
    line(-length / 2 + xOff, yOff, length / 2 + xOff, yOff);//Draw the line
  }
  pop();
}