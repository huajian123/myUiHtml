var adv = document.getElementsByClassName('adv')[0];
window.onscroll = function () {
    var top = document.documentElement.scrollTop || document.body.scrollTop;

    // 这里的100是 transform: translateY(100px);
    if (top > (adv.offsetTop - adv.offsetHeight - 100)) {
        adv.className = "adv play";
    } else {
        adv.className = "adv";
    }
};
