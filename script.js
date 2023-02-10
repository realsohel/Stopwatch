
let min = 0;
let sec = 0;
let millisec = 0;


let min_id = document.getElementById('minute');
let sec_id = document.getElementById('seconds');
let milli_id = document.getElementById('millisecs');

let strt_btn = document.getElementById('start');
// strt_btn.innerText='Start';
let pause_btn = document.getElementById('pause');
let reset_btn = document.getElementById('reset');

let Interval;

const start=()=>{
    strt_btn.innerText='Resume';
        clearInterval(Interval);
        Interval = setInterval(stopwatch, 10);
}

const resume=()=>{
    console.log('hi');
        strt_btn.innerText='Start';
        clearInterval(Interval);
        milli_id.innerHTML='0'+0;
        millisec=0;

        sec_id.innerHTML='0'+0;
        sec=0;

        min_id=0;
        min_id.innerHTML='0'+ 0;
    }

    // how to add 2 functions to an event listener of same id

if(strt_btn.innerText=='Start'){
    strt_btn.addEventListener('click', start,true);
}

if(strt_btn.innerText=='Resume'){
        
    strt_btn.addEventListener('click', resume,true);
    
}

pause_btn.onclick = function(){
    clearInterval(Interval);
}

reset_btn.onclick = function(){
    clearInterval(Interval);
    milli_id.innerHTML='0'+0;
    millisec=0;

    sec_id.innerHTML='0'+0;
    sec=0;

    min_id=0;
    min_id.innerHTML='0'+ 0;
}

function stopwatch() {
    millisec++;

    if(millisec<=9){
        milli_id.innerHTML= '0' + millisec;
    }
    if(millisec>9){
        milli_id.innerHTML= millisec;
    }

    if(millisec>99){
        sec++;
        millisec=0;
        sec_id.innerHTML="0"+sec;
        milli_id.innerHTML="0" + 0;
    }

    if(sec>9){
        sec_id.innerHTML=sec;
    }

    if(sec>59){
        min++;
        sec=0;
        min_id.innerHTML="0"+min;
        sec_id.innerHTML="0"+0;
    }

    if(min>9){
        min_id.innerHTML=min;
    }

    if(min>59){
        min_id.innerHTML=min;
    }

}