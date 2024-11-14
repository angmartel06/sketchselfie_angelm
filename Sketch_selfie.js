let faceSize = 200;
function setup()   {
createCanvas(800, 800);
}


function draw() {
   //Face
  fill(205,133,63);
 ellipse(489, 357, faceSize, faceSize);
  
  //Hair
   fill(123, 63, 0);
  triangle(423,277 ,444,265, 452, 312);
  fill(123, 63, 0);
  triangle(404,308 ,432,281, 372, 230);
  fill(123, 63, 0);
    triangle(430,278 ,464,260, 422, 206);
  fill(123, 63, 0);
   triangle(445,265 ,478,252, 470, 303);
   fill(123, 63, 0);
   triangle(475,261 ,505,259, 496, 294);
  fill(123, 63, 0);
     triangle(470,262 ,507,261, 474, 197);
  fill(123, 63, 0);
  triangle(508,259 ,536,271, 536, 199);
 fill(123, 63, 0);
  triangle(538,271 ,556,288, 579, 207);
   fill(123, 63, 0);
  triangle(556,287 ,574,312, 620, 227);
   fill(123, 63, 0);
  triangle(403,310 ,394,339, 331, 267);
  fill(123, 63, 0);
   triangle(401,314 ,421,292, 427, 320);
  fill(123, 63, 0);
  triangle(511,256 ,543,273, 513, 298);
   fill(123, 63, 0);
  triangle(544,277 ,563,297, 532, 312);
  
  //Eyes
  fill(255, 255, 255);
  ellipse(452, 352, 30, 60);
   fill(255, 255, 255);
  ellipse(507, 346, 30, 60);
   fill(0, 0, 0);
  circle(448, 367, 18)
  fill(0, 0, 0);
  circle(511, 357, 18)
  
 
  
  
  //Mouth
  fill(255, 127, 163);
  arc(476, 412, -60, -60, 0, PI + QUARTER_PI, CHORD);
  fill(0, 0, 0);
  arc(489, 382, 20, 10, 0, PI + HALF_PI);

}
