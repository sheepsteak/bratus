const { Suite } = require('benchmark');
const lodashFilter = require('lodash/fp/filter');
const { filter: ramdaFilter } = require('ramda');
const { filter } = require('../../lib');

const isOdd = (x => x % 2);

module.exports = () => new Promise((resolve) => {
  const suite = new Suite();

// add tests
  suite.add('lodash#filter', () => {
    lodashFilter(isOdd, [1, 2, 3, 4, 5]);
  });
  suite.add('ramda#filter', () => {
    ramdaFilter(isOdd, [1, 2, 3, 4, 5]);
  });
  suite.add('bratus#filter', () => {
    filter(isOdd, [1, 2, 3, 4, 5]);
  })
  // add listeners
  .on('start', () => {
    console.log('filter');
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
