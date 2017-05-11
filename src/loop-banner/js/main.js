;(function(global){

    "use strict";

    var files = [
        "../../pub/imgs/1.jpg",
        "../../pub/imgs/2.jpg",
        "../../pub/imgs/3.jpg"
    ];

    var index = 0;

    var banner = document.getElementById("banner");

    function createBannerItem(file, id){

        var bannerItem = document.createElement("div");
        bannerItem.className = "banner-item";
        bannerItem.id = id;

        var img = document.createElement("img");
        img.src = file;

        bannerItem.appendChild(img);

        return bannerItem;

    }

    function bannerBack(){

        index = (index - 1 + files.length ) % files.length;

        banner.removeChild(document.getElementById("banner-item-right"));
        document.getElementById("banner-item-middle").id = "banner-item-right";
        document.getElementById("banner-item-left").id = "banner-item-middle";

        banner.appendChild(createBannerItem(files[(index - 1 + files.length) % files.length], "banner-item-left"));
    }

    function bannerFront(){

        index = (index + 1) % files.length;

        banner.removeChild(document.getElementById("banner-item-left"));
        document.getElementById("banner-item-middle").id = "banner-item-left";
        document.getElementById("banner-item-right").id = "banner-item-middle";

        banner.appendChild(createBannerItem(files[(index + 1) % files.length], "banner-item-right"));

    }

    function initBannerAction(){

        document.getElementById("banner-action-back").onclick = function(e){

            bannerBack();
        }

        document.getElementById("banner-action-front").onclick = function(e){
            bannerFront();
        }
    }

    function initBanner(){

        setInterval(function(){

            bannerFront();

        },4000);

        initBannerAction();

    }


    function initView(){

        if(files.length < 2)
            return;

        var leftBannerItem = createBannerItem(files[files.length-1], "banner-item-left");
        banner.appendChild(leftBannerItem);

        var middleBannerItem = createBannerItem(files[index], "banner-item-middle");
        banner.appendChild(middleBannerItem);

        var rightBannerItem = createBannerItem(files[index+1], "banner-item-right");
        banner.appendChild(rightBannerItem);

        initBanner();


    }


    function init(){

        initView();

    }

    init();


})(window);