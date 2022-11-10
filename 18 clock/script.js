let hour=document.getElementById("hour")
let minute=document.getElementById("minute")
let second=document.getElementById("second")
let ampm=document.getElementById("ampm")

const time=()=>{
    let date=new Date()
    let h=date.getHours()
    let m=date.getMinutes()
    let s=date.getSeconds()
    ampm.innerHTML="AM"
    
    
    if(h>12){
         h=h-12;
         ampm.innerHTML="PM"
    }
    h<10?h="0"+h:h
    s<10?h="0"+s:s
    m<10?m="0"+m:m
    
    hour.innerHTML=h;
    minute.innerHTML=m;
    second.innerHTML=s;

    setInterval(() => {
        time()
    }, 1000);

}

time()