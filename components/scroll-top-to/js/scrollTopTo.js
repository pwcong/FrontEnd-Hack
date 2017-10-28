;(function(global){

    "use strict";
    
    function scrollTopTo(elem, to, speed, timeout, isFirstTime = true){

        if(isFirstTime){

            if(elem.scrollEvent){
                clearTimeout(elem.scrollEvent);
            }

        }

        if((Math.abs(elem.scrollTop - to) < 10)){
            elem.scrollTop = to;
        }else{
            
            elem.scrollTop += (to - elem.scrollTop) * speed;

            if(elem.lastScrollTop == elem.scrollTop){
                return;
            }

            elem.lastScrollTop = elem.scrollTop;

            elem.scrollEvent = setTimeout(function() {
                scrollTopTo(elem, to, speed, timeout, false);
            }, timeout);
        }
        

    }

    global.scrollTopTo = scrollTopTo;


})(window);