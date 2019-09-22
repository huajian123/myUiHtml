var adv = document.getElementsByClassName('adv')[0];
window.onscroll = function () {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > 990) {
        adv.className = "adv play";
    } else {
        adv.className = "adv";
    }
};
