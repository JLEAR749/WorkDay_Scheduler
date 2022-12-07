//add current day at the top of the planner and how often it resets
var element = document.querySelector("#datepicker")
var rowTimeBlock = document.querySelector('.container-lg px-5')

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

// ?$(document).ready(function () {
    //if save button clicked, set item to local storage
    $('.saveBtn').on('click', function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, text);
    });

// })


$('#9-hour').val(localStorage.getItem('hour-9'));
$('#10-hour').val(localStorage.getItem('hour-10'));
$('#11-hour').val(localStorage.getItem('hour-11'));
$('#12-hour').val(localStorage.getItem('hour-12'));
$('#13-hour').val(localStorage.getItem('hour-13'));
$('#14-hour').val(localStorage.getItem('hour-14'));
$('#15-hour').val(localStorage.getItem('hour-15'));
$('#16-hour').val(localStorage.getItem('hour-16'));
$('#17-hour').val(localStorage.getItem('hour-17'));