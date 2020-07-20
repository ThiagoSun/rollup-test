import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
// import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import progress from 'rollup-plugin-progress';
import fileSize from 'rollup-plugin-filesize';
import babel from '@rollup/plugin-babel';
// import { uglify } from 'rollup-plugin-uglify';
import { terser } from "rollup-plugin-terser";
import path from 'path';
// import fs from 'fs-extra';
import pkg from './package.json';

const extensions = [
  `.ts`,
  `.tsx`,
  `.js`,
  `.jsx`,
  `.es6`,
  `.es`,
  `.mjs`
];

const umdCommonConfigs = {
  input: 'src/index.js',
  external: [/@babel\/runtime/, 'react'],
  plugins: [
    resolve(), // so Rollup can find `ms`
    url({
      destDir: path.join(__dirname, 'dist', 'assets', 'images'),
      include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif', '**/*.jpeg']
    }),
    postcss({
      extract: path.resolve('dist/index.css'),
      // Automatically enable CSS modules for .module.css .module.sss .module.scss .module.sass .module.styl .module.stylus .module.less files.
      autoModules: true,
      minimize: true
    }),
    json(),
    babel({
      babelHelpers: 'runtime',
      exclude: /node_modules/,
      presets: ['@babel/preset-react'],
      sourceMaps: true,
      plugins: [['@babel/plugin-transform-runtime', { useESModules: false }]]
    }),
    commonjs(), // so Rollup can convert `ms` to an ES module
    progress(),
    fileSize(),
  ]
};

const umd = [{
  output: {
    name: 'rtRollupUtils',
    file: pkg.unpkg,
    format: 'umd',
    sourcemap: true,
    globals: {
      react: 'React'
    }
  },
  ...umdCommonConfigs
}, {
  // browser-friendly UMD build
  output: {
    name: 'rtRollupUtils',
    file: `${pkg.unpkg.split('.js')[0]}.min.js`,
    format: 'umd',
    sourcemap: true,
    globals: {
      react: 'React'
    }
  },
  ...umdCommonConfigs,
  plugins: umdCommonConfigs.plugins.concat([
    terser()
  ])
}];

const cjsCommonConfigs = {
  input: 'src/index.js',
  external: [/@babel\/runtime/, 'react'],
  plugins: [
    resolve(), // so Rollup can find `ms`
    url({
      destDir: path.join(__dirname, 'dist', 'assets', 'images'),
      include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif', '**/*.jpeg']
    }),
    postcss({
      extract: path.resolve('dist/index.css'),
      // Automatically enable CSS modules for .module.css .module.sss .module.scss .module.sass .module.styl .module.stylus .module.less files.
      autoModules: true,
      minimize: true
    }),
    json(),
    babel({
      babelHelpers: 'runtime',
      exclude: /node_modules/,
      presets: ['@babel/preset-react'],
      sourceMaps: true,
      plugins: [['@babel/plugin-transform-runtime', { useESModules: false }]]
    }),
    commonjs(), // so Rollup can convert `ms` to an ES module
    progress(),
    fileSize()
  ]
};

const cjs = [{
  output: [{
    file: pkg.main,
    format: 'cjs',
    sourcemap: true,
  }],
  ...cjsCommonConfigs
}, {
  output: [{
    file: `${pkg.main.split('.js')[0]}.min.js`,
    format: 'cjs',
    sourcemap: true,
  }],
  ...cjsCommonConfigs,
  plugins: cjsCommonConfigs.plugins.concat([
    terser()
  ])
}];

const esmCommonConfigs = {
  input: 'src/index.js',
  external: [/@babel\/runtime/, 'react'],
  plugins: [
    resolve(), // so Rollup can find `ms`
    url({
      destDir: path.join(__dirname, 'dist', 'assets', 'images'),
      include: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.gif', '**/*.jpeg']
    }),
    postcss({
      extract: path.resolve('dist/index.css'),
      // Automatically enable CSS modules for .module.css .module.sss .module.scss .module.sass .module.styl .module.stylus .module.less files.
      autoModules: true,
      minimize: true
    }),
    json(),
    babel({
      babelHelpers: 'runtime',
      exclude: /node_modules/,
      presets: ['@babel/preset-react'],
      sourceMaps: true,
      plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]]
    }),
    commonjs(), // so Rollup can convert `ms` to an ES module
    progress(),
    fileSize()
  ]
}

const esm = [{
  output: [{
    file: pkg.module,
    format: 'esm',
    sourcemap: true,
  }],
  ...esmCommonConfigs
}, {
  output: [{
    file: `${pkg.module.split('.js')[0]}.min.js`,
    format: 'esm',
    sourcemap: true,
  }],
  ...esmCommonConfigs,
  plugins: esmCommonConfigs.plugins.concat([
    terser()
  ])
}];

export default [
  ...umd,
  ...cjs,
  ...esm
];
