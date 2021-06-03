function preload(){
    
}
function setup() {
    canvas = createCanvas(800, 580);
    canvas.center(); 
   video = createCapture(VIDEO);
   video.hide();
    
  } 


function draw(){
    image(video,230,150,220,200);


fill(255, 0, 0);
stroke(255, 0, 0);
rect(600,150,20,250);
  
fill(255, 0, 0);
stroke(255, 0, 0);
rect(150,150,20,250);
  
fill(255, 0, 0);
stroke(255, 0, 0);
rect(150,150,450,20);
  
fill(255, 0, 0);
stroke(255, 0, 0);
rect(150,400,450,20);
  
fill(0,255, 0);
stroke(128, 0, 0);
ellipse(160, 160, 55, 55);
  
fill(0,255, 0);
stroke(128, 0, 0);
ellipse(610, 160, 55, 55);

fill(0,255, 0);
stroke(128, 0, 0);
ellipse(610, 410, 55, 55);
  
fill(0,255, 0);
stroke(128, 0, 0);
ellipse(160, 410, 55, 55);

}

function Take_snapshot()
{
    save('student_name.png');
 }