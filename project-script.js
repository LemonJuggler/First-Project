// declarations will go here


// MAIN LOOP ** MAIN LOOP ** MAIN LOOP ** MAIN LOOP
// V   V   V   V   V   V   V   V   V   V   V   V   V   V   V   V   V   V

// wait until all of the browser elements load, then run this
window.onload = function(){ 

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
