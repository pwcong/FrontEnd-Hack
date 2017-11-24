;(function(global){

    "use strict";

    function initStyle(){

        var style = document.createElement("style");

        style.innerHTML = ".back-to-top{\
            position: fixed;\
            right: 30px;\
            bottom: -30px;\
            background-color: #333;\
            color: white;\
            display: flex;\
            justify-content: center;\
            align-items: center;\
            border-radius: 4px;\
            user-select: none;\
            -moz-user-select: none;\
            -webkit-user-select: none;\
            -ms-user-select: none;\
            cursor: pointer;\
            width: 30px;\
            height: 30px;\
            transition: background-color 0.3s, bottom 0.3s;\
        }\
        .back-to-top:hover{\
            background-color: #444;\
        }\
        .back-to-top:active{\
            background-color: #222;\
        }\
        .back-to-top-on{\
            bottom: 30px;\
        }";


        document.head.appendChild(style);

    }

    function scrollTopTo(elem, to, speed, timeout){

        if(elem.scrollTop - to - (elem.scrollTop - to) * speed < 1){
            elem.scrollTop = to;
        }else{
            setTimeout(function() {
                elem.scrollTop -= (elem.scrollTop - to) * speed;
                scrollTopTo(elem, to, speed, timeout);
            }, timeout);
        }

    }

    function initBackToTop(){

        var backToTop = document.createElement("div");

        backToTop.className = "back-to-top";

        backToTop.innerHTML = '&uarr;';

        backToTop.onclick = function(e){
            scrollTopTo(document.body, 0, 0.1, 10);
        }

        var scrollEvent = window.onscroll;
        window.onscroll = function(e){

            scrollEvent && scrollEvent(e);

            if(document.body.scrollTop != 0){
                backToTop.className = "back-to-top back-to-top-on";
            }
            else{
                backToTop.className = "back-to-top";
            }
        }


        document.body.appendChild(backToTop);
    }

    function init(){

        initStyle();

        global.initBackToTop = initBackToTop;


    }

    init();


})(window);