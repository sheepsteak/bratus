import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  format: 'es',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: [
        'external-helpers',
      ],
    }),
  ],
  dest: 'es/index.js',
};
