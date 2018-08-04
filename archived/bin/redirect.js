function redirect()
{
 //alert(navigator.appVersion); //For debugging
 var client = navigator.appVersion;
 if(client.indexOf("Android")!=-1 || client.indexOf("iPhone")!=-1 || client.indexOf("iPad")!=-1 || client.indexOf("Chrome")==-1 && client.indexOf("Safari")!=-1)
 {
  window.location = "http://stuwww.tcu.edu/dwoodworth/Countdown/mobile.html";
 }
}