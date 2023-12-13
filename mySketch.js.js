//music is original - it's haiku - meant to be duetted - Creative Commons(https://creativecommons.org/licenses/by-nc-nd/4.0/)
//click mouse to start/stop
let syllable_1_1;
let syllable_2_6 = false;
let syllable_3_5 = []; 
let syllable_1_5;
let syllable_2_5;
let syllable_1_4;
function preload() {
  syllable_1_1 = loadSound("haiku.mp3");
}
function setup() {
  syllable_1_2 = createCanvas(windowWidth, windowHeight);
	syllable_1_3 = angleMode(DEGREES);
  syllable_1_1.amp(0.6); 
  syllable_1_4 = new p5.FFT();
  syllable_1_5 = syllable_1_4.analyze();
  for (let i = 0; i < syllable_1_5.length; i++) {
    syllable_3_5[i]={
			x:map(i,0,syllable_1_5.length,0,width/2-20),
			theta:random(0,360)
		}
  }
}

function draw() {
  syllable_2_1 = translate(width / 2, height / 2);
  syllable_2_2 = checkPlay()
  syllable_2_3 = background(105*abs(cos(frameCount/50)),165*abs(cos(frameCount/50)),195*abs(cos(frameCount/50)),10);
  syllable_2_4 = soundProcess();
}

function soundProcess() {
  syllable_1_5 = syllable_1_4.analyze();
  syllable_2_5 = syllable_1_4.waveform();
  for (let i = 0; i < syllable_1_5.length; i += 10) {
    syllable_3_5[i].theta = syllable_3_5[i].theta-syllable_1_5[i] / 50 - syllable_2_5[i]*100;
		for(let j = 0;j<10;j++){
			syllable_2_7 = stroke(100+105*abs(sin(frameCount/20+syllable_3_5[i].theta+syllable_1_5[i] / 50 )),200+65*abs(sin(frameCount/20+syllable_3_5[i].x+ syllable_1_5[i] / 50)),200+95*abs(sin(frameCount/20+syllable_3_5[i].x +syllable_1_5[i] / 50)),255);
			syllable_3_1=point(randomGaussian(0,syllable_1_5[i]/10)+cos(frameCount/10)*syllable_3_5[i].x*sin(syllable_3_5[i].theta)+syllable_3_5[i].x*cos(syllable_3_5[i].theta)*cos(syllable_2_5[i]*10+syllable_1_5[i]/2),randomGaussian(0,syllable_1_5[i]/10)+syllable_3_5[i].x*sin(syllable_3_5[i].theta))
		}
  }
}

function checkPlay(){
	if (syllable_2_6) {
    if (!syllable_1_1.isPlaying()) {
      syllable_1_1.play();
    }
  } else {
    syllable_1_1.pause();
  }
}

function mousePressed() {
  syllable_2_6 = !syllable_2_6;
}
function keyPressed() {
  syllable_1_1.stop();
  syllable_3_2 = setup();
  syllable_3_3 = draw();
}

function windowResized(){
	syllable_3_4 = resizeCanvas(windowWidth,windowHeight)
	
}
