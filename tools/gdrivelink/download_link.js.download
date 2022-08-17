  function $(e) {
    return document.getElementById(e)
  }

  function generatelink() {
    var e = $("driveID").value,
      n = e.indexOf("google.com");
    if (-1 != n) {
      var i = e.indexOf("d/"),
        d = e.indexOf("/view"),
        o = e.slice(i + 2, d),
        a = "https://drive.google.com/$type" + o; - 1 !== e.indexOf("file") ? a = a.replace("$type", "uc?export=download&id=") : (d = e.indexOf("/view")), 
		$("link_container").value = a, 
		$("link_container").select()
    } else $("link_container").value = "THE URL IS INVALID";
	var f = document.getElementById("container");
  f.style.display = "block";
  var f = document.getElementById("driveID");
  f.style.display = "none";
  var f = document.getElementById("get-button");
  f.style.display = "none";
  }
  window.onload = function() {
    $("driveID").focus(), $("get-button").onclick = generatelink
  };
  
  var clipboard = new Clipboard(".button-link");
clipboard.on("success", function (o) {
    console.log(o), document.getElementById("btnInfo")
        .style.display = "block", document.getElementById("button-link")
        .style.display = "none", document.getElementById("result-box")
        .style.display = "none", document.getElementById("btn-refresh")
        .style.display = "none", document.getElementById("get-another")
        .style.display = "block"
}), clipboard.on("error", function (o) {
    console.log(o)
});