//1. detect when timer is 0.
//2. submit quiz automatically. tell browser to click on submit button.
//3. hide timer when result page opens.
timer=600;
time="10:00";
document.getElementById("time").innerHTML=time;
var myVar = setInterval(function() {
	if (timer==0) {
		document.getElementById("submit").click();
	}
	if (timer>0) {
		//clearInterval(myVar);
		timer=timer-1;
	}
	if (timer<60) {
		document.getElementById("time").style.color = "red";
	}
	minutes=timer/60;
	minutes=Math.floor(minutes);
	seconds=timer%60;
	if (minutes<10) {
		minutes="0"+ minutes;
	}
	if (seconds<10) {
		seconds="0"+seconds;
	}
	time=minutes+":"+seconds;
	//time=minutes.toString().padStart(2, '0')+":"+seconds.toString().padStart(2, '0');
	document.getElementById("time").innerHTML=time;
}, 1000);
