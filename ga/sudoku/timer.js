// let a = 0; // variable for min increment;
// let cnt = 0;
// let sec = document.getElementById("sec");
// let min = document.getElementById("min");
// let play = document.getElementById("play");
// let submit = document.getElementById("submit");
// let reset = document.getElementById("reset");
// let timer = false;


// play.addEventListener('click', () => {
//     timer = true;
//     stopwatch();
// });

// submit.addEventListener('click', () => {
//     timer = false;

// });

// reset.addEventListener('click', () => {
//     timer = false;
//     a = 0;
//     cnt = 0;
//     min.innerHTML = "00";
//     sec.innerHTML = "00";
// });

// const stopwatch = () => {
//     if (timer === true) {
//         cnt = cnt + 1;

//         if (cnt === 60) {
//             cnt = 0;
//             a = a + 1;
//         }
//         if (a < 10) {
//             min.innerHTML = "0" + a;
//         } else {
//             min.innerHTML = a;
//         }
//         if (cnt < 10) {
//             sec.innerHTML = "0" + cnt;
//         } else {
//             sec.innerHTML = cnt;
//         }

//         setTimeout("stopwatch()", 1000);
//     }
// }