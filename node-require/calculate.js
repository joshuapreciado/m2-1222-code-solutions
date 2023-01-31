const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const calculation = () => {
  const x = Number(process.argv[process.argv.length - 3]);
  const test = process.argv[process.argv.length - 2];
  const y = Number(process.argv[process.argv.length - 1]);
  if (test === 'plus') {
    console.log('result:', add(x, y));
  }
  if (test === 'minus') {
    console.log('result:', subtract(x, y));
  }
  if (test === 'time') {
    console.log('result:', multiply(x, y));
  }
  if (test === 'over') {
    console.log('result:', divide(x, y));
  }
};

calculation();
