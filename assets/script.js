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
localStorage.getItem(".description")
$("#8 .description").getItem(localStorage.text);
$("#9 .description").getItem(localStorage.text);
$("#10 .description").getItem(localStorage.text);
$("#11 .description").getItem(localStorage.text);
$("#12 .description").getItem(localStorage.text);
$("#13 .description").getItem(localStorage.text);
$("#14 .description").getItem(localStorage.text);
$("#15 .description").getItem(localStorage.text);
$("16 .description").getItem(localStorage.text);
$("17 .description").getItem(localStorage.text);
$("18 .description").getItem(localStorage.text);
$("19 .description").getItem(localStorage.text);
$("20 .description").getItem(localStorage.text);

keepTime();
