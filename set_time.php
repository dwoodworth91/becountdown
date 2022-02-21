<?php
require('db_fetch_utils.php');
$conn = dbConnect();

function checkPassword($conn) {
  $passwordHash = getColInLastInserted('passwords', 'password', $conn);
  return password_verify($_POST["currentPassword"], $passwordHash);
}

function isEventDateProvided() {
  return isset($_POST['eventTime']);
}

function getErrorStatusCode($conn) {
  if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    return 405;
  }

  if (!checkPassword($conn)) {
    return 401;
  }

  if (!isEventDateProvided()) {
      return 422;
  }
}

function insertColValIntoTable($table, $col, $valType, $val, $conn) {
  $stmt = $conn->prepare("insert into $table ($col) values(?)");
  $stmt->bind_param($valType, $val);
  $stmt->execute();
}

function maybeUpdateEventTime($conn) {
  $newEventTime = $_POST['eventTime'];
  $oldEventTime = getEventTime($conn);
  if ("$oldEventTime" != "$newEventTime") {
    insertColValIntoTable(
      'event_times', 'event_time', "i", $newEventTime, $conn
    );
  }
}

function maybeUpdatePassword($conn) {
  if (isset($_POST['newPassword']) && !$_POST['newPassword'] == "") {
    $hash = password_hash($_POST['newPassword'], PASSWORD_DEFAULT);
    insertColValIntoTable('passwords', 'password', "s", $hash, $conn);
  }
}

$errorStatusCode = getErrorStatusCode($conn);
if (isset($errorStatusCode)) {
  http_response_code($errorStatusCode);
} else {
  try {
    maybeUpdateEventTime($conn);
    maybeUpdatePassword($conn);
    echo getEventTime($conn);
  } catch (Exception $e) {
    http_response_code(500);
  }
}
?>
