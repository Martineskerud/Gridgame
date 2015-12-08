var firstHit= false;
function detectHit(x,y){

console.log(x + ", " + y);
var row = Math.floor(y/50);
var column = Math.floor(x/50);

console.log("You hit box " + row + "," + column);


//if this is the first time we press, we need to select a box
if(firstHit){
		
selectBox(row,column);

firstHit=false;
}
else{
	firstHit=true;
}

//if this is the second time, we need to swap the boxes around and check for matches in the new pieces, otherwise, move the boxes back to where they were.



clearBoxes(row,column);

}

//draw a square around the selected grid
function selectBox(row,column){
		c.beginPath();
		c.lineWidth=5;
		c.strokeStyle = '#cccccc';
		c.moveTo(column*50,row*50);
		c.lineTo(column*50+50,row*50);
		c.stroke();
		c.beginPath();
		c.moveTo(column*50,row*50);
		c.lineTo(column*50,row*50+50);
		c.stroke();
		c.beginPath();
		c.moveTo(column*50+50,row*50);
		c.lineTo(column*50+50,row*50+50);
		c.stroke();
		c.beginPath();
		c.moveTo(column*50,row*50+50);
		c.lineTo(column*50+50,row*50+50);
		c.stroke();
}

function clearBoxes(row, column){

	//TODO: traverse the grid and discover which elements were hit.

}
