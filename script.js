var ctxt,    //для зберігання Context
	canvas,  //для звернення до канви
	w,d;     //для роботи з холмтом
	
var ball={x:400, y:575, speed:5, r:10};//object ball
var bord={x:365, y:585, w:70, h:3};//object bord
var box={x:50, y:50, w:40, h:20};
var angle=45;
var pii=angle*Math.PI/180;
var vx,xy;


window.requestAnimFrame = (function(bagin_game) 
{
    return window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame || 
    window.oRequestAnimationFrame || 
    window.msRequestAnimationFrame ||
    function(bagin_game) 
    {
      window.setTimeout(bagin_game, 1000 / 60);
    };
}
)();

document.onkeydown= function(e){
		e=e||window.event;
		if (e.keyCode==37 && bord.x>0){
			bord.x-=25;
		}
		else if(e.keyCode==39 && bord.x+bord.w<w){
			bord.x+=25;
		
			}
		
		}

function init () {
	canvas=document.getElementById("g");
	ctxt=canvas.getContext("2d");
	w=canvas.width;
	h=canvas.height;
	
	bagin_game();
		 
}

function bagin_game() {

  ctxt.clearRect(0, 0, w, h);
  ctxt.strokeRect(0, 0, w, h);
  
  vx=Math.cos(pii)*ball.speed;
  vy=-Math.sin(pii)*ball.speed;
  ball.x+=vx;
  ball.y+=vy;
  if (ball.x+ball.r>w || ball.x<0+ball.r){     
  	angle=180-angle;
  	update_angle ();
  } else if (ball.y<0+ball.r){
  	angle=360-angle;
  	update_angle ();
  }
  if ((ball.x+ball.r>bord.x && ball.x<bord.x+bord.w+ball.r) && (ball.y+ball.r>=bord.y)){
	angle=360-angle;
  	update_angle ();
  }
  
  /*drowing ball*/
  
  ctxt.fill();
  ctxt.fillStyle="#88aa11";
  ctxt.beginPath();
  ctxt.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI, true);
  ctxt.closePath();
  ctxt.fill();
  
  
  /*drowing bord*/
  
  ctxt.fill();
  ctxt.fillStyle="#ff88cc";
  ctxt.beginPath();
  ctxt.fillRect(bord.x, bord.y, bord.w, bord.h);
  ctxt.closePath();
  ctxt.fill();
  
 
	
	
	window.requestAnimFrame(bagin_game);
};



  
  

function update_angle () {
	pii=angle*Math.PI/180;
	vx=Math.cos(pii)*ball.speed;
	vy=Math.sin(pii)*ball.speed;
	
  
}

