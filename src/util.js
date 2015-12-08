var imageString="img/white.png";
var  activeElements = create2DArray(14);
console.log(activeElements);
rand=0;
function create2DArray(rows) {
  var arr = [rows];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

function createGrid(){
	//draw vertical lines
	for(var i=0;i <= canvas.width; i=i+50){
		c.beginPath();
		c.moveTo(i,0);
		c.lineTo(i,canvas.height);
		c.stroke();
	}

	//draw horizonal lines
	for(var i=0;i <= canvas.height; i=i+50){
		c.beginPath();
		c.moveTo(0,i);
		//swap these arguments for a fun warped effect
		c.lineTo(canvas.width,i);
		c.stroke();
	}
}

function spawnStartElements(){

	for(var i =0; i < canvas.height; i=i+50){

		for(var j=0;j < canvas.width; j=j+50){
			var drawing = new Image();
			rand = Math.random();
			rand*=2.5;
			rand= Math.floor(rand);
			getRandomImage(rand);
			drawing.src = imageString;
			c.drawImage(drawing,i,j);
			activeElements[i/50][j/50]=rand;
			}
		}
	}
function updateTileAfterAction(){
	
}

function redrawBoard(){

	for(var i=0; i < 13; i++){
		for(var j=0;j < 13; j++){
			var tile = new Image();
			rand = activeElements[i][j];
			console.log(rand);
			getRandomImage();
			tile.src = imageString;
			c.drawImage(tile,i*50,j*50);
		}
	}
	console.log(activeElements)
createGrid();
}


function getRandomImage(){
	switch(rand){
    case 0:
         imageString = "img/red.png"
        break;
    case 1:
         imageString = "img/yellow.png"
        break;
    case 2:
         imageString = "img/blue.png"
        break;
    case 3:
         imageString = "img/green.png"
        break;
    case 4:
         imageString = "img/orange.png"
        break;
    default:
          imageString = "img/white.png"
	}
}