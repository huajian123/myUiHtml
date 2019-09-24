var adv = document.getElementsByClassName('adv')[0];
window.onscroll = function () {

    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var navHead = document.getElementsByTagName('header')[0];
    // 这里的100是 transform: translateY(100px);
    if (top > (adv.offsetTop - adv.offsetHeight - 300)) {
        adv.className = "adv play";
    } else {
        adv.className = "adv";
    }
    if (top > 90) {
        navHead.style.background = "white";
        navHead.firstElementChild.style.background = "white";
        navHead.style.color = "black";
        document.getElementsByClassName('navbar-logo')[0].style.background =`url(../../../imgs/byton-imgs/header-logo-dark.svg) no-repeat 100% 50%`

    } else {
        navHead.style.background = "transparent";
        navHead.firstElementChild.style.background = "rgba(0, 0, 0, .2)";
        navHead.style.color = "white";
        document.getElementsByClassName('navbar-logo')[0].style.background = `url(../../../imgs/byton-imgs/header-white-logo.svg) no-repeat 100% 50%`;
    }

};
