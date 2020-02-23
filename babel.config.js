module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './src/assets',
            atoms: './src/components/atoms',
            molecules: './src/components/molecules',
            organisms: './src/components/organisms',
            navigations: './src/navigations',
            screens: './src/screens',
            services: './src/services',
            styles: './src/styles',
            utils: './src/utils',
            nativeBaseTheme: './src/native-base-theme'
          },
        },
      ],
    ],
  };
};
