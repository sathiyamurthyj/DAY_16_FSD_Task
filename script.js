function countdownProceed() {
    let countdown_start = 10;
    let time = document.getElementById("time");
    setTimeout(()=>{
        time.innerText = countdown_start;
        setTimeout(()=>{
            countdown_start--;
            time.innerText = countdown_start;  
            setTimeout(()=>{
                countdown_start--;
                time.innerText = countdown_start;  
                setTimeout(()=>{
                    countdown_start--;
                    time.innerText = countdown_start;  
                    setTimeout(()=>{
                        countdown_start--;
                        time.innerText = countdown_start;  
                        setTimeout(()=>{
                            countdown_start--;
                            time.innerText = countdown_start;  
                            setTimeout(()=>{
                                countdown_start--;
                                time.innerText = countdown_start;  
                                setTimeout(()=>{
                                    countdown_start--;
                                    time.innerText = countdown_start;  
                                    setTimeout(()=>{
                                        countdown_start--;
                                        time.innerText = countdown_start;  
                                        setTimeout(()=>{
                                            countdown_start--;
                                            time.innerText = countdown_start;  
                                            setTimeout(()=>
                                                time.innerText = "Happy Independence Day",1000);
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
}
