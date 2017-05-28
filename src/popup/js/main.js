;(function(global){

    "use strict";


    function initView(){

        var container = document.getElementsByClassName("container")[0];
        for(var i = 0; i < 200; i ++){
            var div = document.createElement("div");
            div.className = "block";
            div.innerHTML = "block " + i;
            container.appendChild(div);


            popup(div, div.innerHTML);



        }

    }

    function init(){

        initView();

    }

    init();


})(window);