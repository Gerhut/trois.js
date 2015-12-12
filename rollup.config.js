import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/index.js',
  dest: 'dist/trois.js',
  plugins: [
    babel({ presets: ['es2015-rollup'] })
  ],
  format: 'umd',
  moduleName: 'Trois'
}
