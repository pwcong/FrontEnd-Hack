;(function(global){
    "use strict";

    function initPopupStyle(){

        var style = document.createElement("style");

        style.innerHTML = "\
            .popup{\
                box-sizing: border-box;\
                -ms-box-sizing: border-box;\
                -moz-box-sizing: border-box;\
                -webkit-box-sizing: border-box;\
                padding: 10px 8px;\
                border-radius: 2px;\
                background-color: rgba(0, 0, 0, 0.7);\
                color: white;\
                font-size: 12px;\
                position: fixed;\
                z-index: 999;\
            }\
            .popup .triangle{\
                position: fixed;\
                border-left: 4px solid transparent;\
                border-right: 4px solid transparent;\
                opacity: 0.7;\
            }\
            .popup .triangle-down{\
                border-top: 5px solid black;\
            }\
            .popup .triangle-up{\
                border-bottom: 5px solid black;\
            }";

        document.head.appendChild(style);

    }

    function getTop(e){

        var offset=e.offsetTop; 

        if(e.offsetParent!=null){
            offset+=getTop(e.offsetParent); 
        }

        return offset; 
    } 
    
    function getLeft(e){ 
        var offset=e.offsetLeft; 
        if(e.offsetParent!=null){
            offset+=getLeft(e.offsetParent);
        }
         
        return offset; 
    } 

    function popup(ele, content){

        var tempPopup = null;

        ele.onmouseenter = function(e){

            tempPopup = document.createElement("div");
            tempPopup.className = "popup";
            tempPopup.innerHTML = content;

            var tempPopupTriangle = document.createElement("div");
            tempPopupTriangle.className = "triangle triangle-down";

            tempPopup.appendChild(tempPopupTriangle);

            document.body.appendChild(tempPopup);

            var tempPopupLeft = (ele.offsetWidth - tempPopup.offsetWidth) /2 + getLeft(ele);

            if(tempPopupLeft < 0)
                tempPopupLeft = 0;

            if((tempPopupLeft + tempPopup.offsetWidth) > document.body.offsetWidth)
                tempPopupLeft = document.body.offsetWidth - tempPopup.offsetWidth;

            tempPopup.style.left = tempPopupLeft + "px";
            tempPopupTriangle.style.left = (getLeft(ele) + ele.offsetWidth / 2 - tempPopupTriangle.offsetWidth / 2) + "px";

            var tempPopupTop = getTop(ele) - document.body.scrollTop - tempPopup.offsetHeight - tempPopupTriangle.offsetHeight - 2;
            tempPopupTriangle.style.top = (tempPopupTop + tempPopup.offsetHeight) + "px";

            if(tempPopupTop < 0){
                tempPopupTop = getTop(ele) - document.body.scrollTop + ele.offsetHeight + tempPopupTriangle.offsetHeight + 2;

                tempPopupTriangle.style.top = (tempPopupTop - tempPopupTriangle.offsetHeight) + "px";
                tempPopupTriangle.className = "triangle triangle-up";
                
            }

            tempPopup.style.top = tempPopupTop + "px";
        }

        ele.onmouseleave = function(e){

            document.body.removeChild(tempPopup);
        }


    }

    function init(){

        initPopupStyle();

        global.popup = popup;
    }

    init();


})(window);