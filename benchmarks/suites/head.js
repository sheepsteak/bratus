const { Suite } = require('benchmark');
const lodashHead = require('lodash/fp/head');
const { head: ramdaHead } = require('ramda');
const { head } = require('../../lib');

module.exports = () => new Promise((resolve) => {
  const suite = new Suite();

// add tests
  suite.add('lodash#head', () => {
    lodashHead([1, 2, 3, 4, 5]);
  });
  suite.add('ramda#head', () => {
    ramdaHead([1, 2, 3, 4, 5]);
  });
  suite.add('bratus#head', () => {
    head([1, 2, 3, 4, 5]);
  })
  // add listeners
  .on('start', () => {
    console.log('head');
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
