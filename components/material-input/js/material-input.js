;(function(global){

    "use strict";

    function initStyle(){

        var style = document.createElement("style");
        style.innerHTML = "\
            .material-input{\
                position: relative;\
                width: 100%;\
                padding-top: 24px;\
            }\
            .material-input input{\
                width: 100%;\
                font-size: 18px;\
                padding-bottom: 4px;\
                border: none;\
                outline: none;\
                background-color: transparent;\
                border-bottom: 1px solid #ccc;\
                transition: border-bottom 0.3s;\
            }\
            .material-input input:hover{\
                border-color: #333;\
            }\
            .material-input span{\
                position: absolute;\
                font-size: 18px;\
                left: 0;\
                bottom: 4px;\
                width: 100%;\
                z-index: -1;\
                color: #333;\
                transition: bottom 0.3s, font-size 0.3s, color 0.3s;\
            }\
            .material-input input:focus{\
                border-color: #333;\
            }\
            .material-input input:focus + span{\
                font-size: 11px;\
                bottom: 32px;\
                color: #ccc;\
            }\
            .material-input-not-empty span{\
                font-size: 11px;\
                bottom: 32px;\
                color: #ccc;\
            }";

        document.head.appendChild(style);

    }

    function init(){
        
        initStyle();

        var sourceEvent = window.onload;

        window.onload = function(e){

            if(sourceEvent){
                sourceEvent(e);
            }

            var materialInputDivs = document.getElementsByClassName("material-input");

            for(var i = 0; i < materialInputDivs.length; i++){


                ;(function(materialInputDiv){

                    var materialInput = materialInputDiv.getElementsByTagName("input")[0];
                    
                    materialInput.onchange = function(ie){

                        if(ie.target.value != ""){
                            materialInputDiv.className = "material-input material-input-not-empty";
                        }else{
                            materialInputDiv.className = "material-input";
                        }

                    }


                })(materialInputDivs[i]);

            }

        }
        

    }

    init();


})(window);