const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const moduleFederationConfig = module.exports = withModuleFederationPlugin({

  name: 'mf-body',

  exposes: {
    './AppModule': './src/app/app.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

moduleFederationConfig.output.publicPath = 'http://localhost:4201/'
module.exports = moduleFederationConfig;
