define(function (require, exports, module) {

  'use strict';

  var styleLink = document.createElement('link');
  styleLink.href = require.toUrl("./calendar.css");
  styleLink.rel = 'stylesheet';

  document.head.appendChild(styleLink);

  function formatInt(i) {
    return i < 10 ? '0' + i : '' + i;
  }

  function getDays(year, month) {

    var t = -1;

    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        t = 31;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        t = 30;
        break;
      case 2:
        t = (year % 4 == 0 || year % 400 == 0) ? 29 : 28;
        break;
      default:
        break;

    }

    return t;

  }

  function createElement(tag, className, innerHTML) {

    var el = document.createElement(tag);
    el.className = className || '';
    el.innerHTML = innerHTML || '';

    return el;

  }

  function Calendar(el) {

    this.el = el;

    this.yearEl = null;
    this.monthEl = null;
    this.pageEl = null;

    this.currentYear = null;
    this.currentMonth = null;

    this.initialize();

  }

  Calendar.prototype.initialize = function () {

    var now = new Date();

    this.currentYear = now.getUTCFullYear();
    this.currentMonth = now.getUTCMonth() + 1;

    this.initTemplate();
    this.render();

  }

  Calendar.prototype.initTemplate = function () {

    var that = this;

    that.el.className = 'calendar';

    var calendarHead = createElement('div', 'calendar-head');

    var yearEl = createElement('span', 'calendar-year', that.currentYear + '年');
    that.yearEl = yearEl;
    calendarHead.appendChild(yearEl);

    var monthEl = createElement('span', 'calendar-month', that.currentMonth + '月');
    that.monthEl = monthEl;
    calendarHead.appendChild(monthEl);

    var preYearBtn = createElement('span', 'left calendar-btn calendar-year-pre', '&lt;&lt;');
    preYearBtn.onclick = function (e) {
      that.currentYear--;
      that.render();
    }
    calendarHead.appendChild(preYearBtn);

    var preMonthBtn = createElement('span', 'left calendar-btn calendar-month-pre', '&lt;');
    preMonthBtn.onclick = function (e) {
      that.currentMonth--;
      if (that.currentMonth < 1) {
        that.currentMonth = 12;
        that.currentYear--;
      }

      if (that.currentMonth > 12) {
        that.currentMonth = 1;
        that.currentYear++;
      }
      that.render();
    }
    calendarHead.appendChild(preMonthBtn);

    var nextYearBtn = createElement('span', 'right calendar-btn calendar-year-next', '&gt;&gt;');
    nextYearBtn.onclick = function (e) {
      that.currentYear++;
      that.render();
    }
    calendarHead.appendChild(nextYearBtn);

    var nextMonthBtn = createElement('span', 'right calendar-btn calendar-month-next', '&gt;');
    nextMonthBtn.onclick = function (e) {

      that.currentMonth++;
      if (that.currentMonth < 1) {
        that.currentMonth = 12;
        that.currentYear--;
      }

      if (that.currentMonth > 12) {
        that.currentMonth = 1;
        that.currentYear++;
      }
      that.render();
    }
    calendarHead.appendChild(nextMonthBtn);

    that.el.appendChild(calendarHead);

    var calendarWeek = createElement('div', 'calendar-week', '<div>日</div><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div>');
    that.el.appendChild(calendarWeek);

    var calendarPage = createElement('div', 'calendar-page');
    that.pageEl = calendarPage;
    that.el.appendChild(calendarPage);

  }

  Calendar.prototype.render = function () {

    var that = this;

    that.pageEl.innerHTML = '';
    that.yearEl.innerHTML = that.currentYear + '年';
    that.monthEl.innerHTML = that.currentMonth + '月';

    var page = Calendar.getPage(this.currentYear, this.currentMonth);
    
    if(page.length < 1){
      return;
    }

    var i;
    var t = page[0].day;
    for(i = 0; i < t; i++){

      page.unshift({
        year: that.currentYear,
        month: that.currentMonth,
        date: -1,
        day: i
      });

    }



    var pageLength = page.length;
    var pageFragment = document.createDocumentFragment();

    for(i = 0; i < pageLength; i++){

      var pageItem = createElement('div', 'calendar-page-item', page[i].date > 0 ? page[i].date : '');
      pageFragment.appendChild(pageItem);

    }

    that.pageEl.appendChild(pageFragment);


  }

  Calendar.getPage = function (year, month) {

    var res = [];
    var t = getDays(year, month);

    var i;

    var day = new Date(year + '/' + formatInt(month) + '/01').getDay();
    for (i = 1; i <= t; i++) {
      res.push({
        year: year,
        month: month,
        date: i,
        day: day++
      });
    }

    return res;

  }

  exports.Calendar = Calendar;

  exports.init = function (el) {
    return new Calendar(el);
  }

});