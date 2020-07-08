import React, { useState, useEffect } from 'react';

function loadScript(WrappedComponent) {
  function ScriptLoader({ clientId = 'sb', params = {}, attrs = {}, ...props }) {
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
      let paramString = '';
      Object.keys(params).forEach(param => {
        paramString += `&${param}=${params[param]}`;
      });

      const load = function(src, cb) {
        var script = document.createElement('script');
        script.src = src;
        script.defer = true;
        Object.keys(attrs).forEach(attr => {
          script.setAttribute(attr, attrs[attr]);
        });

        script.onload = cb;
        document.head.appendChild(script);
      }
      load(`https://www.paypal.com/sdk/js?client-id=${clientId}${paramString}`, () => {
        setLoaded(true)
      });
    }, [clientId, params, attrs]);

    if (!isLoaded) return null;
    return (
      <WrappedComponent {...props} />
    );
  }

  return ScriptLoader;
}

export default loadScript;