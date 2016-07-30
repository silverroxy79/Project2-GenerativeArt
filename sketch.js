var x //positon along the x-axis
var y //position along the y-axis
var pbary //previous position of bar along y
var bary  //current position of bar along y
var song

function preload() {
  song = loadSound("assets/AdventureTakenForGranted.mp3")
}

function setup() {
  createCanvas(1000,1000)
  
  mic = new p5.AudioIn();
   mic.start();
   freq = new p5.FFT();
   freq.setInput(mic);
   
  song.play()
   
  bar1=[
     [0,950,100,50,],
     [100,950,100,50],
     [200,950,100,50],
     [300,950,100,50],
     [400,950,100,50],
     [500,950,100,50],
     [600,950,100,50],
     [700,950,100,50],
     [800,950,100,50],
     [900,950,100,50],
     ]
     
  bar2=[
     [0,0,100,50],
     [100,0,100,50],
     [200,0,100,50],
     [300,0,100,50],
     [400,0,100,50],
     [500,0,100,50],
     [600,0,100,50],
     [700,0,100,50],
     [800,0,100,50],
     [900,0,100,50],
     ]
     
  ball1=[
     [950,50,100,100],
     [950,150,100,100],
     [950,250,100,100],
     [950,350,100,100],
     [950,450,100,100],
     [950,550,100,100],
     [950,650,100,100],
     [950,750,100,100],
     [950,850,100,100],
     [950,950,100,100],
     ]
     
  ball2=[
     [50,50,100,100],
     [50,150,100,100],
     [50,250,100,100],
     [50,350,100,100],
     [50,450,100,100],
     [50,550,100,100],
     [50,650,100,100],
     [50,750,100,100],
     [50,850,100,100],
     [50,950,100,100],
     ]
     
//  spect=[100,30,45,60,75,90,105,120,135,150]
}

function draw() {
  background(0)
  
  var spectrum = freq.analyze();

  for (i=0;i<10;i++) {
    fill(random(0,255),random(0,255),random(0,255),random(75,125))
    rect(bar1[i][0],bar1[i][1],bar1[i][2],bar1[i][3])
    fill(random(0,255),random(0,255),random(0,255),random(75,125))
    rect(bar1[i][0],map(spectrum[i*60], 0, 150, height, 0),bar1[i][2],map(spectrum[i*60], 0, 150, height, 0))
//rising bars 

    fill(random(0,255),random(0,255),random(0,255),random(75,125))
    rect(bar2[i][0],bar2[i][1],bar2[i][2],bar2[i][3])
    fill(random(0,255),random(0,255),random(0,255),random(75,125))
    rect(bar2[i][0],map(spectrum[i*60], 0, 150, 0, height),bar2[i][2],map(spectrum[i*60], 0, 150, 0, height))
//falling bars  

  fill(random(0,255),random(75,125))
  ellipse(map(spectrum[i*60], 0, 150, width-50, 0),ball1[i][1],ball1[i][2],ball1[i][3])
  fill(random(0,255),random(75,125))
  ellipse(map(spectrum[i*60], 0, 150, 0, width-50),ball2[i][1],ball2[i][2],ball2[i][3])
//bouncing balls    
  }
}