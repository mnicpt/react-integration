export const loadPaypalScript = function({ params, attributes, async }, cb) {
  return new Promise((resolve, reject) => {
    let query = '';
    Object.keys(params).forEach(param => {
      query += `&${param}=${params[param]}`;
    });
  
    var script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?${query}`;
    script.type = 'text/javascript';

    if (async) {
      script.async = true;
    } else {
      script.defer = true;
    }
    
    Object.keys(attributes).forEach(attr => {
      script.setAttribute(attr, attributes[attr]);
    });
  
    script.onload = () => {
      resolve(window.paypal);
    };
    script.onerror = reject;
    document.head.insertBefore(script, document.head.firstChild);
  });
}
