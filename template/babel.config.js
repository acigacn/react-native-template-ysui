module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json'],
        alias: {
          '@api': './src/api',
          '@mock': './src/mock',
          '@confs': './src/configs',
          '@comms': './src/common',
          '@comps': './src/components',
          '@conts': './src/constants',
          '@helps': './src/helpers',
          '@stors': './src/stores',
          '@servs': './src/services',
          '@views': './src/views',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'], // 生产环境中移除console
    },
  },
};
