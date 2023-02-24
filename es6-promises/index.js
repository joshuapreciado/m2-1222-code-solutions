const takeAChance = require('./take-a-chance');

const text = takeAChance('Joshua Preciado');
text.then(text => {
  console.log(text);
});
text.catch(error => {
  console.log(error);
});
