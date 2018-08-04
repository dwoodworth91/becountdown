$(document).ready(function()
 {
  $("#fbshare").click
  (function()
  {
   window.open('http://www.facebook.com/sharer/sharer.php?u='+document.URL+'&t=Bunke Reunion Countdown', 'facebook_share', 'height=320, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
  }
  );
  $("#twshare").click
  (function()
  {
   window.open('https://twitter.com/home?status='+document.URL, 'twitter_share', 'height=320, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
  }
  );
  $("#gpshare").click
  (function()
  {
   window.open('https://plus.google.com/share?url='+document.URL, 'twitter_share', 'height=320, width=640, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, directories=no, status=no');
  }
  );
 }
 );