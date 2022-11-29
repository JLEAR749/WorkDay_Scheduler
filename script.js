//add current day at the top of the planner and how often it resets
var element = document.querySelector("#datepicker")

function setTime() {
    $("#datepicker").text(dayjs().format("YYYY-MMMM-DD HH:mm:ss"))
}
setInterval(setTime, 1000)

//function to check each hour block to see if it is past (gray), present (green), or future (red)

function setColors() {
    var currentHour = parseInt(dayjs().format("HH"));

    for (var i = 9; i <= 17; i++) {
        if (i < currentHour) {
            $("#" + "hour-" + i).addClass("past")
        }
        if (i === currentHour) {
            $("#" + "hour-" + i).addClass("present")
        }
        if (i > currentHour) {
            $("#" + "hour-" + i).addClass("future")
        }
    }
}
setColors();


var rowTimeBlock = document.querySelector('.container-lg px-5')

//if save button clicked, set item to local storage
$('.saveBtn').on('click', function () {
    var text = $(this).silblings(".container-lg px-5").text();
    var time = $(this).parent().attr('id');

    localStorage.setItem(timeKey, textValue);
});

$('#hour9').text(localStorage.getItem('hour9'));
$('#hour10').text(localStorage.getItem('hour10'));
$('#hour11').text(localStorage.getItem('hour11'));
$('#hour12').text(localStorage.getItem('hour12'));
$('#hour13').text(localStorage.getItem('hour13'));
$('#hour14').text(localStorage.getItem('hour14'));
$('#hour15').text(localStorage.getItem('hour15'));
$('#hour16').text(localStorage.getItem('hour16'));
$('#hour17').text(localStorage.getItem('hour17'));