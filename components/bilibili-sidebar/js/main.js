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

    var drawable = false;

    var tempSeg = null;

    function getRandomColor(){

        var randomColor = "#";

        for(var i = 0; i < 6; i++)
            randomColor += hexArray[parseInt(Math.random() * hexArray.length)];
        
        return randomColor;


    }

    function initContentSegment(){
        
        var content = document.getElementById("content");

        for(var i = 0; i < segTexts.length; i++){

            var seg = document.createElement("div");
            seg.className = "seg";
            seg.style.backgroundColor = getRandomColor();
            seg.style.order = i;
            seg.setAttribute("seg-name", segTexts[i]);
            seg.id = "seg-" +  segTexts[i];

            var segText = document.createElement("h1");
            segText.innerHTML = segTexts[i];
            seg.appendChild(segText);


            content.appendChild(seg);

        }

    }

    function initSidebar(){

        var sideBarList = document.getElementById("sidebar-main-list");
        var segs = document.getElementById("content").children;

        for(var i = 0; i < segs.length; i++){

            var sidebarItem = document.createElement("div");
            sidebarItem.innerHTML = segs[i].getAttribute("seg-name");
            sidebarItem.setAttribute("seg-id", segs[i].id);
            sidebarItem.style.order = segs[i].style.order;
            sidebarItem.draggable = true;
            sidebarItem.className = "sidebar-main-list-item";

            (function(sidebarItem){

                sidebarItem.onclick = function(e){
                    document.body.scrollTop = document.getElementById(sidebarItem.getAttribute("seg-id")).offsetTop
                }

                sidebarItem.ondragstart = function(e){
                    tempSeg = e.target;
                }

                sidebarItem.ondragover = function(e){
                    e.preventDefault();
                }

                sidebarItem.ondrop = function(e){
                    e.preventDefault();

                    if(drawable && tempSeg && tempSeg != e.target){

                        var tempOrder = tempSeg.style.order;

                        tempSeg.style.order = e.target.style.order;
                        document.getElementById(tempSeg.getAttribute("seg-id")).style.order = e.target.style.order;

                        e.target.style.order = tempOrder;
                        document.getElementById(e.target.getAttribute("seg-id")).style.order = tempOrder;

                    }
                    

                }


            })(sidebarItem);


            sideBarList.appendChild(sidebarItem);
        

        }


    }

    function initDrawableSwitch(){

        var sidebarAction = document.getElementById("sidebar-main-action");
        var sidebarTips = document.getElementById("sidebar-tips");

        sidebarAction.onclick = function(e){

            drawable = !drawable;
            
            if(drawable){
                sidebarTips.className = "sidebar-tips sidebar-tips-active";
                sidebarAction.innerHTML = "<span class=\"fa fa-check\" style=\"transform: rotate(0deg)\"></span>完成";
            }
            else{
                sidebarTips.className = "sidebar-tips";
                sidebarAction.innerHTML = "<span class=\"fa fa-exchange\"></span>排序";
            }

        }
    }

    function initView(){

        initContentSegment();
        initSidebar();
        initDrawableSwitch();
    }

    function init(){
        initView();
    }

    init();

})(window);