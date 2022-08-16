let tensHours = document.getElementById("tensHours");
let onesHours = document.getElementById("onesHours");
let tensMinutes = document.getElementById("tensMinutes");
let onesMinutes = document.getElementById("onesMinutes");
let tensSeconds = document.getElementById("tensSeconds");
let onesSeconds = document.getElementById("onesSeconds");

function showClock() {
    let myDate = new Date();
    let second = (myDate.getSeconds()<10) ? "0"+myDate.getSeconds() : myDate.getSeconds(); 
    let minute = (myDate.getMinutes()<10) ? "0"+myDate.getMinutes() : myDate.getMinutes(); 
    let hour = (myDate.getHours()<10) ? "0"+myDate.getHours() : myDate.getHours(); 

    //Seconds
    onesSeconds.innerHTML = String(second)[1]
    tensSeconds.innerHTML = String(second)[0]
    //Minutes
    onesMinutes.innerHTML = String(minute)[1]
    tensMinutes.innerHTML = String(minute)[0]
    //Hours
    onesHours.innerHTML = String(hour)[1]
    tensHours.innerHTML = String(hour)[0]
    setTimeout(showClock,1000)
}
showClock()

