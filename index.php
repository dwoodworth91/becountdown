<!DOCTYPE html>
<html manifest="page.appcache">
	<head>
		<title>Banner Elk Countdown Timer</title>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" type ="text/css" href ="css\main.css?v=1" />
		<link rel="stylesheet" type ="text/css" href ="libs\odometer-04ac802516\themes\odometer-theme-minimal.css" />
		<script src="libs\jquery-2.1.3\jquery-2.1.3.min.js"></script>
		<script src="libs\odometer-04ac802516\odometer.min.js"></script>
		<script src="libs\jquery-1.4.5-mobile-touch-only\jquery.mobile.custom.min.js"></script>
		<script type = "text/javascript" src = "js\timer_v5.js?t=1"></script>
		<script type = "text/javascript" src = "js\slideshow.js"></script>
		<script type = "text/javascript" src = "js\init.js"></script>
		</head>
	<body>
		<div class="bg">
			<img id="bg-img" src="images/1.jpg" alt="">
		</div>
		
		<!-- Begin slide arrows -->
		<img id="back-btn" src="images/previous.svg" class="btn slide-btn" alt="">
		<img id="forward-btn" src="images/next.svg" class="btn slide-btn" alt="">
		<!-- End slide arrows -->
		
		<div class="odometer-centerizer">
			<div class="odometer-container">
				<div class="odometer-accent">
					<div class="digit" id="days" minIntegerLen="3"></div>
					<div class="spacer">&nbsp;</div>
					<div class="digit" id="hours" minIntegerLen="2"></div>
					<div class="spacer">&nbsp;</div>
					<div class="digit" id="minutes" minIntegerLen="2"></div>
					<div class="spacer">&nbsp;</div>
					<div class="digit" id="seconds" minIntegerLen="2"></div>
				</div>
				<div>Countdown To Banner Elk</div>
				<!-- Begin control buttons -->
				<div>
					<div class="btn ctrl-btn" id="playPause">Pause</div>
					<div class="btn ctrl-btn" id="muteUnmute">Unmute</div>
				</div>
				<!-- End control buttons -->
			</div>
		</div>
	</body>
</html>