export const loadScript = function(url, { params, attributes, async }, cb) {
  if (!url) throw new Error('url required to load script');
  return new Promise((resolve, reject) => {
    let query = '';
    Object.keys(params).forEach(param => {
      query += `&${param}=${params[param]}`;
    });
  
    var script = document.createElement('script');
    script.src = `${url}?${query}`;
    // script.src = `https://www.paypalobjects.com/api/checkout.js?${query}`;
    script.type = 'text/javascript';

    if (async === true) {
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
    document.head.insertBefore(script, document.head.firstElementChild);
  });
}
