// display current date at the top of the page https://stackoverflow.com/questions/32540044/html-display-current-date
var currentDay = moment().format("MMMM Do YYYY");
$("#currentDay").html(currentDay);

// color code blocks to indicate whether they are in the past, present, or future
function keepTime() {
    currentTime = moment().hour();

    $(".time-block").each(function () { // https://api.jquery.com/each/
        var hourBlock = parseInt($(this).attr("id"));

        if (hourBlock < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past")
        } else if (hourBlock === currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present")
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future")
        };
    });
};

// save events in local storage
$(".saveBtn").on("click", function () {
    var calendarEvent = $(this).siblings(".description").val();
    var eventTime = $(this).parent().attr("id");
    console.log(calendarEvent);
    console.log(eventTime);
    localStorage.setItem(eventTime, calendarEvent)
});

// get items from local storage
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
$("#18 .description").val(localStorage.getItem("18"));
$("#19 .description").val(localStorage.getItem("19"));
$("#20 .description").val(localStorage.getItem("20"));

keepTime();
