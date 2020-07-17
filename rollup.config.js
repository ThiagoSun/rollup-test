import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import progress from 'rollup-plugin-progress';
import fileSize from 'rollup-plugin-filesize';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import path from 'path';
import fs from 'fs-extra';
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

export default [
	// browser-friendly UMD build
	{
		input: 'src/index.js',
		output: {
			name: 'howLongUntilLunch',
			file: 'dist/index.umd.js',
			format: 'umd'
		},
    external: [/@babel\/runtime/, 'react', 'react-dom'],
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
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      commonjs(), // so Rollup can convert `ms` to an ES module
      progress(),
      fileSize()
    ]
	},
	{
		input: 'src/index.js',
		external: [/@babel\/runtime/, 'react', 'react-dom'],
		output: [
			{
			  file: pkg.main,
        format: 'cjs',
        // plugins: [getBabelOutputPlugin({
        //   presets: ['@babel/preset-env', '@babel/preset-react'],
        //   plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]]
        // })]
      }, {
		    file: pkg.module,
        format: 'esm',
        // plugins: [getBabelOutputPlugin({
        //   presets: ['@babel/preset-env', '@babel/preset-react'],
        //   plugins: [['@babel/plugin-transform-runtime', { useESModules: false }]]
        // })]
		  }
    ],
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
        // babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      commonjs(), // so Rollup can convert `ms` to an ES module
      progress(),
      fileSize()
    ]
  }
];
