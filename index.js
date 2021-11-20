timer = document.getElementById('timer');

let clock;

function setTimer(){
    clock = setInterval(()=>{
        secord = parseInt(timer.textContent);
        secord++;
        timer.textContent = secord;
    },1000);

    return clock;
}

function stop(){
    console.log("Stopping...!")
    clearInterval(clock);
}

function start(){
    if(clock){
        clearInterval(clock);
        console.log("Starting...!");
        setTimer();
    }else{
        console.log("Starting...!");
        setTimer();
    }
}

function reset(){
    if(clock){
        console.log('Reseting...!');
        clearInterval(clock);
        timer.textContent = 0
        clock = null
    }
}