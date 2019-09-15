var dottes = document.querySelectorAll(".dottes label");

var bannerList = document.getElementsByClassName("banner-list");

var radioList = document.querySelectorAll("input[name='r']")

for (var i = 0; i < dottes.length; i++) {
    dottes[i].addEventListener("click", function () {
        cleanActive();
        this.className = "active";
    })
}
var cleanActive = function () {
    for (var i = 0; i < dottes.length; i++) {
        dottes[i].className = "";
    }
}
