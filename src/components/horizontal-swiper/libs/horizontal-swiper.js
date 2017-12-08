// Uses CommonJS, AMD or browser globals to create a jQuery plugin.

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function(root, jQuery) {
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
})(function($) {
  'use strict';

  var HorizontalSwiper = function(el, data, options) {
    this.$el = el;
    this.data = data || [];

    this.defaultOptions = {
      selectedIndex: 0,
      navigation: true,
      navigationWidth: 20,
      loop: false,
      auto: false,
      step: 1,
      duration: 200,
      delay: 2000,
      sectionMinWidth: 50,
      rootClass: 'horizontal-swiper',
      wrapClass: 'horizontal-swiper-wrap',
      secClass: 'horizontal-swiper-sec',
      itemClass: 'horizontal-swiper-item',
      navClass: 'horizontal-swiper-navigation',
      preNavClass: 'horizontal-swiper-navigation-pre',
      nxtNavClass: 'horizontal-swiper-navigation-nxt',
      renderNavigation: function(flag) {
        if (flag == 1) {
          return '&gt;';
        } else if (flag == -1) {
          return '&lt;';
        }
      },
      renderSwiperItem: function(idx, item) {
        return item;
      },
      beforeSwiperItemClick: function(e, idx, item) {
        console.log('before click', idx, item);
      },
      onSwiperItemClick: function(e, idx, item) {
        console.log('on click', idx, item);
      }
    };

    this.options = $.extend({}, this.defaultOptions, options);
  };

  HorizontalSwiper.prototype = {
    __initialize: function() {
      if (!this.data.length) {
        return;
      }

      if (this.options.selectedIndex >= this.data.length) {
        return;
      }

      var w = (this.options.sectionWidth =
        this.$el.width() -
        (this.options.navigation ? 2 * this.options.navigationWidth : 0));
      var mw = this.options.sectionMinWidth;
      if (w <= 0 || mw <= 0) {
        return;
      }
      this.options.sectionMinWidth = w < mw ? w : mw;
      this.options.sectionColNums = parseInt(w / this.options.sectionMinWidth);
      this.options.sectionNums =
        parseInt(this.data.length / this.options.sectionColNums) +
        (this.data.length % this.options.sectionColNums > 0 ? 1 : 0);

      if (!this.$el.hasClass(this.options.rootClass)) {
        this.$el.addClass(this.options.rootClass);
      }

      this.beforeRender();
      this.render();
      this.afterRender();
    },
    clear: function() {
      this.$el.html('');
    },
    beforeRender: function() {
      this.options.currentIndex = 0;
    },
    render: function() {
      var that = this;

      that.clear();

      var i,
        j,
        idx,
        swiperWrap = (that.swiperWrap = $(
          '<div class="' + that.options.wrapClass + '"></div>'
        ).appendTo(that.$el)),
        fm = $(document.createDocumentFragment());

      for (i = 0; i < that.options.sectionNums; i++) {
        var swiperSec = $(
          '<div class="' + that.options.secClass + '"></div>'
        ).appendTo(fm);
        var t = $('<tr></tr>').appendTo(
          $('<table></table>').appendTo(swiperSec)
        );

        for (j = 0; j < that.options.sectionColNums; j++) {
          idx = i * that.options.sectionColNums + j;
          if (idx >= that.data.length) {
            break;
          }

          var swiperItem = $(
            '<td class="' + that.options.itemClass + '"></td>'
          ).appendTo(t);

          swiperItem.attr('data-idx', idx);

          swiperItem.html(that.options.renderSwiperItem(idx, that.data[idx]));
        }
      }

      swiperWrap.css(
        'transition',
        'left ' + that.options.duration / 1000 + 's'
      );

      function applyAnimation() {
        if (that.options.currentIndex < 0) {
          that.options.currentIndex = that.options.sectionNums - 1;
        }

        if (that.options.currentIndex > that.options.sectionNums - 1) {
          that.options.currentIndex = 0;
        }

        swiperWrap.css(
          'left',
          -1 * that.options.currentIndex * that.options.sectionWidth + 'px'
        );
      }

      if (that.options.navigation) {
        swiperWrap.css('padding-left', that.options.navigationWidth + 'px');
        swiperWrap.css('padding-right', that.options.navigationWidth + 'px');

        var pre = (this.preNav = $(
          '<div class="' +
            that.options.navClass +
            ' ' +
            that.options.preNavClass +
            '"></div>'
        ).appendTo(that.$el));
        pre.css('width', that.options.navigationWidth + 'px');
        pre.html(
          that.options.renderNavigation && that.options.renderNavigation(-1)
        );
        pre.attr('data-action', 'pre');

        var nxt = (this.nxtNav = $(
          '<div class="' +
            that.options.navClass +
            ' ' +
            that.options.nxtNavClass +
            '"></div>'
        ).appendTo(that.$el));
        nxt.css('width', that.options.navigationWidth + 'px');
        nxt.html(
          that.options.renderNavigation && that.options.renderNavigation(1)
        );
        nxt.attr('data-action', 'nxt');

        that.$el.on('click', '.' + that.options.navClass, function() {
          that.$el
            .children('.' + that.options.navClass)
            .removeClass(that.options.navClass + '-disabled');
          that.$el
            .children('.' + that.options.navClass)
            .removeAttr('data-disabled');

          var action = $(this).attr('data-action');
          if (!action) {
            return;
          }

          switch (action) {
            case 'pre':
              that.options.currentIndex--;
              break;
            case 'nxt':
              that.options.currentIndex++;
              break;
            default:
              break;
          }

          if (!that.options.loop && that.options.currentIndex <= 0) {
            that.options.currentIndex = 0;
            $(this).addClass(that.options.navClass + '-disabled');
            $(this).attr('data-disabled', true);
          }

          if (
            !that.options.loop &&
            that.options.currentIndex >= that.options.sectionNums - 1
          ) {
            that.options.currentIndex = that.options.sectionNums - 1;
            $(this).addClass(that.options.navClass + '-disabled');
            $(this).attr('data-disabled', true);
          }

          applyAnimation();
        });
      }

      if (that.options.auto) {
        setInterval(function() {
          that.options.currentIndex += that.options.step;
          applyAnimation();
        }, that.options.delay);
      }

      swiperWrap.on('click', '.' + that.options.itemClass, function() {
        var idx = parseInt($(this).attr('data-idx'));

        that.options.beforeSwiperItemClick &&
          that.options.beforeSwiperItemClick($(this), idx, that.data[idx]);

        that.options.onSwiperItemClick &&
          that.options.onSwiperItemClick($(this), idx, that.data[idx]);
      });

      swiperWrap.append(fm);
    },
    afterRender: function() {
      this.options.currentIndex = parseInt(
        this.options.selectedIndex / this.options.sectionColNums
      );

      console.log(this.options.currentIndex);

      if (
        this.options.navigation &&
        this.options.currentIndex == 0 &&
        !this.options.loop &&
        this.preNav
      ) {
        this.preNav.addClass(this.options.navClass + '-disabled');
        this.preNav.attr('data-disabled', true);
      }

      if (
        this.options.navigation &&
        this.options.currentIndex == this.options.sectionNums - 1 &&
        !this.options.loop &&
        this.nxtNav
      ) {
        this.nxtNav.addClass(this.options.navClass + '-disabled');
        this.nxtNav.attr('data-disabled', true);
      }

      this.swiperWrap.css(
        'left',
        -1 * this.options.currentIndex * this.options.sectionWidth + 'px'
      );
    }
  };

  $.fn.HorizontalSwiper = function(data, options) {
    return $(this).each(function(idx, el) {
      var horizontalSwiper = new HorizontalSwiper($(this), data, options);
      horizontalSwiper.__initialize();
      return horizontalSwiper;
    });
  };
});
