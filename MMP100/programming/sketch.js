// Declare global variables
let leftSide=0;
let rightSide=510;
let topBorder=0;
let bottomBorder=510;
let rVal=0;
let gVal=0;
let bVal=0;
let bInc=true;
let value;
let xPos=10
let yPos=10
let goRight=true;
let goDown=true;

function setup() {
  createCanvas(rightSide, bottomBorder);
}

function draw() {
  //declare local variables
  //Constrain the colors to 255 for red and green
  let rColorConst=constrain(mouseX, leftSide, rightSide);
  let gColorConst=constrain(mouseY, topBorder, bottomBorder);
  //define red behavior (0 on the left to 255 on the right)
  rVal=rColorConst/2;
    //define green behavior (0 at the top to 255 at the bottom)
  gVal=gColorConst/2;
    //define blue behavior (cycling from 0-255-0)
  if (bVal< 255 && bInc==true) bVal++;
  else if (bVal>=255) bInc=false;
  if (bVal>0 && bInc!=true) bVal--;
  else if (bVal==0) bInc=true;
  //Set the background in color motion
  background(rVal, gVal, bVal);  
    //declare the bouncing ball and set it in motion
      fill(255);
  strokeWeight(2);
  stroke(255,255,0);
  ellipse(xPos,yPos,20,20);
  // NOTE: remember that incrementation will take place by integers, if not evenly divisible by the increment
  // the object may not exhibit the expected behavior and == wil not work as the comparison operator.
  //use >= or <= instead
 //define x variable behavior
  if (xPos<width-10 && goRight==true) xPos+= 7;
  else if(xPos>= width-10) goRight=false;
  if (xPos > 10 && goRight!=true) xPos-=7;
  else if (xPos==10) goRight=true;
  //define y variable behavior
    if (yPos<height-10 && goDown==true) yPos+= 5;
  else if(yPos>= height-10) {
    goDown=false;
  }
  if (yPos > 10 && goDown!=true) yPos-=5;
  else if (yPos==10) goDown=true;
    
    //Now for the followbox
  //Constrain the possible movement of the mouse
  let mouseXConst=constrain(mouseX, leftSide+11, rightSide-11);
  let mouseYConst=constrain(mouseY, topBorder+11, bottomBorder-11);
  //draw rectangle
  stroke(255);
  strokeWeight(2);
  fill(0,0,255);
  // limit the location of the rectangle to keep it on screen
  rect(mouseXConst-10, mouseYConst-10 , 20, 20);
  // log variable values to the console
  console.log(mouseXConst, mouseYConst, rColorConst, gColorConst, rVal, gVal, bVal);
}