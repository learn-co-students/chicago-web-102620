# Ermahgerd! Quit Cheating! Array Enumerators Edition

Semicolons are mostly optional in JS. I use them out of habit to be perfectly honest.

When running JS in the browser, the global object is `window`. Therefore any variables or functions declared in global scope are accessible by their bare names or on the `window` as a property.

```
function suchGlobalWow() {
  alert("Pay attention to me!!!");
}

// Both of these will execute the function
suchGlobalWow();
window.suchGlobalWow();
```

## Array enumerators

Here are some commonly used enumerators. We haven't included all of the possible arguments, just the most common ones. Some of these methods take additional arguments.

### `forEach(element, index)`

```
const secrets = ["I don't know how to whistle", "Ok sometimes on accident I do"];

// Logs: 
// Secret #0: I don't know how to whistle
// Secret #1: Ok sometimes on accident I do
secrets.forEach(function (secret, index) {
	console.log(`Secret #${index}: ${secret}`);
});
```

Iterate over the entire array. To exit early, use `return`.

This is the equivalent in Ruby:

```
secrets = ["I don't know how to whistle", "Ok sometimes on accident I do"]

secrets.each_with_index do |secret, index|
	puts "Secret ##{index}: #{secret}"
end
```

### `map(element, index)`

```
const secrets = ["I don't know how to whistle", "Ok sometimes on accident I do"];

const updatedSecrets = secrets.map(function (secret) {
	return `${secret} and that's OK`;
});

// Logs: ["I don't know how to whistle and that's OK", "Ok sometimes on accident I do and that's OK"]
console.log(updatedSecrets);
```

Returns a **new** Array of the same exact length as the original one `map()` was called on. The returned value for each element in the callback becomes the value in the new Array.

### `filter(element, index)`

```
const secrets = ["I don't know how to whistle", "Ok sometimes on accident I do"];

const lessSecrets = secrets.filter(function (secret, index) {
	return index !== 1;
});

// Logs ["I don't know how to whistle"]
console.log(lessSecrets);
```

Returns a **new** Arrays consisting of the elements for which the callback returned `true`. The returned Array will have anywhere from 0 to the original Array's number of elements.

### `reduce(accumulator, element, index)`

```
const secrets = ["I don't know how to whistle", "Ok sometimes on accident I do"];

const characterLength = secrets.reduce(function (totalLength, secret) {
	return totalLength + secret.length;
}, 0);

// Logs "The number of characters in all of the secrets is: 56"
console.log(`The number of characters in all of the secrets is: ${characterLength}`);
```

Will return any data type you tell it to. Use it to transform an Array into something completely different, or when the other Enumerators just can't get the job done.

## Summary of when to choose what

`forEach()`: I need to iterate over the Array and call some function, or perform some other tasks. I don't need to create a new Array or other Object from it.

`map()`: I need to create a new Array that's the same length as the caller, but with some or all of its values changed.

`filter()`: I need to create a new Array that's up to the same length as the caller. The elements in the new Array will all be present in the original Array (caller). No data will be transformed.

`reduce()`: None of the other Array methods can do the job. I need to return an entirely new Object or primitive data type (such as a Number) using the values in the caller. For example, I may need to reduce the Array to an object (Hash in Ruby) or reduce it to a String or Number.