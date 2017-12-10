(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Promise'], factory);
  } else {
    // Browser globals
    root.AjaxPromise = factory(root.Promise);
  }
})(typeof self !== 'undefined' ? self : this, function(Promise) {
  function createXHR() {
    return window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();
  }

  var AjaxPromise = function(url, method, header, data) {
    return new Promise(function(resolve, reject) {
      var xhr = createXHR();
      xhr.open(method, url, true);
      for (var key in header) {
        xhr.setRequestHeader(key, header[key]);
      }
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(xhr.responseText);
          } else {
            reject('请求失败');
          }
        }
      };

      xhr.send(data);
    });
  };

  return AjaxPromise;
});
