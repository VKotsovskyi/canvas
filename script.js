var ctxt,    //для зберігання Context qjgnb
	canvas,  //для звернення до канви
	w,d,	 //для роботи з холмтом
	game=true;    
	
var ball={x:400, y:570, speed:5, r:10};//object ball
var bord={x:365, y:585, w:70, h:3};//object bord
var box={x:42, y:22, w:40, h:20, obj:0};
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
	box.obj=[];
	for (i=1; i<15; i++){
		box.obj[i]=[];
		for (j=1; j<7; j++){
			box.obj[i][j]=1;
		}
	}
}

function bagin_game() {
	if (game){
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
	  if (ball.y+ball.r>=bord.y+3){
	  	if((ball.x+ball.r>=bord.x-1 && ball.x+ball.r<bord.x+bord.w+1)){
		angle=360-angle;
	  	update_angle ();
	 	}
	 	else{
	  		game=false;
	  	}
	  }
	  
	  
	  /*drowing ball*/
	  
	  
	  ctxt.fillStyle="#88aa11";
	  ctxt.beginPath();
	  ctxt.arc(ball.x, ball.y, ball.r, 0, 2*Math.PI, true);
	  ctxt.closePath();
	  ctxt.fill();
	  
	  
	  /*drowing bord*/
	  
	  
	  ctxt.fillStyle="#ff88cc";
	  ctxt.beginPath();
	  ctxt.fillRect(bord.x, bord.y, bord.w, bord.h);
	  ctxt.closePath();
	  ctxt.fill();
	  
	 
		
		ctxt.fillStyle="#ffaa88";
		for (i=1; i<18; i++){
			
			for (j=1; j<9; j++){
				ctxt.beginPath();
	  			ctxt.fillRect((i*box.x+5), (j*box.y+5 ), box.w, box.h);
	  			ctxt.closePath();
			}
		}
	  	
	  	ctxt.fill();
	  	
	  	
	  	
		window.requestAnimFrame(bagin_game);
	}
	else{
		
	}
};



  
  

function update_angle () {
	pii=angle*Math.PI/180;
	vx=Math.cos(pii)*ball.speed;
	vy=Math.sin(pii)*ball.speed;
	
  
}

