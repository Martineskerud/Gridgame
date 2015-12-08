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




//draw
     var sources = {
        yellow: 'img/yellow.png',
        blue: 'img/blue.png',
        green: 'img/green.png',
        orange: 'img/orange.png',
        red: 'img/red.png'
      };
      


spawnStartElements();
createGrid();
redrawBoard();
console.log("frame complete!");

