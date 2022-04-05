const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

let now = new Date();
console.log(now);
let nowHour = now.getHours();
let nowMinute = now.getMinutes();
let nowSecond = now.getSeconds();
let hDeg = nowHour * 30 + nowMinute * 0.5 + nowSecond * (30 / 3600);
let mDeg = nowMinute * 6 + nowSecond * 0.1;
let sDeg = nowSecond * 6;

function tick() {
	hDeg += 360 / 60 / 60 / 12;
	mDeg = +(mDeg + 0.1).toFixed(1);
	sDeg += 6;
	if (mDeg % 360 == 0) hDeg = +hDeg.toFixed(0);
	console.log(hDeg);
	hour.style.transform = "rotate(" + hDeg + "deg)";
	minute.style.transform = "rotate(" + mDeg + "deg)";
	second.style.transform = "rotate(" + sDeg + "deg)";
}

tick();
setInterval(tick, 1000);
