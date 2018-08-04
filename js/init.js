$(document).ready(function() {
    var time;
    $.get("time.php", function(data) {
      time = data;
    }).always(function() {
      time = time || Math.round(new Date() / 1000);
      run(time);
    });
});