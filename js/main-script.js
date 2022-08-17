function checkIntegrity() {
    if ('serviceWorker' in navigator) {
        let registration;
        const registerServiceWorker = async () => {
            registration = await navigator.serviceWorker.register('../script/sw.js');
        };
        registerServiceWorker();
    }
    let logged_in = false;
    if (typeof localStorage.getItem("logged_in") !== "undefined") {
        logged_in = localStorage.getItem("logged_in");
        if (logged_in == "false") {
            window.location = "./auth/index.html";
        }
        else if (logged_in == 'true') {
            return;
        }
        else {
            window.location = "./auth/index.html";
        }
    }
}
// if (!window.navigator.onLine) {
//     if (localStorage.getItem("listHadith") != null) {
//         let response = localStorage.getItem("listHadith");
//         for (var x = 0; x < 9; x++) {
//             var button =
//                 '<a href="./alhadith/hadithome.html?' +
//                 response.data[x].id +
//                 '|20"<button class="btn btn-lg text-white" style=" font-family: 'Mada', sans-serif;background-color:#f3ab65;border: 8px double #ffffff;border-radius:8px;">' +
//                 response.data[x].name +
//                 "- عدد الاحاديث " +
//                 response.data[x].available +
//                 "</button></a><br><br>";
//             $(".hadithModalBody").append(button);
//         }
//     }
//     else{
//         alert("يبدو أنك غير متصل :(");
//     }
// }
$('[data-target="#hadithModal"]').on("click", function () {
    $.ajax({
        url: "https://api.hadith.sutanlab.id/books/",
        type: "get",
        success: function (response) {
            for (var x = 0; x < 9; x++) {
                var button =
                    '<a href="./alhadith/hadithome.html?' +
                    response.data[x].id +
                    '|20"<button class="btn btn-lg text-white" style=" background-color:#f3ab65;;border: 8px double #031634;border-radius:6px;">' +
                    response.data[x].name +
                    "- عدد الاحاديث " +
                    response.data[x].available +
                    "</button></a><br><br>";
                $(".hadithModalBody").append(button);
            }
        },
        error: function (response) {
            $("#loadingText").html("عفوا لقد حصل خطأ!");
        },
    });
});
$('[data-dismiss="modal"]').on("click", function e() {
    console.log("حذف");
    $(".hadithModalBody").empty();
});
AOS.init();
var typed = new Typed("#typed", {
    strings: [
         " لا تنسى الصلاة و السلام",
       
        "على حبيبنا محمد",
    ],
    typeSpeed: 50,
    backSpeed: 20,
    showCursor: false,
    loop: true,


});
$("#prayBtn").click(function () {
    window.location = "www.sidimadtv.ml/sidi-tv2/index.html";
});

$("#CeramahBtn").click(function () {
    window.location = "www.sidimadtv.ml/sidi/listiptv.html";
});

$("#AsmaulBtn").click(function () {
    window.location = "www.sidimadtv.ml/sidi/listiptv.html";
});

$("#NiatBtn").click(function () {
    window.location = "hisnalmuslim/hisnalmuslim.html";
});

$("#NiatBtn1").click(function () {
    window.location = "adhkar/adhkar.html";


});

$("#web").click(function () {
    window.location = "www.sidimadtv.ml/sidi/favtv.html";


});

$("#web1").click(function () {
    window.location = "www.sidimadtv.ml/webtv.html";


});
