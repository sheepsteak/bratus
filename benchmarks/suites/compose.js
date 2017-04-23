const { Suite } = require('benchmark');
const lodashCompose = require('lodash/fp/compose');
const { compose: ramdaCompose } = require('ramda');
const { compose } = require('../../lib');

const add1 = x => x + 1;
const multiply2 = x => x * 2;
const divide5 = x => x / 5;

module.exports = () => new Promise((resolve) => {
  const suite = new Suite();

// add tests
  suite.add('lodash#compose', () => {
    lodashCompose(
      add1,
      multiply2,
      divide5
    )(10);
  });
  suite.add('ramda#compose', () => {
    ramdaCompose(
      add1,
      multiply2,
      divide5
    )(10);
  });
  suite.add('bratus#compose', () => {
    compose(
      add1,
      multiply2,
      divide5
    )(10);
  })
  // add listeners
  .on('start', () => {
    console.log('compose');
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
