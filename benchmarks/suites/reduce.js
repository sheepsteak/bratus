const { Suite } = require('benchmark');
const lodashReduce = require('lodash/fp/reduce');
const { reduce: ramdaReduce } = require('ramda');
const { reduce } = require('../../lib');

const sum = (acc, item) => acc + item;

module.exports = () => new Promise((resolve) => {
  const suite = new Suite();

  // add tests
  suite.add('lodash#reduce', () => {
    lodashReduce(sum, 0, [1, 2, 3, 4, 5]);
  });
  suite.add('ramda#reduce', () => {
    ramdaReduce(sum, 0, [1, 2, 3, 4, 5]);
  });
  suite.add('bratus#reduce', () => {
    reduce(sum, 0, [1, 2, 3, 4, 5]);
  })
  // add listeners
  .on('start', () => {
    console.log('reduce');
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
