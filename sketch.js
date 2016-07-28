function preLoad () {
  song=preloadSong("assets/AdventureTakenForGranted.mp3")
}

var x //positon along the x-axis
var y //position along the y-axis


function setup() {
  createCanvas(1000,1000)
  
  mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
   
   bar=[
     [0,900,100,200]
     [100,900,100,200]
     [200,900,100,200]
     [300,900,100,200]
     [400,900,100,200]
     [500,900,100,200]
     [600,900,100,200]
     [700,900,100,200]
     [800,900,100,200]
     [900,900,100,200]
     ]
     
     ball=[
     [0,900,200,200]
     [100,700,200,200]
     [200,700,200,200]
     [300,700,200,200]
     [400,700,200,200]
     [500,700,200,200]
     [600,700,200,200]
     [700,700,200,200]
     [800,700,200,200]
     [900,700,200,200]
     ]
     
}

function draw() {
  background(0)
  
  song.play()
  
  fill(255,0,0)
  rect(bar[0],[0],[1],[2],[3])
  rect(bar[1],[0],[1],[2],[3])
  rect(bar[2],[0],[1],[2],[3])
  rect(bar[3],[0],[1],[2],[3])
  rect(bar[4],[0],[1],[2],[3])
  rect(bar[5],[0],[1],[2],[3])
  rect(bar[6],[0],[1],[2],[3])
  rect(bar[7],[0],[1],[2],[3])
  rect(bar[8],[0],[1],[2],[3])
  rect(bar[9],[0],[1],[2],[3])
  //rising bars
  
  fill(0,255,0)
  ellipse(ball[0],[0],[1],[2],[3])
  ellipse(ball[1],[0],[1],[2],[3])
  ellipse(ball[2],[0],[1],[2],[3])
  ellipse(ball[3],[0],[1],[2],[3])
  ellipse(ball[4],[0],[1],[2],[3])
  ellipse(ball[5],[0],[1],[2],[3])
  ellipse(ball[6],[0],[1],[2],[3])
  ellipse(ball[7],[0],[1],[2],[3])
  ellipse(ball[8],[0],[1],[2],[3])
  ellipse(ball[9],[0],[1],[2],[3])
  //bouncing balls
  
  var spectrum = fft.analyze();

   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    rect(i, map(spectrum[i], 0, 25.5, height, 0) );
   }
   endShape();
   
   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    ellipse(i, map(spectrum[i], 0, 25.5, height, 0) );
   }
   endShape();
  
}