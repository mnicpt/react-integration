export var loadPaypalScript = function loadPaypalScript(_ref, cb) {
  var params = _ref.params,
      attributes = _ref.attributes,
      async = _ref.async;
  return new Promise(function (resolve, reject) {
    var query = '';
    Object.keys(params).forEach(function (param) {
      query += "&" + param + "=" + params[param];
    });
    var script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?" + query;
    script.type = 'text/javascript';

    if (async) {
      script.async = true;
    } else {
      script.defer = true;
    }

    Object.keys(attributes).forEach(function (attr) {
      script.setAttribute(attr, attributes[attr]);
    });

    script.onload = function () {
      resolve(window.paypal);
    };

    script.onerror = reject;
    document.head.appendChild(script);
  });
};