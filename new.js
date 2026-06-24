let day;
let date = new Date().getDay();

if (date == 0) {
    day = "Sunday";
} else if (date == 1) {
    day = "Monday";
} else if (date == 2) {
    day = "Tuesday";
} else if (date == 3) {
    day = "Wednesday";
} else if (date == 4) {
    day = "Thursday";
} else if (date == 5) {
    day = "Friday";
} else if (date == 6) {
    day = "Saturday";
}

document.getElementById("demo").innerHTML = day;