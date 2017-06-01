;(function(global){

    "use strict";

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

    global.scrollTopTo = scrollTopTo;


})(window);