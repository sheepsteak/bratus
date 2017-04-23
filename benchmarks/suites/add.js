const { Suite } = require('benchmark');
const lodashAdd = require('lodash/fp/add');
const { add: ramdaAdd } = require('ramda');
const { add } = require('../../lib');

module.exports = () => new Promise((resolve) => {
  const suite = new Suite();

// add tests
  suite.add('lodash#add', () => {
    lodashAdd(1, 1);
  });
  suite.add('ramda#add', () => {
    ramdaAdd(1, 1);
  });
  suite.add('bratus#add', () => {
    add(1, 1);
  })
  // add listeners
  .on('start', () => {
    console.log('add');
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
