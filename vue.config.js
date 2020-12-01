module.exports = {
    runtimeCompiler: true,
    publicPath: process.env.NODE_ENV === 'production'
    ? '/path/to/app/'
    : '/'
  }
