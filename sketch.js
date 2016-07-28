var x //positon along the x-axis
var y //position along the y-axis
var song

function preload() {
  song = loadSound("assets/AdventureTakenForGranted.mp3")
}

function setup() {
  createCanvas(1000,1000)
  
  mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
   
   bar=[
     [0,900,100,50],
     [100,900,100,50],
     [200,900,100,50],
     [300,900,100,50],
     [400,900,100,50],
     [500,900,100,50],
     [600,900,100,50],
     [700,900,100,50],
     [800,900,100,50],
     [900,900,100,50],
     ]
     
     ball=[
     [0,900,100,100],
     [100,700,100,100],
     [200,700,100,100],
     [300,700,100,100],
     [400,700,100,100],
     [500,700,100,100],
     [600,700,100,100],
     [700,700,100,100],
     [800,700,100,100],
     [900,700,100,100],
     ]
}

function draw() {
  background(0)
  
  song.play()

  for (i=0;i<10;i++) {
  fill(255,0,0)
  rect(bar[i][0],bar[i][1],bar[i][2],bar[i][3])
  }
  //rising bars
  
  for (i2=0;i2<10;i2++) {
  fill(0,0,255)
  ellipse(ball[i2][0],ball[i2][1],ball[i2][2],ball[i2][3])
  }
  //bouncing balls
  
//  var spectrum = fft.analyze();

//   beginShape();
//   for (bar[0] = 0; bar[0]<spectrum.length; bar[0]++) {
//    rect(bar[0], map(spectrum[bar[0]], 0, 25.5, height, 0) );
//   }
//   endShape();
   
//   beginShape();
//   for (ball[0] = 0; bar[0]<spectrum.length; i++) {
//    ellipse(bar[0], map(spectrum[bar[0]], 0, 25.5, height, 0) );
//   }
//   endShape();
  
}