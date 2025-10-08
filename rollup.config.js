import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/screen-res.js',
      format: 'umd',
      name: 'screenRes',
      exports: 'default'
    }
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/screen-res.min.js',
      format: 'umd',
      name: 'screenRes',
      exports: 'default'
    },
    plugins: [terser()]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/screen-res.esm.js',
      format: 'esm'
    }
  }
];