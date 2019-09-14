// 轮播图对象
var bannerItems = document.getElementsByClassName('banner-item');
// 上一张按钮对象
var goPreBtn = document.getElementsByClassName("pre");
// 下一张按钮对象
var goNexBtn = document.getElementsByClassName("next");
var index = 0;// index 表示第几张图片展示
// 最下面一排小点对象
var points = document.querySelectorAll(".dottes span");

// 清除样式的active类（有这个类则表示当前被选中的）
var cleanActive = function () {
    for (var i = 0; i < bannerItems.length; i++) {
        bannerItems[i].className = "banner-item";
    }
    for (var i = 0; i < points.length; i++) {
        points[i].className = "";
    }

};

// 去当前被选中的那一个对象
var goIndex = function (index) {
    cleanActive();
    bannerItems[index].className = "banner-item active";
    points[index].className = "active";
};

// 点击下一张按钮
goNexBtn[0].addEventListener('click', function () {
    changeIndex("next");
    goIndex(index);
    resertInterval();
});

// 点击上一张按钮
goPreBtn[0].addEventListener('click', function () {
    changeIndex("pre");
    goIndex(index);
    resertInterval();
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

for (var i = 0; i < points.length; i++) {
    points[i].addEventListener("click", function () {
        index = this.getAttribute("dot-index");
        goIndex(index);
        resertInterval();
    })
}

var carouseFn=function () {
    changeIndex("next");
    goIndex(index);
};

var interval = setInterval(carouseFn, 3000)

var resertInterval=function () {
    clearInterval(interval);
    interval = setInterval(carouseFn, 3000);
};
