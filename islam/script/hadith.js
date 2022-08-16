var param = location.search.substring(1);
var splitter = param.split("|");
var hadithId = splitter[0];
var page = parseInt(splitter[1]);
AOS.init();
$(document).ready(function () {
    if (page == 20) {
        $('.btnPrev').addClass("disabled")
    }
    $.ajax({
        url: "https://quranapisul.herokuapp.com/books/" + hadithId + "?range=" + (page - 19) + "-" + page,
        type: "get",
        success: function (response) {
            $("#loadingText").fadeOut(100);
            $("#mainFrameHadith").fadeIn(1000);

           for (var x = 0; x < 19; x++) {
                var content = '<h5> الحديث رقم :-' + response.data.hadiths[x].number + '</h5><a data-aos="zoom-in" data-aos-delay="200" style="color:black;font-weight:bold;background-color:#f3ab65;border:4px solid #031634;box-shadow:-15px 0px 0px #f3ab65;" class="rounded list-group-item text-white list-group-item-action flex-column align-items-start"><div class="d-flex w-100 justify-content-"><h5  style="color:black;font-weight:bold;background-color:#f3ab65;border:0px solid #031634;border-radius:2px;" class="mb-1">' + response.data.hadiths[x].arab + '</h5></div><p class="mb-1 addReadMore showlesscontent"> </p></a><br><br>';
                $("#mainContent").append(content);
            }
            $("#hadithTitle").html("("+ response.data.name+")" + " الحديث - عن رواية ");
            page += 20;
            AddReadMore();
        },
        error: function (response) {
            alert("عفوا لقد حصل خطأ!");
        }
    })
});

$(".btnNext").click(function () {
    window.history.replaceState(null, null, "?" + hadithId + "|" + page);
    location.reload();
});
$(".btnPrev").click(function () {
    if (!$(".btnPrev").hasClass('disabled')) {
        page -= 40;
        console.log(page);
        window.history.replaceState(null, null, "?" + hadithId + "|" + page);
        location.reload();
    }
});

function AddReadMore() {
    var carLmt = 280;
    var readMoreTxt = " ... اقرأ أكثر";
    var readLessTxt = " أقرأ أقل";
    $(".addReadMore").each(function () {
        if ($(this).find(".firstSec").length)
            return;
        var allstr = $(this).text();
        if (allstr.length > carLmt) {
            var firstSet = allstr.substring(0, carLmt);
            var secdHalf = allstr.substring(carLmt, allstr.length);
            var strtoadd = firstSet + "<span class='SecSec'>" + secdHalf + "</span><span class='readMore' style='color:white;font-weight:bold'  title='Click to Show More'>" + readMoreTxt + "</span><span class='readLess' style='color:white;font-weight:bold'  title='Click to Show Less'>" + readLessTxt + "</span>";
            $(this).html(strtoadd);
        }
    });
    $(document).on("click", ".readMore,.readLess", function () {
        $(this).closest(".addReadMore").toggleClass("showlesscontent showmorecontent");
    });
}