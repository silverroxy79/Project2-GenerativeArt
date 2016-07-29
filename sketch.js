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
   freq = new p5.FFT();
   freq.setInput(mic);
   
  song.play()
   
   bar=[
     [0,950,100,50],
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
     
   ball=[
     [50,900,100,100],
     [150,900,100,100],
     [250,900,100,100],
     [350,900,100,100],
     [450,900,100,100],
     [550,900,100,100],
     [650,900,100,100],
     [750,900,100,100],
     [850,900,100,100],
     [950,900,100,100],
     ]
     
//  spect=[100,30,45,60,75,90,105,120,135,150]
}

function draw() {
  background(0)
  
  var spectrum = freq.analyze();
//  console.log(spectrum)
//  console.log(spectrum[100])
  
  for (i=0;i<10;i++) {
    fill(255,0,0)
    rect(bar[i][0],bar[i][1],bar[i][2],bar[i][3])
  
//  if (spectrum>0 && spectrum<2000) {
    rect(bar[i][0],map(spectrum[i*100], 0, 150, height, 0),bar[i][2],map(spectrum[i*100], 0, 150, height, 0))
//    rect(map(spectrum.getlevel(), 0, 1, height, 0),bar[i][1],map(spectrum.getlevel(), 0, 1, height, 0),bar[i][3])
  }
  
//  beginShape();
//   for (i3 = 0; i3<spectrum.length; i3++) {
//     fill(255,0,0)
//     rect(map(spectrum[i3], 0, 25.5, height, 0),bar[i][1],bar[i][2],bar[i][3])
//    vertex(i, map(spectrum[i], 0, 255, height, 0) );
//   }
//   endShape();
  
  //}
  //rising bars
  
  for (i2=0;i2<10;i2++) {
  fill(0,0,255)
  ellipse(ball[i2][0],ball[i2][1],ball[i2][2],ball[i2][3])
  
  ellipse(ball[i2][0],map(spectrum[i2*100], 0, 150, height-50, 0),ball[i2][2],ball[i2][3])
  
//  beginShape();
//   for (i4 = 0; i4<spectrum.length; i4++) {
//     fill(0,0,255)
//     ellipse(map(spectrum[i4], 0, 25.5, height, 0),ball[i2][1],ball[i2][2],ball[i2][3])
//    vertex(i, map(spectrum[i], 0, 255, height, 0) );
//   }
//   endShape();
  
  }
  //bouncing balls
  
}