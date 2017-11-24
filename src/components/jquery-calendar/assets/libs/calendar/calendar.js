(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        } else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {

  var LABEL_MONTHS = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
  var LABEL_WEEKS = ['日', '一', '二', '三', '四', '五', '六'];

  var CALENDAR_PAGE_ITEM_WIDTH_PRECENT = 14.28571;

  function formatInt(i) {
    return i < 10 ? '0' + i : '' + i;
  }

  function getDays(year, month) {

    var t;

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
        t = 31;
        break;

    }

    return t;

  }

  var CalendarPage = function (el, options) {
    this.$el = el;

    var now = new Date();

    this.defaultOptions = {
      year: now.getUTCFullYear(),
      month: now.getUTCMonth() + 1,
      single: false,
      calendarClass: 'calendar',
      calendarHeadClass: 'calendar-head',
      calendarHeadLabelClass: 'calendar-head-label',
      calendarHeadToolClass: 'calendar-head-tool',
      calendarWeekClass: 'calendar-week',
      calendarWeekItemClass: 'calendar-week-item',
      calendarPageClass: 'calendar-page',
      calendarPageItemClass: 'calendar-page-item',
      renderHeadLabel: function (year, month) {
        return year + '年 ' + month + '月';
      },
      renderWeekItem: function (day) {
        return LABEL_WEEKS[day];
      },
      renderPageItem: function (year, month, date, day) {
        return '<span>' + date + '</span>';
      },
      onPageItemClick: function (ctx, el, year, month, date, day) {
        console.log(ctx, el, year, month, date, day);
      }
    };

    this.options = $.extend({}, this.defaultOptions, options);

  };

  CalendarPage.prototype = {
    _initialize: function () {

      this.$el.addClass(this.options.calendarClass);

      this.render();
    },
    clean: function () {
      this.$el.html('');
    },
    renderCalendarHead: function () {

      var that = this;

      var calendarHead = $('<div class="' + that.options.calendarHeadClass + '"></div>');

      var calendarHeadLabel = $('<span class="' + that.options.calendarHeadLabelClass + '"></span>');
      calendarHeadLabel.append(that.options.renderHeadLabel && that.options.renderHeadLabel(
        that.options.year,
        that.options.month
      ));
      calendarHead.append(calendarHeadLabel);


      if (!that.options.single) {

        calendarHead.append(
          '<span data-action="pre-year" class="left ' + that.options.calendarHeadToolClass + '">&lt;&lt;</span>' +
          '<span data-action="pre-month" class="left ' + that.options.calendarHeadToolClass + '">&lt;</span>' +
          '<span data-action="nxt-year" class="right ' + that.options.calendarHeadToolClass + '">&gt;&gt;</span>' +
          '<span data-action="nxt-month" class="right ' + that.options.calendarHeadToolClass + '">&gt;</span>'
        );

        calendarHead.on('click', '.' + that.options.calendarHeadToolClass, function () {

          var action = $(this).attr('data-action');

          switch (action) {
            case 'pre-year':
              that.options.year--;
              break;
            case 'pre-month':
              that.options.month--;
              if (that.options.month < 1) {
                that.options.month = 12;
                that.options.year--;
              }
              break;
            case 'nxt-year':
              that.options.year++;
              break;
            case 'nxt-month':
              that.options.month++;
              if (that.options.month > 12) {
                that.options.month = 1;
                that.options.year++;
              }
              break;
            default:
              break;
          }

          that.render();

        });


      }


      this.$el.append(calendarHead);

    },
    renderCalendarWeek: function () {
      var
        that = this,
        calendarWeek = $('<div class="' + that.options.calendarWeekClass + '"></div>')

      $.each(LABEL_WEEKS, function (idx, day) {

        var calendarWeekItem = $('<div class="' + that.options.calendarWeekItemClass + '"></div>')
        calendarWeekItem.append(that.options.renderWeekItem && that.options.renderWeekItem(idx));

        calendarWeek.append(calendarWeekItem);

      });

      that.$el.append(calendarWeek);

    },
    renderCalendarPage: function () {

      var that = this;

      var i, days = getDays(that.options.year, that.options.month);
      var t = new Date(that.options.year + '/' + formatInt(that.options.month) + '/01').getDay();
      var $fm = $(document.createDocumentFragment());

      for (i = 1; i <= days; i++) {

        var calendarPageItem = $(
          '<div class="' + that.options.calendarPageItemClass + '" ' +
          'data-year="' + that.options.year + '" ' +
          'data-month="' + that.options.month + '" ' +
          'data-date="' + i + '" ' +
          'data-day="' + t + '">' +
          '</div>'
        );

        calendarPageItem.append((that.options.renderPageItem && that.options.renderPageItem(
          that.options.year,
          that.options.month,
          i,
          t
        )));

        if (i == 1) {
          calendarPageItem.css('margin-left', CALENDAR_PAGE_ITEM_WIDTH_PRECENT * t + '%');
        }

        t = (t + 1) % 7;

        $fm.append(calendarPageItem);

      }

      var calendarPage = $('<div class="' + that.options.calendarPageClass + '"></div>');
      calendarPage.append($fm);
      calendarPage.on('click', '.' + that.options.calendarPageItemClass, function () {

        var year = parseInt($(this).attr('data-year'));
        var month = parseInt($(this).attr('data-month'));
        var date = parseInt($(this).attr('data-date'));
        var day = parseInt($(this).attr('data-day'));

        that.options.onPageItemClick && that.options.onPageItemClick(that, this, year, month, date, day);

      });
      that.$el.append(calendarPage);

    },
    render: function () {
      this.clean();
      this.renderCalendarHead();
      this.renderCalendarWeek();
      this.renderCalendarPage();
    }

  };

  $.fn.extend({
    Calendar: function (options) {

      return this.each(function (idx, el) {
        var calendar = new CalendarPage($(el), options);
        calendar._initialize();
        return calendar;
      });
    }
  });

}));