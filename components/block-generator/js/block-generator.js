;(function(global){

    "use strict";

    var colorHex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 
        'a', 'b', 'c', 'd', 'e', 'f'];

    function getRandomColor(){

        var color = "#";

        for(var i = 0; i < 6; i++){
            color += colorHex[Math.round(Math.random() * (colorHex.length -1))];
        }

        return color;

    }

    function generateRandomColorBlock(elem, size, cb = function(block, index){}){

        for(var i = 0; i < size; i++){

            var block = document.createElement("div");

            block.style.backgroundColor = getRandomColor();

            elem.appendChild(block);

            cb && cb(block, i);

        }

    }

    function init(){
        
        global.generateRandomColorBlock = generateRandomColorBlock;

    }

    init();


})(window);