;(function(global){

    "use strict";

    var hexArray = [
        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
        "a", "b", "c", "d", "e", "f"
    ];


    var segTexts = [
        "直播",
        "动画",
        "番剧",
        "国创",
        "音乐",
        "舞蹈",
        "游戏",
        "科技",
        "生活",
        "鬼畜",
        "时尚",
        "广告",
        "娱乐",
        "电影"
    ];

    var content = document.getElementById("content");
    var sideBarList = document.getElementById("sidebar-main-list");

    function getRandomColor(){

        var randomColor = "#";

        for(var i = 0; i < 6; i++)
            randomColor += hexArray[parseInt(Math.random() * hexArray.length)];
        
        return randomColor;


    }



    function initContentSegment(){

        for(var i = 0; i < segTexts.length; i++){

            var seg = document.createElement("div");
            seg.className = "seg";
            seg.style.backgroundColor = getRandomColor();
            seg.style.order = i;
            seg.setAttribute("seg-name", segTexts[i]);

            var segText = document.createElement("h1");
            segText.innerHTML = segTexts[i];
            seg.appendChild(segText);

            content.appendChild(seg);

        }

    }

    function initSidebar(){

        var segs = document.getElementById("content").children;

        for(var i = 0; i < segs.length; i++){

            var sidebarItem = document.createElement("div");
            sidebarItem.innerHTML = segs[i].getAttribute("seg-name");
            sidebarItem.style.order = i;
            sidebarItem.className = "sidebar-main-list-item";

            sideBarList.appendChild(sidebarItem);
        

        }


    }

    function initView(){

        initContentSegment();
        initSidebar();

    }

    function init(){
        initView();
    }

    init();

})(window);