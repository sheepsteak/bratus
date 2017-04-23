const { Suite } = require('benchmark');
const lodashTail = require('lodash/fp/tail');
const { tail: ramdaTail } = require('ramda');
const { tail } = require('../../lib');

module.exports = () => new Promise((resolve) => {
  const suite = new Suite();

// add tests
  suite.add('lodash#tail', () => {
    lodashTail([1, 2, 3, 4, 5]);
  });
  suite.add('ramda#tail', () => {
    ramdaTail([1, 2, 3, 4, 5]);
  });
  suite.add('bratus#tail', () => {
    tail([1, 2, 3, 4, 5]);
  })
  // add listeners
  .on('start', () => {
    console.log('tail');
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
