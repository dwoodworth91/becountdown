var backgrounds = new Array();
backgrounds[0] = "images/1.jpg";
backgrounds[1] = "images/2.jpg";
backgrounds[2] = "images/3.jpg";
backgrounds[3] = "images/4.jpg";
backgrounds[4] = "images/5.jpg";
backgrounds[5] = "images/6.jpg";
backgrounds[6] = "images/7.jpg";
backgrounds[7] = "images/8.jpg";
backgrounds[8] = "images/9.jpg";
backgrounds[9] = "images/10.jpg";
backgrounds[10] = "images/11.jpg";
backgrounds[11] = "images/12.jpg";
backgrounds[12] = "images/13.jpg";
backgrounds[13] = "images/14.jpg";
backgrounds[14] = "images/15.jpg";
backgrounds[15] = "images/16.jpg";
backgrounds[16] = "images/17.jpg";
backgrounds[17] = "images/18.jpg";
backgrounds[18] = "images/19.jpg";
backgrounds[19] = "images/20.jpg";

var slideIndex = 0;
var slideInterval;

function play(){
	advance();
	setResetInterval();
}
function pause(){
	clearInterval(slideInterval);
	slideInterval = null;
}
function advance(){
	swipeBG("left");
	setResetInterval();
}
function rewind(){
	swipeBG("right");
	setResetInterval();
}

function setResetInterval(){
	if(slideInterval) clearInterval(slideInterval);
	slideInterval = setInterval(advance, 5000);
}
function swipeBG(side){
	var otherSide = side === "right" ? "left" : "right";
	var background = $(".bg:not(.bg-right, .bg-left)");
	var incomingElm = $(".bg-"+otherSide);
	var outgoingElm = $(".bg-"+side);
	
	background.addClass("bg-"+side);
	incomingElm.removeClass("bg-"+otherSide);
	outgoingElm.remove();
	createNewBG(otherSide);
}
function createNewBG(side){
	var imageNumb = side === "right" ? prevSlideIndex() : nextSlideIndex();
	$(document.body).prepend("<div class='bg bg-"+side+"'><img src='"+backgrounds[imageNumb]+"'></div>");
}
function startingSlideIndex(){
	return slideIndex = parseInt((Math.random())*100)%backgrounds.length;
}
function nextSlideIndex(){
	slideIndex++;
	return slideIndex = slideIndex % backgrounds.length;
}
function prevSlideIndex(){
	slideIndex--;
	return slideIndex = slideIndex >= 0 ? slideIndex : backgrounds.length - 1;
}

$(document).ready(function(){
	$(".bg img").attr("src", backgrounds[startingSlideIndex()]);
	createNewBG("right");
	createNewBG("left");	
	setResetInterval();
	
	$("#playPause").click(function(){
		if(slideInterval){
			$(this).html("Play");
			pause();
		} else {
			$(this).html("Pause");
			play();
		}
		event.stopPropagation();
	});
	
	$("#muteUnmute").click(function(){
		event.stopPropagation();
	});
	
	$("body").on("click", function(event){ //Set up slide show advance/rewind logic
		setResetInterval();
		var width = event.currentTarget.offsetWidth;
		if(event.clientX > width/2) advance();
		else rewind();
	});
	
	$("body").on("swipeleft", function(event){
		advance();
	}).on("swiperight", function(event){
		rewind();
	});
});