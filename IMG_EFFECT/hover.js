var en=document.querySelectorAll(".eny");
en.forEach(function(val){
    var im=val.childNodes[3];
 val.addEventListener("mouseenter",function(){
    im.style.opacity="0.5";
 })   
 val.addEventListener("mousemove",function(det){
    console.log(val.childNodes[3]);
    val.childNodes[3].style.left=det.x+"px";
 })
 val.addEventListener("mouseleave",function(){
    im.style.opacity="0";
 })
})

