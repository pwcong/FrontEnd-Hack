;(function(global){

    "use strict";

    var holder = document.getElementById("holder");

    var displayer = document.getElementById("displayer");


    holder.ondragenter = function(e){
        e.preventDefault();

        holder.style.backgroundColor = "#666";
    }

    holder.ondragover = function(e){
        e.preventDefault();
        holder.style.backgroundColor = "#666";
    }

    holder.ondragleave = function(e){
        e.preventDefault();
        holder.style.backgroundColor = "white";
    }

    holder.ondrop = function(e){
        e.preventDefault();

        var img = e.dataTransfer.files[0]
        displayer.src = window.URL.createObjectURL(img);
        
        holder.style.backgroundColor = "white";
    }


})(window);