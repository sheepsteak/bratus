const { Suite } = require('benchmark');
const lodashMap = require('lodash/fp/map');
const { map: ramdaMap } = require('ramda');
const { map } = require('../../lib');

const add1 = (x => x + 1);

module.exports = () => new Promise((resolve) => {
  const suite = new Suite();

// add tests
  suite.add('lodash#map', () => {
    lodashMap(add1, [1, 2, 3, 4, 5]);
  });
  suite.add('ramda#map', () => {
    ramdaMap(add1, [1, 2, 3, 4, 5]);
  });
  suite.add('bratus#map', () => {
    map(add1, [1, 2, 3, 4, 5]);
  })
  // add listeners
  .on('start', () => {
    console.log('map');
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
