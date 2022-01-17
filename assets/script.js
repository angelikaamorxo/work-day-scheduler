// Linking HTML
let currentDate = $('#currentDay');
let button9 = $('#button9am');
let button10 = $('#button10am');
let button11 = $('#button11am');
let button12 = $('#button12pm');
let button1 = $('#button1pm');
let button2 = $('#button2pm');
let button3 = $('#button3pm');
let button4 = $('#button4pm');
let button5 = $('#button5pm');
let resetBtn = $('clearBtn');

// Loads data
function init() {
    displayDate();
    newEvent();
    getData("text9am", 9);
    getData("text10am", 10);
    getData("text11am", 11);
    getData("text12pm", 12);
    getData("text1pm", 1);
    getData("text2pm", 2);
    getData("text3pm", 3);
    getData("text4pm", 4);
    getData("text5pm", 5);
}

// Display the date
function displayDate() {
    let liveDate = moment().format('dddd, MMMM Do');
    currentDate.text(liveDate);
}

// User adds new event
function newEvent() {
    let currentHour = moment().format("H");
    for (let i = 9; i < 19; i++) {
        if (i == currentHour) {
            $('#textarea' + i).addClass('present');
        } else if (i > currentHour) {
            $('#textarea' + i).addClass('future');
        } else {
            $('#textarea' + i).addClass('past');
        }
    }
    if (currentHour == 24) {
        clearData();
    }
}

function setData(text, num) {
    let data = $('#textarea' + num).val();
    localStorage.setItem(text, data)
}

function getData(textArea, num) {
    $('#textarea' + num).text(localStorage.getItem(textArea));
}

function clearData() {
    localStorage.clear();
    for (let i = 9; i < 24; i++) {
        $('#textarea' + i).text("");
    }
}

resetBtn.on("click, clearData");

button9.on("click", function () {
    setData("text9am", 9);
})

button10.on("click", function () {
    setData("text10am", 10);
})

button11.on("click", function () {
    setData("text11am", 11);
})

button12.on("click", function () {
    setData("text12pm", 12);
})

button1.on("click", function () {
    setData("text1pm", 1);
})

button2.on("click", function () {
    setData("text2pm", 2);
})

button3.on("click", function () {
    setData("text3pm", 3);
})

button4.on("click", function () {
    setData("text4pm", 4);
})

button5.on("click", function () {
    setData("text5pm", 5);
})


init();

setInterval(newEvent, 1000);
setInterval(displayDate, 1000);