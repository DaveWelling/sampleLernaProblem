const path = require('path');
module.exports = {
  options: {
    mains: {
      index: 'index',
      login: 'login'
    }
  },
  use: [
    '@neutrinojs/airbnb',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'pocNeut'
        }
      }
    ],
    '@neutrinojs/mocha',
    neutrino => {
        // access the Neutrino API
        neutrino.config.resolve.alias
            .set('a_pocdep', path.resolve('node_modules/pocdep/src'));
    }
  ]
};
