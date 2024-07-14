var stats =document.querySelector("h6");
let btn=document.querySelector("button");
let flag=1;
btn.addEventListener("click",()=>{
   if(flag==1){
      stats.innerHTML="FRIEND";
      stats.style.color="green";
      btn.innerHTML="REMOVE";
      btn.style.backgroundColor="red"
      flag=0;
   }
   else{
    stats.innerHTML="STRANGER";
      stats.style.color="red";
      btn.innerHTML="ACCEPT";
      btn.style.backgroundColor="blue"
      flag=1;
   }
})


