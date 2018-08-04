<!DOCTYPE html">
<html>
<head>
 <title>Banner Elk Countdown Timer</title>
 <meta charset="UTF-8" />
 <link rel="stylesheet" type ="text/css" href ="bin\timer-embed-style.css" />
 <link rel="stylesheet" type ="text/css" href ="bin\main-style.css" />
 <script src="bin\jquery-1.11.0.min.js"></script>
 <script type = "text/javascript" src = "bin\timer_v3.js"></script>
 <script type = "text/javascript" src = "bin\share.js"></script>
</head>
<body onload = "run('<?php print(time());?>')">
 <!-- <script type = "text/javascript" src = "bin\redirect.js"></script> -->
 <div id="content">
	<h1 class = "title"> Official Banner Elk Countdown Timer</h1>
	<div class = "navbar"> 
		<ul>
			<li class = "current"><a href="index.html">Version 6</a></li><li 
			><a href="CountdownV5.html">Version 5</a></li><li 
			><a href="CountdownV4.html">Version 4</a></li><li 
			><a href="CountdownV3.html">Version 3</a></li><li 
			><a href="CountdownV2.html">Version 2</a></li><li 
			><a href="CountdownV1.html">Version 1</a></li>
		</ul>
	</div>
    <p>
      <div class = "timer-frame" id = "timer">
	  
		  <!-- Begin Background Image -->
			<img src="bin/images/1.jpg" class="timer-background" id = "background">
		  <!-- End Background Image -->
          
          <!-- Begin Button Images -->
          
          <div>
			<div class="box small-box backward-box" id = "back"><img src="bin\images\backward_icon.svg" class = "icon backward-icon"></img><div></div></div>
			<div class="box small-box play-box" id = "play"><img src="bin\images\pause_icon.svg" class = "icon pause-icon" id = "play-icon"></img><div></div></div>
			<div class="box small-box forward-box" id = "forward"><img src="bin\images\forward_icon.svg" class = "icon forward-icon"></img><div></div></div>
			<div class="box small-box sound-box" id = "sound"><img src="bin\images\mute_icon.svg" class = "icon sound-icon" id = "sound-icon"></img><div></div></div>
          </div>
          
          <!-- End Button Images -->
          
          <!-- Begin Digit Divs -->
          
		  <div class="box tall-box days-box">
			<img src="bin\images\nine.svg" id = "day-A-nine" class = "digit digit-1-3">
			<img src="bin\images\eight.svg" id = "day-A-eight" class = "digit digit-1-3">
			<img src="bin\images\seven.svg" id = "day-A-seven" class = "digit digit-1-3">
			<img src="bin\images\six.svg" id = "day-A-six" class = "digit digit-1-3">
			<img src="bin\images\five.svg" id = "day-A-five" class = "digit digit-1-3">
			<img src="bin\images\four.svg" id = "day-A-four" class = "digit digit-1-3">
			<img src="bin\images\three.svg" id = "day-A-three" class = "digit digit-1-3">
			<img src="bin\images\two.svg" id = "day-A-two" class = "digit digit-1-3">
			<img src="bin\images\one.svg" id = "day-A-one" class = "digit digit-1-3">
			<img src="bin\images\zero.svg" id = "day-A-zero" class = "digit digit-1-3">
			
			<img src="bin\images\nine.svg" id = "day-B-nine" class = "digit digit-2-3">
			<img src="bin\images\eight.svg" id = "day-B-eight" class = "digit digit-2-3">
			<img src="bin\images\seven.svg" id = "day-B-seven" class = "digit digit-2-3">
			<img src="bin\images\six.svg" id = "day-B-six" class = "digit digit-2-3">
			<img src="bin\images\five.svg" id = "day-B-five" class = "digit digit-2-3">
			<img src="bin\images\four.svg" id = "day-B-four" class = "digit digit-2-3">
			<img src="bin\images\three.svg" id = "day-B-three" class = "digit digit-2-3">
			<img src="bin\images\two.svg" id = "day-B-two" class = "digit digit-2-3">
			<img src="bin\images\one.svg" id = "day-B-one" class = "digit digit-2-3">
			<img src="bin\images\zero.svg" id = "day-B-zero" class = "digit digit-2-3">
          
			<img src="bin\images\nine.svg" id = "day-C-nine" class = "digit digit-3-3">
			<img src="bin\images\eight.svg" id = "day-C-eight" class = "digit digit-3-3">
			<img src="bin\images\seven.svg" id = "day-C-seven" class = "digit digit-3-3">
			<img src="bin\images\six.svg" id = "day-C-six" class = "digit digit-3-3">
			<img src="bin\images\five.svg" id = "day-C-five" class = "digit digit-3-3">
			<img src="bin\images\four.svg" id = "day-C-four" class = "digit digit-3-3">
			<img src="bin\images\three.svg" id = "day-C-three" class = "digit digit-3-3">
			<img src="bin\images\two.svg" id = "day-C-two" class = "digit digit-3-3">
			<img src="bin\images\one.svg" id = "day-C-one" class = "digit digit-3-3">
			<img src="bin\images\zero.svg" id = "day-C-zero" class = "digit digit-3-3">
		  <div></div></div>
		  
		  <div class="box tall-box hours-box">
			<img src="bin\images\nine.svg" id = "hour-A-nine" class = "digit digit-1-2">
			<img src="bin\images\eight.svg" id = "hour-A-eight" class = "digit digit-1-2">
			<img src="bin\images\seven.svg" id = "hour-A-seven" class = "digit digit-1-2">
			<img src="bin\images\six.svg" id = "hour-A-six" class = "digit digit-1-2">
			<img src="bin\images\five.svg" id = "hour-A-five" class = "digit digit-1-2">
			<img src="bin\images\four.svg" id = "hour-A-four" class = "digit digit-1-2">
			<img src="bin\images\three.svg" id = "hour-A-three" class = "digit digit-1-2">
			<img src="bin\images\two.svg" id = "hour-A-two" class = "digit digit-1-2">
			<img src="bin\images\one.svg" id = "hour-A-one" class = "digit digit-1-2">
			<img src="bin\images\zero.svg" id = "hour-A-zero" class = "digit digit-1-2">
          
			<img src="bin\images\nine.svg" id = "hour-B-nine" class = "digit digit-2-2">
			<img src="bin\images\eight.svg" id = "hour-B-eight" class = "digit digit-2-2">
			<img src="bin\images\seven.svg" id = "hour-B-seven" class = "digit digit-2-2">
			<img src="bin\images\six.svg" id = "hour-B-six" class = "digit digit-2-2">
			<img src="bin\images\five.svg" id = "hour-B-five" class = "digit digit-2-2">
			<img src="bin\images\four.svg" id = "hour-B-four" class = "digit digit-2-2">
			<img src="bin\images\three.svg" id = "hour-B-three" class = "digit digit-2-2">
			<img src="bin\images\two.svg" id = "hour-B-two" class = "digit digit-2-2">
			<img src="bin\images\one.svg" id = "hour-B-one" class = "digit digit-2-2">
			<img src="bin\images\zero.svg" id = "hour-B-zero" class = "digit digit-2-2">
		  <div></div></div>
		  
		  <div class="box tall-box minutes-box">
			<img src="bin\images\nine.svg" id = "minute-A-nine" class = "digit digit-1-2">
			<img src="bin\images\eight.svg" id = "minute-A-eight" class = "digit digit-1-2">
			<img src="bin\images\seven.svg" id = "minute-A-seven" class = "digit digit-1-2">
			<img src="bin\images\six.svg" id = "minute-A-six" class = "digit digit-1-2">
			<img src="bin\images\five.svg" id = "minute-A-five" class = "digit digit-1-2">
			<img src="bin\images\four.svg" id = "minute-A-four" class = "digit digit-1-2">
			<img src="bin\images\three.svg" id = "minute-A-three" class = "digit digit-1-2">
			<img src="bin\images\two.svg" id = "minute-A-two" class = "digit digit-1-2">
			<img src="bin\images\one.svg" id = "minute-A-one" class = "digit digit-1-2">
			<img src="bin\images\zero.svg" id = "minute-A-zero" class = "digit digit-1-2">
          
			<img src="bin\images\nine.svg" id = "minute-B-nine" class = "digit digit-2-2">
			<img src="bin\images\eight.svg" id = "minute-B-eight" class = "digit digit-2-2">
			<img src="bin\images\seven.svg" id = "minute-B-seven" class = "digit digit-2-2">
			<img src="bin\images\six.svg" id = "minute-B-six" class = "digit digit-2-2">
			<img src="bin\images\five.svg" id = "minute-B-five" class = "digit digit-2-2">
			<img src="bin\images\four.svg" id = "minute-B-four" class = "digit digit-2-2">
			<img src="bin\images\three.svg" id = "minute-B-three" class = "digit digit-2-2">
			<img src="bin\images\two.svg" id = "minute-B-two" class = "digit digit-2-2">
			<img src="bin\images\one.svg" id = "minute-B-one" class = "digit digit-2-2">
			<img src="bin\images\zero.svg" id = "minute-B-zero" class = "digit digit-2-2">
		  <div></div></div>
		  
		  <div class="box tall-box seconds-box">
			<img src="bin\images\nine.svg" id = "second-A-nine" class = "digit digit-1-2">
			<img src="bin\images\eight.svg" id = "second-A-eight" class = "digit digit-1-2">
			<img src="bin\images\seven.svg" id = "second-A-seven" class = "digit digit-1-2">
			<img src="bin\images\six.svg" id = "second-A-six" class = "digit digit-1-2">
			<img src="bin\images\five.svg" id = "second-A-five" class = "digit digit-1-2">
			<img src="bin\images\four.svg" id = "second-A-four" class = "digit digit-1-2">
			<img src="bin\images\three.svg" id = "second-A-three" class = "digit digit-1-2">
          	<img src="bin\images\two.svg" id = "second-A-two" class = "digit digit-1-2">
          	<img src="bin\images\one.svg" id = "second-A-one" class = "digit digit-1-2">
          	<img src="bin\images\zero.svg" id = "second-A-zero" class = "digit digit-1-2">
 	
          	<img src="bin\images\nine.svg" id = "second-B-nine" class = "digit digit-2-2">
          	<img src="bin\images\eight.svg" id = "second-B-eight" class = "digit digit-2-2">
          	<img src="bin\images\seven.svg" id = "second-B-seven" class = "digit digit-2-2">
          	<img src="bin\images\six.svg" id = "second-B-six" class = "digit digit-2-2">
          	<img src="bin\images\five.svg" id = "second-B-five" class = "digit digit-2-2">
          	<img src="bin\images\four.svg" id = "second-B-four" class = "digit digit-2-2">
          	<img src="bin\images\three.svg" id = "second-B-three" class = "digit digit-2-2">
          	<img src="bin\images\two.svg" id = "second-B-two" class = "digit digit-2-2">
          	<img src="bin\images\one.svg" id = "second-B-one" class = "digit digit-2-2">
          	<img src="bin\images\zero.svg" id = "second-B-zero" class = "digit digit-2-2">
		  <div></div></div>
          
          <!-- End Digit Divs -->
          
          <!-- Begin Field Labels -->
          
		  <div class="box short-box days-label-box"><h1>Days</h1><div></div></div>
		  <div class="box short-box hours-label-box"><h1>Hours</h1><div></div></div>
		  <div class="box short-box minutes-label-box"><h1>Minutes</h1><div></div></div>
		  <div class="box short-box seconds-label-box"><h1>Seconds</h1><div></div></div>
          
          <!-- End Field Labels -->
    </div>
	<div class="footer">
		<div>
			<img src="bin\images\html5_logo.gif" class = "logo html5-logo">
			<img src="bin\images\css3_logo.png" class = "logo css3-logo">
			<img src="bin\images\jquery_logo.gif" class = "jquery-logo">
			Bunke Family Reunion Countdown
			<br>
			Written by David Woodworth
			<br>
			Last modified:
			<script>
				document.write(document.lastModified);
			</script>
		</div>
	</div>
 </div>
 <div class="share">
	<img src="bin\images\facebook_icon.png" id = "fbshare">
	<br>
	<img src="bin\images\twitter_icon.png" id = "twshare">
	<br>
	<img src="bin\images\googlePlus_icon.png" id = "gpshare">
 </div>
</body>
</html>