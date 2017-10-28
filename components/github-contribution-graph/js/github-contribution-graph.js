;(function(global){

    'use strict';

    var defaultColor = '#ebedf0';
    var defaultSize = 10;
    var defaultSpacing = 2;

    function sortData(data){

        data.sort(function(a, b){

            var d1 = a.date.split('-');
            var d2 = b.date.split('-');

            var d1y = parseInt(d1[0]);
            var d1m = parseInt(d1[1]);
            var d1d = parseInt(d1[2]);

            var d2y = parseInt(d2[0]);
            var d2m = parseInt(d2[1]);
            var d2d = parseInt(d2[2]);

            if(d1y==d2y && d1m == d2m && d1d == d2d)
                return 0;

            if(d1y < d2y)
                return -1;

            if(d1y == d2y && d1m < d2m)
                return -1;

            if(d1y == d2y && d1m == d2m && d1d < d2d)
                return -1;

            return 1;

        });

    }

    function createAbsoluteTextElement(graphElem, text, getLeft, getTop, fontSize){

        var textElem = document.createElement("div");
        textElem.innerHTML = text;

        graphElem.appendChild(textElem);

        textElem.style.fontSize = fontSize + 'px';
        textElem.style.position = 'absolute';

        textElem.style.left = getLeft(textElem) + 'px';
        textElem.style.top = getTop(textElem) + 'px';
        
    }

    function initGithubControbutionGraph(
        graphElem, 
        data, 
        size = defaultSize,
        spacing = defaultSpacing,
        getColor = function(item){return defaultColor},
        cb = function(elem, item){}){

        if(!graphElem || !data){
            return;
        }

        graphElem.style.position = "relative";

        sortData(data);

        var d = data[0].date.split('-');
        var firstDate = new Date(d[0], d[1]-1, d[2]);

        var cycleIndex = firstDate.getDay();
        var weekIndex = 0;
        var monthText = '';

        for(var i = 0; i < data.length; i++){

            d = data[i].date.split('-');
            var date = new Date(d[0], d[1]-1, d[2]);

            var tempMonthText = date.toString().split(' ')[1];
            if(tempMonthText != monthText){
                monthText = tempMonthText;

                createAbsoluteTextElement(
                    graphElem, 
                    monthText, 
                    function(textElem){
                        return (spacing + size) * weekIndex;
                    },
                    function(textElem){
                        return -(textElem.offsetHeight + 3 * spacing);
                    },
                    size
                );

            }

            var elem = document.createElement("div");
            elem.style.position = "absolute";

            elem.style.width = elem.style.height = size + 'px';

            elem.style.left = (spacing + size) * weekIndex + 'px';
            elem.style.top = (spacing + size) * cycleIndex + 'px';

            elem.style.backgroundColor = getColor(data[i]);
            cb && cb(elem, data[i]);
            
            graphElem.appendChild(elem);

            cycleIndex++;

            if(cycleIndex >6){
                weekIndex++;
                cycleIndex = 0;
            }

        }

        createAbsoluteTextElement(
            graphElem, 
            'Mon',
            function(textElem){
                return -(textElem.offsetWidth + 3 * spacing);
            },
            function(textElem){
                return size + spacing;
            },
            size);
        createAbsoluteTextElement(
            graphElem, 
            'Web',
            function(textElem){
                return -(textElem.offsetWidth + 3 * spacing);

            },
            function(textElem){
                return 3 * (size + spacing);
            },
            size);
        createAbsoluteTextElement(
            graphElem, 
            'Fri',
            function(textElem){
                return -(textElem.offsetWidth + 3 * spacing);

            },
            function(textElem){
                return 5 * (size + spacing);
            },
            size);


        if(cycleIndex == 1){
            weekIndex++;
        }

        graphElem.style.minWidth = (weekIndex * size + (weekIndex-1) * spacing) + 'px';
        graphElem.style.width = (weekIndex * size + (weekIndex-1) * spacing) + 'px';

        graphElem.style.minHeight = (7 * size + 6 * spacing) + 'px';
        graphElem.style.height = (7 * size + 6 * spacing) + 'px';


    }

    function init(){

        global.initGithubControbutionGraph = initGithubControbutionGraph;
    }

    init();

})(window);