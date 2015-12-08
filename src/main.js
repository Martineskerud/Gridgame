var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
var x=0;
var y=0;

canvas.addEventListener("mousedown", getPosition, false);

function getPosition(event)
{
   x = event.clientX;
   y = event.clientY;


  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
  detectHit(x,y);

}



spawnStartElements();
createGrid();
redrawBoard();
console.log("frame complete!");

