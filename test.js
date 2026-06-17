const hour = new Date().getHours();
let  greeting;
if (hour < 15) {
    greeting = "Good Afternoon"
}
else {
    greeting = "Good evening"
}
document.getElementById("demo").innerHTML = greeting;