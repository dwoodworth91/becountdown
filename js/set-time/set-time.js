const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';

const destroyEventTimePicker = () => {
  const eventTimeParent = $("#eventTimePicker").parent();
  $("#eventTimePicker").empty().remove().prependTo(eventTimeParent);
}

const setupEventTimePicker = selectedValue => {
  destroyEventTimePicker();
  const selectData =
    selectedValue && moment(selectedValue*1000).format(DATE_TIME_FORMAT);
  $('#eventTime').val(selectData);
  $('#eventTimePicker').dateTimePicker({
    positionShift: { top: 0, left: -290},
    selectData,
    dateFormat: DATE_TIME_FORMAT
  });
}

const inputValue = inputName => {
  const raw = $('#'+inputName).val();
  if (inputName === 'eventTime') {
    return raw && moment(raw, DATE_TIME_FORMAT).valueOf()  / 1000;
  } else {
    return raw;
  }
}

const readInputs = () => ['currentPassword', 'newPassword', 'eventTime']
  .map(inputName => [inputName, inputValue(inputName)])
  .reduce((acc, [k, v]) => { acc[k] = v; return acc; }, {});

$.when($.get( "event_time.php" ), $.ready).done(([eventTime]) => {
  setupEventTimePicker(eventTime)
});

$(document).ready(function() {
  $('#updateTime').on("submit", function(e) {
    e.preventDefault();

    $.post("set_time.php", readInputs()).done((resp) => {
      setupEventTimePicker(resp)
      alert("Update successful");
    }).error(resp => alert("Update Failed: "+resp.status + " / "+resp.statusText))
  });
})
