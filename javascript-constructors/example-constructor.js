function ExampleConstructor() {

}

console.log('value of ExampleConstructor:', ExampleConstructor);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor);

var Constructor = new ExampleConstructor();
console.log('value of testConstructor:', Constructor);
var newConstructor = Constructor instanceof ExampleConstructor;
console.log('value of newConstructor:', newConstructor);
