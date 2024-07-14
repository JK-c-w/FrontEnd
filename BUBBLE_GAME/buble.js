
var hitnum;
// TO PLAY 
 function cbutton(){
     document.querySelector("button") .addEventListener("click",function(){
          document.querySelector("#scr").textContent=0;
          MakeBubble();
          Timmer();
          hit();
     })
 }
// TO MAKE BUBBLE 
function MakeBubble(){
     var culter="";
for(var i=0;i<=101;i++){
     var num=Math.floor((Math.random())*10);
     culter+=`<div id="b">${num}</div>`;
} 
document.querySelector(".game").innerHTML=culter;
}
// FOR TIME 
 function Timmer(){
     var time=30;
    var t=setInterval(function(){
     if(time>0){
          time--;
          document.querySelector("#time").textContent=time;}
     else{
          clearInterval(t);
          document.querySelector(".game").innerHTML=`<h1>GAME OVER</h1> <button>PLAY</button>`;
          cbutton();
     }     
    },1000)
 }
// FOR HIT  
function hit(){
     hitnum=Math.floor(Math.random()*10);
     document.querySelector("#hitnum").textContent=hitnum;
} 
// TO CLICK BUBBLE 
document.querySelector(".game").addEventListener("click",function(buble){
     var cbuble=Number(buble.target.textContent);
     if(cbuble==hitnum){
     var scr=Number(document.querySelector("#scr").textContent);
     document.querySelector("#scr").textContent= scr+10;
     MakeBubble();
hit();}
})
// START 
cbutton();