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
}