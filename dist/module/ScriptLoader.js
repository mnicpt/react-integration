import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useState, useEffect } from 'react';

function loadScript(WrappedComponent) {
  function ScriptLoader(_ref) {
    var url = _ref.url,
        props = _objectWithoutPropertiesLoose(_ref, ["url"]);

    var _useState = useState(false),
        isLoaded = _useState[0],
        setLoaded = _useState[1];

    useEffect(function () {
      var paramString = '';
      Object.keys(props).forEach(function (prop) {
        if (prop.indexOf('data-') !== 0) {
          paramString += "&" + prop + "=" + props[prop];
        }
      });

      var load = function load(src, cb) {
        var script = document.createElement('script');
        script.src = src;
        script.defer = true;
        script.type = 'text/javascript';
        Object.keys(props).forEach(function (prop) {
          if (prop.indexOf('data-') === 0) {
            script.setAttribute(prop, props[prop]);
          }
        });
        script.onload = cb;
        document.head.appendChild(script);
      };

      if (window.paypal) {
        setLoaded(true);
      } else {
        load(url + "?" + paramString, function () {
          setLoaded(true);
        });
      }
    }, [url, props]);
    if (!isLoaded) return null;
    return /*#__PURE__*/React.createElement(WrappedComponent, props);
  }

  return ScriptLoader;
}

export default loadScript;