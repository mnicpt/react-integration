export const paypalScript = function({ params, attributes }, cb) {
  return new Promise((resolve, reject) => {
    let query = '';
    Object.keys(params).forEach(param => {
      query += `&${param}=${params[param]}`;
    });
  
    var script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?${query}`;
    script.type = 'text/javascript';
    script.defer = true;
    
    Object.keys(attributes).forEach(attr => {
      script.setAttribute(attr, attributes[attr]);
    });
  
    script.onload = () => {
      resolve(window.paypal);
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
