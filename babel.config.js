module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        'babel-preset-expo',
        {
          jsxImportSource: 'nativewind',
        },
      ],
      'nativewind/babel',
    ],

    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],

          alias: {
            '@': './',
            '@assets': './src/assets',
            '@components': './src/components',
            'tailwind.config': './tailwind.config.js',
          },
        },
      ],
    ],
  };
};
