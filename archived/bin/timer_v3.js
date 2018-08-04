var changeCounter = 0;
var slideIndex = 0;
var buttonsVisible = 0;
var tick;
var ring;
var hasRung = 0;
var audio = 0;
var audioPersistence = 0;
var play = 1;
var zeroCase = 0;
var currTime = 0;
//var futureDate = 1370350800000; //Value of June 4, 2013 9:00 a.m. EST or 1:00 p.m. GMT/UTC or 8:00 a.m. CST
//var futureDate = 1401800400; //Value of June 3, 2014 9:00 a.m. EST or 1:00 p.m. GMT/UTC or 8:00 a.m. CST
var futureDate = 1433858400; //Value of June 9, 2015 9:00 a.m. EST or 1:00 p.m. GMT/UTC or 8:00 a.m. CST
var backgrounds = new Array();
backgrounds[0] = "bin/images/1.jpg";
backgrounds[1] = "bin/images/2.jpg";
backgrounds[2] = "bin/images/3.jpg";
backgrounds[3] = "bin/images/4.jpg";
backgrounds[4] = "bin/images/5.jpg";
backgrounds[5] = "bin/images/6.jpg";
backgrounds[6] = "bin/images/7.jpg";
backgrounds[7] = "bin/images/8.jpg";
backgrounds[8] = "bin/images/9.jpg";
backgrounds[9] = "bin/images/10.jpg";
backgrounds[10] = "bin/images/11.jpg";
backgrounds[11] = "bin/images/12.jpg";
backgrounds[12] = "bin/images/13.jpg";
backgrounds[13] = "bin/images/14.jpg";
backgrounds[14] = "bin/images/15.jpg";
backgrounds[15] = "bin/images/16.jpg";
backgrounds[16] = "bin/images/17.jpg";
backgrounds[17] = "bin/images/18.jpg";
backgrounds[18] = "bin/images/19.jpg";
backgrounds[19] = "bin/images/20.jpg";
                        
$(document).ready(function()
 {
  $("#timer").mouseenter
  (function()
  {
   displayControlls();
  }
  );
  $("#timer").mouseleave
  (function()
  {
   hideControlls();
  }
  );
  $("#back").click
  (function()
  {
   rewindSlide();
  }
  );
  $("#play").click
  (function()
  {
   if(play == 0)
   {
    playSlideShow();
   }
   else
   {
    pauseSlideShow();
   }
  }
  );
  $("#forward").click
  (function()
  {
   advanceSlide();
  }
  );
  $("#sound").click
  (function()
  {
   if(audio == 0)
   {
    turnOnSound();
   }
   else
   {
    turnOffSound();
   }
  }
  );
 }
 );
function run(loadTime)
{
 currTime = Number(loadTime);
 var agent = navigator.userAgent.toLowerCase();
 if (agent.indexOf('firefox') > -1)
 {
  tick = new Audio("bin/sounds/tick2.ogg");
  ring = new Audio("bin/sounds/ring.ogg");
 }
 else
 {
  if(agent.indexOf('safari') > -1 && agent.indexOf('chrome') < 0)
  {
   setSafariStyle();
  }
  tick = new Audio("bin/sounds/tick2.mp3");
  ring = new Audio("bin/sounds/ring.mp3");
 }
 slideIndex = parseInt((Math.random())*100)%20;
 setBackground(slideIndex);
 updateTime(slideIndex);
 setInterval("updateTime(); changeCounter++; changeCounter%=10", 1000);
}
function updateTime()
{
 var timeRemaining = futureDate - currTime;
 if(timeRemaining <= 0)
 {
  setZeroCase();
  if(hasRung == 0)
  {
    ring.play();
    hasRung = 1;
  }
 }
 else
 {
  zeroCase = 0;
  hasRung = 0;
  if (audioPersistence != audio)
    audio = 1;
  var days = parseInt(timeRemaining / 86400);
  var hours = parseInt((timeRemaining % 86400) / 3600);
  var minutes = parseInt((timeRemaining % 3600) / 60);
  var seconds = parseInt(timeRemaining % 60);
  updateDisplay(days,hours,minutes,seconds);
  tickTock();
  currTime+= 1;
 }
}
function updateDisplay(days,hours,minutes,seconds)
{
 secondA = parseInt(seconds/10);
 updateDigit(secondA,"second-A");
 secondB = seconds%10;
 updateDigit(secondB,"second-B");
 minuteA = parseInt(minutes/10);
 updateDigit(minuteA,"minute-A");
 minuteB = minutes%10;
 updateDigit(minuteB,"minute-B");
 hourA = parseInt(hours/10);
 updateDigit(hourA,"hour-A");
 hourB = hours%10;
 updateDigit(hourB,"hour-B");
 dayA = parseInt(days/100);
 updateDigit(dayA,"day-A");
 dayB = parseInt(days/10)%10;
 updateDigit(dayB,"day-B");
 dayC = days%10;
 updateDigit(dayC,"day-C");
 if(changeCounter == 9 && play == 1)
 {
  slideIndex++;
  slideIndex%=20;
  setBackground(slideIndex)
 }
}
function updateDigit(value,digit)
{
 if(value == 0)
 {
  document.getElementById(digit+"-nine").style.visibility = "hidden";
  document.getElementById(digit+"-eight").style.visibility = "hidden";
  document.getElementById(digit+"-seven").style.visibility = "hidden";
  document.getElementById(digit+"-six").style.visibility = "hidden";
  document.getElementById(digit+"-five").style.visibility = "hidden";
  document.getElementById(digit+"-four").style.visibility = "hidden";
  document.getElementById(digit+"-three").style.visibility = "hidden";
  document.getElementById(digit+"-two").style.visibility = "hidden";
  document.getElementById(digit+"-one").style.visibility = "hidden";
  document.getElementById(digit+"-zero").style.visibility = "visible";
 }
 else if(value == 1)
 {
  document.getElementById(digit+"-nine").style.visibility = "hidden";
  document.getElementById(digit+"-eight").style.visibility = "hidden";
  document.getElementById(digit+"-seven").style.visibility = "hidden";
  document.getElementById(digit+"-six").style.visibility = "hidden";
  document.getElementById(digit+"-five").style.visibility = "hidden";
  document.getElementById(digit+"-four").style.visibility = "hidden";
  document.getElementById(digit+"-three").style.visibility = "hidden";
  document.getElementById(digit+"-two").style.visibility = "hidden";
  document.getElementById(digit+"-one").style.visibility = "visible";
  document.getElementById(digit+"-zero").style.visibility = "hidden";
 }
 else if(value == 2)
 {
  document.getElementById(digit+"-nine").style.visibility = "hidden";
  document.getElementById(digit+"-eight").style.visibility = "hidden";
  document.getElementById(digit+"-seven").style.visibility = "hidden";
  document.getElementById(digit+"-six").style.visibility = "hidden";
  document.getElementById(digit+"-five").style.visibility = "hidden";
  document.getElementById(digit+"-four").style.visibility = "hidden";
  document.getElementById(digit+"-three").style.visibility = "hidden";
  document.getElementById(digit+"-two").style.visibility = "visible";
  document.getElementById(digit+"-one").style.visibility = "hidden";
  document.getElementById(digit+"-zero").style.visibility = "hidden";
 }
 else if(value == 3)
 {
  document.getElementById(digit+"-nine").style.visibility = "hidden";
  document.getElementById(digit+"-eight").style.visibility = "hidden";
  document.getElementById(digit+"-seven").style.visibility = "hidden";
  document.getElementById(digit+"-six").style.visibility = "hidden";
  document.getElementById(digit+"-five").style.visibility = "hidden";
  document.getElementById(digit+"-four").style.visibility = "hidden";
  document.getElementById(digit+"-three").style.visibility = "visible";
  document.getElementById(digit+"-two").style.visibility = "hidden";
  document.getElementById(digit+"-one").style.visibility = "hidden";
  document.getElementById(digit+"-zero").style.visibility = "hidden";
 }
 else if(value == 4)
 {
  document.getElementById(digit+"-nine").style.visibility = "hidden";
  document.getElementById(digit+"-eight").style.visibility = "hidden";
  document.getElementById(digit+"-seven").style.visibility = "hidden";
  document.getElementById(digit+"-six").style.visibility = "hidden";
  document.getElementById(digit+"-five").style.visibility = "hidden";
  document.getElementById(digit+"-four").style.visibility = "visible";
  document.getElementById(digit+"-three").style.visibility = "hidden";
  document.getElementById(digit+"-two").style.visibility = "hidden";
  document.getElementById(digit+"-one").style.visibility = "hidden";
  document.getElementById(digit+"-zero").style.visibility = "hidden";
 }
 else if(value == 5)
 {
  document.getElementById(digit+"-nine").style.visibility = "hidden";
  document.getElementById(digit+"-eight").style.visibility = "hidden";
  document.getElementById(digit+"-seven").style.visibility = "hidden";
  document.getElementById(digit+"-six").style.visibility = "hidden";
  document.getElementById(digit+"-five").style.visibility = "visible";
  document.getElementById(digit+"-four").style.visibility = "hidden";
  document.getElementById(digit+"-three").style.visibility = "hidden";
  document.getElementById(digit+"-two").style.visibility = "hidden";
  document.getElementById(digit+"-one").style.visibility = "hidden";
  document.getElementById(digit+"-zero").style.visibility = "hidden";
 }
 else if(value == 6)
 {
  document.getElementById(digit+"-nine").style.visibility = "hidden";
  document.getElementById(digit+"-eight").style.visibility = "hidden";
  document.getElementById(digit+"-seven").style.visibility = "hidden";
  document.getElementById(digit+"-six").style.visibility = "visible";
  document.getElementById(digit+"-five").style.visibility = "hidden";
  document.getElementById(digit+"-four").style.visibility = "hidden";
  document.getElementById(digit+"-three").style.visibility = "hidden";
  document.getElementById(digit+"-two").style.visibility = "hidden";
  document.getElementById(digit+"-one").style.visibility = "hidden";
  document.getElementById(digit+"-zero").style.visibility = "hidden";
 }
 else if(value == 7)
 {
  document.getElementById(digit+"-nine").style.visibility = "hidden";
  document.getElementById(digit+"-eight").style.visibility = "hidden";
  document.getElementById(digit+"-seven").style.visibility = "visible";
  document.getElementById(digit+"-six").style.visibility = "hidden";
  document.getElementById(digit+"-five").style.visibility = "hidden";
  document.getElementById(digit+"-four").style.visibility = "hidden";
  document.getElementById(digit+"-three").style.visibility = "hidden";
  document.getElementById(digit+"-two").style.visibility = "hidden";
  document.getElementById(digit+"-one").style.visibility = "hidden";
  document.getElementById(digit+"-zero").style.visibility = "hidden";
 }
 else if(value == 8)
 {
  document.getElementById(digit+"-nine").style.visibility = "hidden";
  document.getElementById(digit+"-eight").style.visibility = "visible";
  document.getElementById(digit+"-seven").style.visibility = "hidden";
  document.getElementById(digit+"-six").style.visibility = "hidden";
  document.getElementById(digit+"-five").style.visibility = "hidden";
  document.getElementById(digit+"-four").style.visibility = "hidden";
  document.getElementById(digit+"-three").style.visibility = "hidden";
  document.getElementById(digit+"-two").style.visibility = "hidden";
  document.getElementById(digit+"-one").style.visibility = "hidden";
  document.getElementById(digit+"-zero").style.visibility = "hidden";
 }
 else
 {
  document.getElementById(digit+"-nine").style.visibility = "visible";
  document.getElementById(digit+"-eight").style.visibility = "hidden";
  document.getElementById(digit+"-seven").style.visibility = "hidden";
  document.getElementById(digit+"-six").style.visibility = "hidden";
  document.getElementById(digit+"-five").style.visibility = "hidden";
  document.getElementById(digit+"-four").style.visibility = "hidden";
  document.getElementById(digit+"-three").style.visibility = "hidden";
  document.getElementById(digit+"-two").style.visibility = "hidden";
  document.getElementById(digit+"-one").style.visibility = "hidden";
  document.getElementById(digit+"-zero").style.visibility = "hidden";
 }
}
function setBackground(slideIndex)
{
 document.getElementById("background").src = backgrounds[slideIndex];
}
function tickTock()
{
 if (audio == 1)
    tick.play();
}
function advanceSlide()
{
  slideIndex++;
  slideIndex%=20;
  setBackground(slideIndex)
  changeCounter = 0;
}
function rewindSlide()
{
  slideIndex--;
  if (slideIndex < 0) slideIndex = 19;
  setBackground(slideIndex)
  changeCounter = 0;
}
function hideControlls()
{
 //trigger.stopPropagation();
 //trigger.cancelBubble = true;
 //alert(triggerObject+" hide controls");
 document.getElementById("back").style.visibility = "hidden";
 document.getElementById("play").style.visibility = "hidden";
 document.getElementById("forward").style.visibility = "hidden";
 document.getElementById("sound").style.visibility = "hidden";
}
function displayControlls()
{
 //trigger.stopPropagation();
 //trigger.cancelBubble = true;
 //alert("display controls");
 if(zeroCase != 1)
 {
  document.getElementById("back").style.visibility = "visible";
  document.getElementById("play").style.visibility = "visible";
  document.getElementById("forward").style.visibility = "visible";
  document.getElementById("sound").style.visibility = "visible";
 }
}
function turnOffSound()
{
  //alert("it worked!");
  audio = 0;
  audioPersistence = 0;
  document.getElementById("sound-icon").src = "bin/images/mute_icon.svg";
}
function turnOnSound()
{
  //alert("sound on");
  audio = 1;
  audioPersistence = 1;
  document.getElementById("sound-icon").src = "bin/images/sound_icon.svg";
}
function pauseSlideShow()
{
  play = 0;
  document.getElementById("play-icon").src = "bin/images/play_icon.svg";
  document.getElementById("play-icon").className = document.getElementById("play-icon").className.replace("pause-icon","play-icon");
  //alert("it worked!");
}
function playSlideShow()
{
  play = 1;
  document.getElementById("play-icon").src = "bin/images/pause_icon.svg";
  document.getElementById("play-icon").className = document.getElementById("play-icon").className.replace("play-icon","pause-icon");
  //alert("it worked!");
}
function setZeroCase()
{
 updateDisplay(0,0,0,0);
 if(zeroCase == 0)
  audioPersistence = audio;
 hideControlls();
 audio = 0;
 zeroCase = 1;
}
function setSafariStyle()
{
 collection = document.querySelectorAll(".backward-icon");
 addClass(collection,"backward-icon-safari","backward-icon");
 collection = document.querySelectorAll(".pause-icon");
 addClass(collection,"pause-icon-safari","pause-icon");
 collection = document.querySelectorAll(".forward-icon");
 addClass(collection,"forward-icon-safari","forward-icon");
 collection = document.querySelectorAll(".sound-icon");
 addClass(collection,"sound-icon-safari","sound-icon");
 
 collection = document.querySelectorAll(".digit-1-3");
 addClass(collection,"digit-1-3-safari","digit-1-3");
 collection = document.querySelectorAll(".digit-2-3");
 addClass(collection,"digit-2-3-safari","digit-2-3");
 collection = document.querySelectorAll(".digit-3-3");
 addClass(collection,"digit-3-3-safari","digit-3-3");
 collection = document.querySelectorAll(".digit-1-2");
 addClass(collection,"digit-1-2-safari","digit-1-2");
 collection = document.querySelectorAll(".digit-2-2");
 addClass(collection,"digit-2-2-safari","digit-2-2");
}
function addClass(members,newClass,oldClass)
{
 for(i=0;i<members.length;i++)
 {
  members[i].className = members[i].className.replace(oldClass,newClass);
 }
}