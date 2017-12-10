(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else {
    // Browser globals
    root.Promise = factory();
  }
})(typeof self !== 'undefined' ? self : this, function() {
  var Promise = function(fn) {
    var state = 'pending';
    var doneList = [];
    var catcher = null;

    this.then = function(done) {
      switch (state) {
        case 'pending':
          doneList.push(done);
          return this;
        default:
          break;
      }
    };

    this.catch = function(c) {
      switch (state) {
        case 'pending':
          catcher = c;
          break;
        default:
          break;
      }
    };

    function resolve(newValue) {
      setTimeout(function() {
        state = 'fulfilled';
        var value = newValue;
        doneList.forEach(function(fulfill) {
          value = fulfill(value);
        });
      }, 0);
    }

    function reject(e) {
      setTimeout(function() {
        state = 'rejected';
        catcher && catcher(e);
      }, 0);
    }

    fn(resolve, reject);
  };

  return Promise;
});
