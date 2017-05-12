;(function(global){

    "use strict";

    var indication = document.getElementById("indication");

    var counts = 8;
    var index = 0;
    var indicationFlags = [];


    function setActiveIndicationFlag(index){

        for(var i = 0; i < indicationFlags.length; i++){
            indicationFlags[i].className = "";
        }

        indicationFlags[index] && (indicationFlags[index].className = "active");

    }


    function startAnimation(){

        setInterval(function(){

            index = (index + 1) % indicationFlags.length;

            setActiveIndicationFlag(index);

        },4000);

    }

    function initView(){

        for(var i = 0; i < counts; i++){

            var indicationFlag = document.createElement("div");

            (function(newIndex){

                indicationFlag.onclick = function(e){

                    setActiveIndicationFlag(newIndex);
                    index = newIndex;

                }
            })(i);

            indicationFlags.push(indicationFlag);

            indication.appendChild(indicationFlag);

        }

        setActiveIndicationFlag(0);
        startAnimation();


    }

    function init(){

        initView();

    }

    init();


})(window);