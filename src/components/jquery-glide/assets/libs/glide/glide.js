// Uses CommonJS, AMD or browser globals to create a jQuery plugin.

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

  'use strict';

  var Glide = function (el, options) {

    this.$el = el;

    this.defaultOptions = {
      proportion: 0.3,
      glideItemClass: 'glide-item',
      glideItemActiveClass: 'glide-item-active',
      glideItemPosterClass: 'glide-item-poster',
      glideItemBehindClass: 'glide-item-behind'
    };

    this.options = $.extend({}, this.defaultOptions, options);

  }

  Glide.prototype = {

    _initialize: function () {

      var that = this;

      var l = that.$el.children('.' + that.options.glideItemClass).length;

      if (l < 2) {
        return;
      }

      var w = that.$el.width();
      var behindWidth = w * that.options.proportion;
      var posterWidth = (w - behindWidth) / l;

      that.$el.children('.' + that.options.glideItemClass).each(function () {

        $(this).children('.' + that.options.glideItemPosterClass).css('width', posterWidth + 'px');
        $(this).children('.' + that.options.glideItemBehindClass).css('width', behindWidth + 'px');

        if ($(this).attr('data-active') || $(this).hasClass(that.options.glideItemActiveClass)) {

          $(this).css('width', behindWidth + posterWidth + 'px');

        } else {
          $(this).css('width', posterWidth + 'px');

        }

      });

      that.$el.on('mouseenter', '.' + that.options.glideItemClass, function () {

        that.$el.children('.' + that.options.glideItemClass).removeClass(that.options.glideItemActiveClass);
        that.$el.children('.' + that.options.glideItemClass).removeAttr('data-active');
        that.$el.children('.' + that.options.glideItemClass).css('width', posterWidth + 'px');

        $(this).attr('data-active', true);
        $(this).addClass(that.options.glideItemActiveClass);
        $(this).css('width', behindWidth + posterWidth + 'px');


      });


    }

  }

  $.fn.Glide = function (options) {

    return $(this).each(function (idx, el) {

      var glide = new Glide($(this), options);
      glide._initialize();
      return glide;

    });
  };
}));