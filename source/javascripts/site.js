// This is where it all goes :)
console.log('%cif ur reading this, hi ;)', 'color: lightseagreen; font-size: 24px;');

var today;
var month;
var months;
var year;

function setDate() {
    today = new Date();
    month = today.getMonth();
    months = [
        ['January', 31],
        ['February', feb()],
        ['March', 31],
        ['April', 30],
        ['May', 31],
        ['June', 30],
        ['July', 31],
        ['August', 31],
        ['September', 30],
        ['October', 31],
        ['November', 30],
        ['December', 31]
    ];
    year = today.getFullYear();
}

function feb() {
    var leapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    if (leapYear) {
        return 29;
    } else {
        return 28;
    }
}

function setCalendar() {
    var startDay = new Date(year, month, 1, 0, 0, 0, 0).getDay();
    for (var i = startDay; i < months[month][1]; i++) {
        var date_num = i - startDay + 1;
        var box = document.getElementById('box_' + i);
        var date = document.createElement('div');
        date.className = 'date';
        date.innerText = date_num;
        box.appendChild(date);
    }

    setEvents();
}

function createEvent(id, title, order) {
    event = document.createElement('div');
    event.className = 'event event' + order;
    event.innerText = title;
    document.getElementById('box_' + id).appendChild(event);
}

function setEvents() {
    var order = 0;
    for(var i = 3; i < 19; i++) {
        createEvent(i, 'General Meeting', order);
        order++;
        order = order % 3;
    }
}