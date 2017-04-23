const { platform } = require('benchmark');
const requireDir = require('require-dir');

const suites = Object.values(requireDir('./suites')).map(v => v);

console.log(platform.toString() || `Node.js ${process.version}`);
const start = async () => {
  for (let i = 0; i < suites.length; i += 1) {
    await suites[i](); // eslint-disable-line no-await-in-loop
    console.log();
  }
};

start();
