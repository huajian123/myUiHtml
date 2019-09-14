// 上一张按钮对象
var goPreBtn = document.getElementsByClassName("pre");
// 下一张按钮对象
var goNexBtn = document.getElementsByClassName("next");
var index = 0;// index 表示第几张图片展示
// 轮播图对象
var bannerItems = document.querySelectorAll('.banner-item');

var offsetX = parseFloat(getElementStyle(bannerItems[1], 'left'));


// 点击下一张按钮
goNexBtn[0].addEventListener('click', function () {
    index++;
    if (index === bannerItems.length) {
        for (var i = 0; i < bannerItems.length; i++) {
            var currentBannerItemLeft = parseFloat(getElementStyle(bannerItems[i], 'left'));
            bannerItems[i].style.left = "" + (currentBannerItemLeft + offsetX * (bannerItems.length - 1)) + "px";
        }
        index = 0;
        return;
    }
    for (var i = 0; i < bannerItems.length; i++) {
        var currentBannerItemLeft = parseFloat(getElementStyle(bannerItems[i], 'left'));
        bannerItems[i].style.left = "" + (currentBannerItemLeft - offsetX) + "px";
    }
});

// 点击上一张按钮
goPreBtn[0].addEventListener('click', function () {
    if (index === 0) {
        for (var i = 0; i < bannerItems.length; i++) {
            var currentBannerItemLeft = parseFloat(getElementStyle(bannerItems[i], 'left'));
            bannerItems[i].style.left = "" + (currentBannerItemLeft - offsetX * (bannerItems.length - 1)) + "px";
        }
        index = bannerItems.length-1;
        return;
    }

    for (var i = 0; i < bannerItems.length; i++) {
        var currentBannerItemLeft = parseFloat(getElementStyle(bannerItems[i], 'left'));
        bannerItems[i].style.left = "" + (currentBannerItemLeft + offsetX) + "px";
    }
    index--;
});

function getElementStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];   //第二个参数是伪类
    }
}
