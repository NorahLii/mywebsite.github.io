// 使用原生JavaScript選到class="navbar-btn"的按鈕標籤並為其綁定click事件
document.querySelector(".navbar-btn").addEventListener("click", function () {
    // 表達點擊後要做的動作...
    // 選到class="navbar-list"並為其切換active的class
    document.querySelector(".navbar-list").classList.toggle("active");

});
