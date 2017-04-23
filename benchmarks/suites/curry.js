const { Suite } = require('benchmark');
const lodashCurry = require('lodash/fp/curry');
const { curry: ramdaCurry } = require('ramda');
const { curry } = require('../../lib');

const add = (x, y, z) => x + y + z;

module.exports = () => new Promise((resolve) => {
  const suite = new Suite();

// add tests
  suite.add('lodash#curry', () => {
    lodashCurry(add)(1)(2)(3);
  });
  suite.add('ramda#curry', () => {
    ramdaCurry(add)(1)(2)(3);
  });
  suite.add('bratus#curry', () => {
    curry(add)(1)(2)(3);
  })
  // add listeners
  .on('start', () => {
    console.log('curry');
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log(`Fastest is ${suite.filter('fastest').map('name')}`);
    resolve();
  })
  // run async
  .run({ async: true });
});
