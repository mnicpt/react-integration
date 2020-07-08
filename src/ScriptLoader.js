import React, { useState, useEffect } from 'react';

function loadScript(WrappedComponent) {
  function ScriptLoader({ url, ...props }) {
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
      let paramString = '';
      Object.keys(props).forEach(prop => {
        if(prop.indexOf('data-') !== 0) {
          paramString += `&${prop}=${props[prop]}`;
        }
      });

      const load = function(src, cb) {
        var script = document.createElement('script');
        script.src = src;
        script.defer = true;
        
        Object.keys(props).forEach(prop => {
          if(prop.indexOf('data-') === 0) {
            script.setAttribute(prop, props[prop]);
          }
        });

        script.onload = cb;
        document.head.appendChild(script);
      }
      if (window.paypal) {
        setLoaded(true);
      } else {
        load(`${url}?${paramString}`, () => {
          setLoaded(true)
        });
      }
    }, [url, props]);

    if (!isLoaded) return null;
    return (
      <WrappedComponent {...props} />
    );
  }

  return ScriptLoader;
}

export default loadScript;