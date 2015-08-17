function writeDate() {
    var dayElement = document.getElementById("day");

    var dayString; 
    switch (new Date().getDay()) {
        case 0:
            dayString = "Sunday";
            break;
        case 1: 
            dayString = "Monday";
            break;
        case 2: 
            dayString = "Tuesday";
            break;
        case 3: 
            dayString = "Wednesday";
            break;
        case 4: 
            dayString = "Thursday";
            break;
        case 5: 
            dayString = "Friday";
            break;
        case 6: 
            dayString = "Saturday";
            break;
    }

    dayElement.innerHTML = dayString;
}

function init() {
    writeDate();
}

window.onload = function() { 
    init();
};
