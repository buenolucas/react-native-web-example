module.exports = {
  presets: [
    ['@babel/preset-env', { loose: true, targets: { node: 'current' } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
    'module:metro-react-native-babel-preset',
  ],
};
