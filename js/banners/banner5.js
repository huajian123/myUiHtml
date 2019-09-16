// 轮播图对象
var bannerItems = document.getElementsByClassName('banner-item');
//轮播图list
var bannerList = document.getElementsByClassName("banner-list");
// 上一张按钮对象
var goPreBtn = document.getElementsByClassName("pre");
// 下一张按钮对象
var goNexBtn = document.getElementsByClassName("next");
var index = 0;// index 表示第几张图片展示
// 最下面一排小点对象
var points = document.querySelectorAll(".dottes span");
var timeOutFlag = null;

// 移除下面小点的选中类active
function cleanActive() {
    for (var i = 0; i < points.length; i++) {
        points[i].className = "";
    }
}

// 点击下一张按钮
goNexBtn[0].addEventListener('click', function () {
    if (timeOutFlag != null) {
        return
    }
    changeIndex("next");
    goIndex();
    resertInterval();
    // 这是为了不让按钮在0.3秒内连续点击，不然会因动画延迟而产生轮播图错位
    timeOutFlag = setTimeout(function () {
        timeOutFlag = null
    }, 300)
});

// 点击上一张按钮
goPreBtn[0].addEventListener('click', function () {
    if (timeOutFlag != null) {
        return
    }
    changeIndex("pre");
    goIndex();
    resertInterval();
    timeOutFlag = setTimeout(function () {
        timeOutFlag = null
    }, 300)
});

for (var i = 0; i < points.length; i++) {
    points[i].addEventListener("click", function () {
        index = this.getAttribute("dot-index");
        goIndex();
        resertInterval();
    })
}

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

// 去当前被选中的那一个对象
var goIndex = function () {
    cleanActive();
   // bannerItems[index].className = "banner-item active";
    points[index].className = "active";
    var width = parseFloat(getElementStyle(bannerItems[0], 'width'));
    bannerList[0].style.marginLeft = -(width * (+index)) + "px";
};

var carouseFn = function () {
    changeIndex("next");
    goIndex()
};

var interval = setInterval(carouseFn, 3000);

var resertInterval = function () {
    clearInterval(interval);
    interval = setInterval(carouseFn, 3000);
};
