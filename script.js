var 	ctxt,    //для зберігання Context 
	canvas,  //для звернення до канви
	w,d,	 //для роботи з холмтом
	game=true,
	box;    
	
var ball={x:400, y:570, speed:5, r:10};//object ball
var bord={x:350, y:585, w:100, h:3};//object bord
var BOX=function(x){
	this.x=x;
	this.y=22;
	this.w=40;
	this.h=20;
	this.obj;
}                                 
var angle=60;
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
	
	box=new BOX(42);
	box.obj=[];
	for (var i=1; i<9; i++){
		box.obj[i]=[];
		for (var j=1; j<18; j++){
			box.obj[i][j]=1;
			
		}
	}
	bagin_game();
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
	  if (ball.y+ball.r>=bord.y){
	  	if((ball.x+ball.r>=bord.x && ball.x+ball.r<bord.x+bord.w)){
		angle=360-angle;
	  	update_angle ();
	 	}
	 	else{
	  		game=false;
	  	}
	  }
	  
	var row=Math.floor(ball.y/(box.h+2));
	var col=Math.floor(ball.x/(box.w+2));
	if (ball.y<9*(box.h+2) && row>0 && col>0 && box.obj[row][col]>0 ){
		box.obj[row][col]=0;
		angle=360-angle;
	  	update_angle ();
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
	  
	  
	 //drowing boxes
		
		ctxt.fillStyle="#ffaa88";
		for (var i=1; i<9; i++){			
			for (var j=1; j<18; j++){
				if (box.obj[i][j]==1){
				ctxt.beginPath();
	  			ctxt.fillRect((j*box.x), (i*box.y), box.w, box.h);
	  			ctxt.closePath();
				}
				
			}
		}
	  	
	  	
	  	
	  	
	  	
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

