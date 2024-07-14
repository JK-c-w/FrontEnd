var crsr = document.querySelector(".cursor")
var main=document .querySelector(".main")
main.addEventListener("mousemove",function(det){
      crsr.style.left=det.x+"px";
      crsr.style.top=det.y+"px"; 
})