var currentDate;
var tick;
var ring;
var hasRung = 0;
var audio = false;
var audioPersistence = false;
var zeroCase = 0;
var buttons;
var hideCtrlsEvt;
//var futureDate = 1370350800000; //Value of June 4, 2013 9:00 a.m. EST or 1:00 p.m. GMT/UTC or 8:00 a.m. CST
//var futureDate = 1401800400; //Value of June 3, 2014 9:00 a.m. EST or 1:00 p.m. GMT/UTC or 8:00 a.m. CST
//var futureDate = 1433858400; //Value of June 9, 2015 9:00 a.m. EST or 1:00 p.m. GMT/UTC or 8:00 a.m. CST
//var futureDate = 1464699600; //Value of May 31, 2016 9:00 a.m. EST or 1:00 p.m. GMT/UTC or 8:00 a.m. CST
//var futureDate = 1496736000; //Value of June 5, 2017 9:00 a.m. EST or 1:00 p.m. GMT/UTC or 8:00 a.m. CST
//var futureDate = 1528117200; //Value of June 4, 2018 9:00 a.m. EST or 1:00 p.m. GMT/UTC or 8:00 a.m. CST
var futureDate = 1559577600; //Value of June 3, 2019 12:00 p.m. EST

function run(serverTime){
 currentDate = serverTime;
 var agent = navigator.userAgent.toLowerCase();
 if (agent.indexOf('firefox') > -1){
  tick = new Audio("sounds/tick2.ogg");
  ring = new Audio("sounds/ring.ogg");
 }
 else{
  tick = new Audio("sounds/tick2.mp3");
  ring = new Audio("sounds/ring.mp3");
 }
 updateTime();
 setInterval(updateTime, 1000);
}
function updateTime(){
 var timeRemaining = futureDate - currentDate;
 if(timeRemaining <= 0){
  setZeroCase();
  if(hasRung == 0){
    ring.play();
    hasRung = 1;
  }
 }
 else{
  zeroCase = 0;
  hasRung = 0;
  if (audioPersistence != audio) audio = true;
  var days = parseInt(timeRemaining / 86400);
  var hours = parseInt((timeRemaining % 86400) / 3600);
  var minutes = parseInt((timeRemaining % 3600) / 60);
  var seconds = parseInt(timeRemaining % 60);
  updateDisplay(days,hours,minutes,seconds);
  tickTock();
  currentDate++;
 }
}
function tickTock(){
 if(audio) tick.play();
}
function setAudio(value){
  audio = audioPersistence = value;
  value ? muteUnmute.html("Mute") : muteUnmute.html("Unmute");
}
function updateDisplay(days,hours,minutes,seconds){
 digits.days.update(days);
 digits.hours.update(hours);
 digits.minutes.update(minutes);
 digits.seconds.update(seconds);
}
function setZeroCase(){
 updateDisplay(0,0,0,0);
 if(zeroCase == 0)
  audioPersistence = audio;
 audio = false;
 zeroCase = 1;
}

$(document).ready(function(){
	//Populate element references
	buttons = $(".btn");
	muteUnmute = $("#muteUnmute");
	
	muteUnmute.click(function(){
		setAudio(!audio);
	});
	
	//Initialize digit objects
	digits = {};
	$('.digit').each(function(index){
		od = new Odometer({
			el: this,
			value: 0,
			format: 'ddd',
			theme: 'minimal',
			duration: 0,
			minIntegerLen: parseInt(this.getAttribute("minIntegerLen"))
		});
		digits[this.getAttribute("id")] = od;
	});
	
	$("body").on("mousemove", function(){ //Set up control button show/hide logic
		if(hideCtrlsEvt) clearTimeout(hideCtrlsEvt);
		buttons.css({"opacity":"1"});
		hideCtrlsEvt = setTimeout(function(){
			if($(".btn:hover").length == 0) buttons.css({"opacity":"0"});
		},1000);
	});
});