if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', {
    scope: '/becountdown/'
  })
}


$(document).ready(function() {
    Promise.all([
      $.get("time.php"),
      $.get("event_time.php"),
    ]).then(([time, eventTime]) => run(time, eventTime));
});
