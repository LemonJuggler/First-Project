// declarations will go here

const CANVAS_BACKGROUND_COLOR = 'black';
const SHIP_COLOR = 'red';

var canvas;
var canvasContext;

// MAIN LOOP ** MAIN LOOP ** MAIN LOOP ** MAIN LOOP
// V   V   V   V   V   V   V   V   V   V   V   V   V   V   V   V   V   V

// wait until all of the browser elements load, then run this
window.onload = function(){ 

	// attach canvas to variables
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	// run the main loop
	mainLoop();
}

function mainLoop(){
	// make all changes to objects' position, animation state, etc.
	updateEverything(); 

	// draw everything on the screen
	drawEverything(); 	

	// keep repeating mainLoop in sync with the browser's display refresh rate
	requestAnimationFrame(mainLoop); 
}

// ^   ^   ^   ^   ^   ^   ^   ^   ^   ^   ^   ^   ^   ^   ^   ^   ^   ^   ^
// MAIN LOOP ** MAIN LOOP ** MAIN LOOP ** MAIN LOOP

// D ** D ** D ** D ** D ** D ** D ** D ** D

function drawEverything(){ 	// draw everything on the screen

}

// U ** U ** U ** U ** U ** U ** U ** U ** U

function updateEverything(){	// update all objects before they are drawn

}
