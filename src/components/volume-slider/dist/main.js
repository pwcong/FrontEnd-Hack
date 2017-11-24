'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VolumeSlider = function () {
  function VolumeSlider() {
    var _this = this;

    _classCallCheck(this, VolumeSlider);

    this.slider = document.getElementById('volume-slider');
    this.icon = document.getElementById('volume-icon');
    this.indicator = document.getElementById('volume-indicator');
    this.shape = document.getElementById('circle-mask-shape');
    this.input = document.getElementById('volume-input');

    this._lock = false;
    this._charging = false;
    this._charge = 0;
    this._volume = 0;

    this.input.value = this._volume;

    this.icon.addEventListener('mousedown', function () {
      _this.charge();
    });
    this.icon.addEventListener('mouseup', function () {
      _this.release(_this._charge);
    });
    this.icon.addEventListener('touchstart', function () {
      _this.charge();
    });
    this.icon.addEventListener('touchend', function () {
      _this.release(_this._charge);
    });
  }

  /**
   * Begin charge cycle
   */


  _createClass(VolumeSlider, [{
    key: 'charge',
    value: function charge() {
      var _this2 = this;

      if (this._lock) {
        return false;
      }
      this._lock = true;

      // Reset
      this._charge = 0;
      this._charging = true;

      // Hide indicator
      //this.indicator.style.visibility = 'hidden';
      // this.indicator.style.opacity    = '0';

      /**
       * Charge loop
       */
      var cycle = function cycle() {
        if (_this2._charging && ++_this2._charge < 100) {
          requestAnimationFrame(function () {
            cycle();
          });
        }

        // Update icon styles
        _this2.shape.style.transform = 'scale(' + _this2._charge / 100 + ')';
        _this2.icon.style.transform = 'rotate(' + -0.35 * _this2._charge + 'deg)';
      };

      setTimeout(function () {
        return cycle();
      }, 100);
    }

    /**
     * Release and fire based on charge
     * @param  {float} charge
     */

  }, {
    key: 'release',
    value: function release(charge) {
      var _this3 = this;

      // Reset charge animation
      this._charging = false;
      requestAnimationFrame(function () {
        _this3.shape.style.transform = 'scale(0)';
      });

      // Animation vars
      var y_cap = charge * 0.35,
          y_start = -0.3 * charge,
          x_cap = charge * 2,
          x_start = -10,
          duration = 20 + 4 * charge,
          start = new Date().getTime(),
          volume = this._volume,
          rotate = void 0;

      // Y animation
      var y_swap = duration * 0.55;

      var y_duration_up = y_swap,
          y_duration_down = duration - y_swap;

      var y = y_start,
          y_diff_up = -y_cap,
          y_diff_down = y_cap - y_start;

      // X animation
      var x = x_cap,
          x_diff = x_cap - 10;

      // Display indicator
      this.indicator.style.visibility = 'visible';
      this.indicator.style.opacity = '1';

      /**
       * Animation loop
       */
      var animate = function animate() {
        var elapsed = new Date().getTime() - start;

        if (elapsed < duration) {
          // Animate
          requestAnimationFrame(function () {
            animate();
          });

          if (elapsed < y_duration_up) {
            // Y up
            y = _this3.easeOut(elapsed, y_start, y_diff_up, y_duration_up);
          } else {
            // Y down
            y = _this3.easeIn(elapsed - y_duration_up, y_start - y_cap, y_diff_down, y_duration_down);
          }

          // Set values
          x = _this3.linearTween(elapsed, 0, x_diff, duration);
          rotate = _this3.easeInOut(elapsed, -1.5 * _this3._charge, 1.5 * _this3._charge, duration);
          _this3._volume = _this3.easeOut(elapsed, volume, charge - volume, duration);
        } else {
          // End of animation
          _this3._lock = false;

          // Set values
          x = x_cap;
          y = 0;
          rotate = 0;
          _this3._volume = charge;
        }

        // Render values
        _this3.icon.style.transform = 'rotate(' + rotate + 'deg)';
        _this3.indicator.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)';
        _this3.input.value = _this3._volume;
      };

      animate();
    }

    /**
     * Linear progression
     */

  }, {
    key: 'linearTween',
    value: function linearTween(t, b, c, d) {
      return c * t / d + b;
    }

    /**
     * Cubic ease-in progression
     */

  }, {
    key: 'easeIn',
    value: function easeIn(t, b, c, d) {
      t /= d;
      return c * t * t * t + b;
    }

    /**
     * Cubic ease-out progression
     */

  }, {
    key: 'easeOut',
    value: function easeOut(t, b, c, d) {
      t /= d;
      t--;
      return c * (t * t * t + 1) + b;
    }

    /**
     * Cubic ease-in-out progression
     */

  }, {
    key: 'easeInOut',
    value: function easeInOut(t, b, c, d) {
      t /= d / 2;
      if (t < 1) {
        return c / 2 * t * t * t + b;
      }
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }
  }]);

  return VolumeSlider;
}();

new VolumeSlider();