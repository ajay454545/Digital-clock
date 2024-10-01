// 1.initial timer value
// let timer;
// let isRunning=false;
// let [hours,min,sec]=[0,0,0]

// 2. Accessing the all Html elements to update the timer
// let display=document.querySelector(".timer-display")
// let start=document.querySelector(".start")


//adding fuctionality for buttons to update the Timer
// start.addEventListener("click",startTimer)


//function  for starttimer
// function startTimer(){
//     if(!isRunning){
//         isRunning=true;
//         timer=setInterval(update1timer);

//     }
// }




//function to update the timer
// function update1timer(){
//        sec=1++
//         if(sec>=60){
//             sec=0;
//             min++;
//             if(min>=60){
//                 min=0;
//                 hours++;
//             }
//         }
      

      //calling displaytimer to update display when the buttons are clicked 
    //   displayTimer()


    // }

// function displayTimer(){
//     display.textContent=`${String(hours).padStart(2,0)}:${String(min).padStart(2,0)}:${String(sec).padStart(2,0)}`
// }


function showTime() {
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let session = "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        session = "pm";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;

    document.getElementById("MyClockDisplay").innerText = time;

    setTimeout(showTime, 1000);
}

showTime();