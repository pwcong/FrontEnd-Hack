;(function(global){

    "use strict";

    function scrollTopTo(elem, to, speed, timeout){


        if(Math.abs(elem.scrollTop - to) < 10){
            elem.scrollTop = to;
        }else{
            setTimeout(function() {
                elem.scrollTop += (to - elem.scrollTop) * speed;
                scrollTopTo(elem, to, speed, timeout);
            }, timeout);
        }
        
        console.log("ok");

    }

    global.scrollTopTo = scrollTopTo;


})(window);