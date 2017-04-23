# Bratus

A tree-shakeable library of automatically curried, data-last utility functions.

**This is a very early version and more functions will be added.**

So far the functions available are: `add`, `compose`, `curry`, `filter`, `head`, `map`, `reduce`, `tail`.

The arguments are generally the same as [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) and [Ramda](http://ramdajs.com/docs/) but I'll probably do some proper documentation at some point. If not you can look at the source for now.

## Install

npm:
```shell
npm install --save bratus
```
yarn:
```shell
yarn add bratus
```

Some examples of using the module:
```js
// ES5 (pre Node v4) 
var bratus = require('bratus');
bratus.add(1, 2);
bratus.head([1, 2, 3]);

// ES2015
import {add, head} from 'bratus';
add(1, 2);
head([1, 2, 3]);
```

If you use [Webpack 2](https://webpack.js.org/guides/tree-shaking/) or [Rollup](https://rollupjs.org/) then a tree-shakeable version of the library with ES2015 modules is used so you only include what you use in your bundle.

## Why

I was playing with existing libraries that do tree-shaking in Rollup and Webpack 2 and found that it didn't work as expected. Extra functions were included that were not being used. So I just started writing my own and found that compiling the tree-shaking build into a single file with named exports gave the best results.

I just kept on going and then started measuring the results and found I was able to make some functions faster. You can run the benchmarks by cloning the repo then doing the following:

```shell
yarn
yarn benchmark
```
