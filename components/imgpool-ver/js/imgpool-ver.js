;
(function (global) {

    "use strit";

    var style = "\
.imgpool-ver {\
    width: 100%;\
    *zoom: 1;\
}\
.imgpool-ver:before,\
.imgpool-ver:after {\
    display: table;\
    line-height: 0;\
    content: \"\";\
}\
.imgpool-ver:after {\
    clear: both;\
}\
.imgpool-ver-col{\
    float: left;\
    box-sizing: border-box;\
    padding: 4px;\
}\
.imgpool-ver-col a{\
    display: block;\
    margin-bottom: 8px;\
    font-size: 0;\
}\
.imgpool-ver-col img{\
    max-width: 100%;\
}"

    function imgPool(elem, colNum) {

        if(typeof colNum !== "number" || colNum < 1){
            console.log('invalid param "colNum"')
            return;
        }

        this.elem = elem;
        this.elem.className = this.elem.className + " imgpool-ver";

        this.cols = [];
        
        var colWidth = 1 / colNum * 100 + "%";
        for(var i = 0; i < colNum; i++){

            var col = document.createElement("div");
            col.className = "imgpool-ver-col";
            col.style.width = colWidth;
            this.cols.push(col);
            this.elem.appendChild(col);
        }
        

    }

    imgPool.prototype.pushIMG = function(img){

        var minHeightColIndex = 0;
        var colsLength = this.cols.length;

        for(var i = 1; i < colsLength; i++){
            
            if(this.cols[i].offsetHeight < this.cols[minHeightColIndex].offsetHeight){
                minHeightColIndex = i;
            }

        }

        var aTag = document.createElement("a");
        aTag.setAttribute("href", img.link);

        var imgTag = document.createElement("img");
        imgTag.setAttribute("src", img.url);

        aTag.appendChild(imgTag);

        this.cols[minHeightColIndex].appendChild(aTag);


    }


    function initStyle() {
        var styleTag = document.createElement("style");
        styleTag.innerHTML = style;
        document.head.appendChild(styleTag);
    }

    function init() {

        initStyle();

        global.initIMGPool = function (elem, colNum) {
            return new imgPool(elem, colNum);
        }

    }

    init();

})(window);