// setInterval(function () {

//     alert("Every 2 second");
// }, 5000)
// setTimeout(function () {
//     alert("timeout once 3seconds")
// }, 3000);


function showTime() {

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "(AM)";

    if (hours === 0) {
        hours = 12;
    }


    if (hours > 12) {
        hours -= 12;
        session = "(PM)";
    }
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;


    var time = hours + ":" + minutes + ":" + seconds + " " + session;
    document.getElementById('digital-clock').innerHTML = time;

    setTimeout(function () {
        showTime();
    }, 1000)
}
// setInterval(function () {
//     showTime();
// }, 1000);



showTime();