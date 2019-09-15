// 轮播图对象
var bannerItems = document.getElementsByClassName('banner-item');
//轮播图list
var bannerList = document.getElementsByClassName("banner-list");
// 上一张按钮对象
var goPreBtn = document.getElementsByClassName("pre");
// 下一张按钮对象
var goNexBtn = document.getElementsByClassName("next");
var index = 0;// index 表示第几张图片展示
// 点击下一张按钮
goNexBtn[0].addEventListener('click', function () {
    changeIndex("next");
    var marginLeft = parseFloat(getElementStyle(bannerList[0], 'marginLeft'));
    var width = parseFloat(getElementStyle(bannerItems[0], 'width'));
    bannerList[0].style.marginLeft = marginLeft - width + 'px';
    if (-width * bannerItems.length === parseFloat(bannerList[0].style.marginLeft)) {
        bannerList[0].style.marginLeft = "0px"
    }
});

// 点击上一张按钮
goPreBtn[0].addEventListener('click', function () {
    changeIndex("pre");
    var marginLeft = parseFloat(getElementStyle(bannerList[0], 'marginLeft'));
    var width = parseFloat(getElementStyle(bannerItems[0], 'width'));

    if (marginLeft === 0) {
        bannerList[0].style.marginLeft = -(width * (bannerItems.length - 1)) + "px";
    } else {
        bannerList[0].style.marginLeft = width + marginLeft + 'px';
    }
});

changeIndex = function (type) {
    if (type === "pre") {
        index--;
        if (index < 0) {
            index = bannerItems.length - 1;
        }
    }
    if (type === "next") {
        index++;
        if (index >= bannerItems.length) {
            index = 0;
        }
    }
};

function getElementStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];   //第二个参数是伪类
    }
}
