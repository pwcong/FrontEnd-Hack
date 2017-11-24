;
(function () {

    function initScrollNumberStyle() {

        var style = document.createElement('style');
        style.innerHTML = '\
            .scrollnumber{\
                overflow: hidden;\
            }\
            .scrollnumber-col{\
                height: 50px;\
                width: 50px;\
                color: white;\
                font-size: 36px;\
                display: inline-block;\
                transition: transform 1s;\
            }\
            .scrollnumber-col span{\
                text-align: center;\
                width: 100%;\
                line-height: 50px;\
                float: left;\
            }\
            ';

        document.head.appendChild(style);
    }

    function scrollNumber(element, length, initNumber) {

        this.element = element;
        this.length = length;
        this.numbersColumns = [];

        this.initView();
        this.setNumber(initNumber);
    }

    scrollNumber.prototype.checkNumber = function (number) {

        if(!number){
            number = 0;
        }

        var t = '' + number;

        if (t.length > this.length) {
            return (Math.pow(10, this.length) - 1) + '';
        }

        var offset = this.length - t.length;

        for (var i = 0; i < offset; i++) {
            t = '0' + t;
        }

        return t;

    }

    scrollNumber.prototype.initView = function () {

        this.element.className = 'scrollnumber';

        for (var i = 0; i < this.length; i++) {

            var numbersColumn = document.createElement('div');
            numbersColumn.className = 'scrollnumber-col';

            for (var j = 0; j < 10; j++) {
                var numberSpan = document.createElement('span');
                numberSpan.className = 'scrollnumber-span';
                numberSpan.innerHTML = j;
                numbersColumn.appendChild(numberSpan);
            }

            this.element.appendChild(numbersColumn);
            this.numbersColumns.push(numbersColumn);
        }

    }

    scrollNumber.prototype.setNumber = function (newNumber) {

        var finalNumber = this.checkNumber(newNumber);
        var offset = this.numbersColumns.length - finalNumber.length;

        for (var i = finalNumber.length - 1; i >= 0; i--) {
            this.numbersColumns[i + offset].style.transform = 'translateY(-' + finalNumber[i] + '00%)';
            this.numbersColumns[i + offset].setAttribute('data-number', finalNumber[i]);
        }


    }

    scrollNumber.new = function (element, length, initNumber) {
        return new scrollNumber(element, length, initNumber);
    }

    initScrollNumberStyle();
    window.createScrollNumber = scrollNumber.new;
    window.scrollNumber = scrollNumber;


})();