
var alarm_time = "";
var alarmOn = false;

function getTime() {
    var d = new Date();
    var hour = d.getHours();
    var hourOfDay = "AM";
    if(hour == 0) hour = 12;
    else if(hour >= 12){
        hourOfDay = "PM";
        if(hour > 12) hour = hour - 12;
    }
    var minutes = d.getMinutes();
    if(minutes < 10) minutes = '0' + minutes; 

    var seconds = d.getSeconds();
    if(seconds < 10) seconds = '0' + seconds;
    var timeNow = hour + ":" + minutes + ":" + seconds + " " + hourOfDay;
    document.getElementById("time").innerHTML = timeNow;   

    //Check for alarm
    if(alarmOn) {
         alarm_time = document.getElementById("wakeup-time").value;
         if(d.getHours() == alarm_time.substring(0,2) && d.getMinutes() == alarm_time.substring(3,5)) {
            document.getElementById("music").play();
         }
    }
}

 
function modifyAlarm() {
    if(!alarmOn) {
        alarmOn = true;
        document.getElementById("alarm-btn").innerHTML = "Stop Alarm";
    }
    else {
         alarmOn = false;
        document.getElementById("alarm-btn").innerHTML = "Start Alarm";
        document.getElementById("music").pause();
        document.getElementById("music").load();

    }
} 


setInterval(getTime,1000);

