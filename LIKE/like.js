console.log("jk");
var like=document.querySelector("#like");
var pic=document.querySelector(".post");
pic.addEventListener("click",function(){
    //  console.log("hello");
        like.style.transform='translate(35px, -80px) scale(1)';
        like.style.opacity='0.8';
        setTimeout(function(){
            like.style.opacity='0';
            like.style.transform='translate(35px, -80px) scale(0)';   
        },1000)

})
