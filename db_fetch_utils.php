<?php
require('config.php');

function dbConnect() {
  return new mysqli("localhost", DB_USER, DB_PASSWORD, DB_NAME);
}

function getColInLastInserted($table, $col, $conn) {
  $query = "select $col from $table where id = (select max(id) from $table)";
  $result = $conn->query($query);
  $row = $result->fetch_assoc();
  return $row[$col] ;
}

function getEventTime($conn = null) {
  $conn = $conn ?: dbConnect();
  return getColInLastInserted('event_times', 'event_time', $conn);
}
?>
