function load(options) {
  let isLoaded = false;

  let paramString = '';
  Object.keys(options).forEach(option => {
    console.log(option);
    if (option.indexOf('data-') !== 0 && option !== 'client-id') {
      paramString += `&${option}=${options[option]}`;
    }
  });

  const load = function(src, cb) {
    var script = document.createElement('script');
    script.src = src;
    script.defer = true;
    Object.keys(options).forEach(option => {
      if (option.indexOf('data-') === 0) {
        script.setAttribute(option, options[option]);
      }
    });

    script.onload = cb;
    document.head.appendChild(script);
  }

  const clientId = options['client-id'] || 'sb';
  load(`https://www.paypal.com/sdk/js?client-id=${clientId}${paramString}`, () => {
    isLoaded = true;
  });

  if (!isLoaded) return null;
}

export default {
  load
};