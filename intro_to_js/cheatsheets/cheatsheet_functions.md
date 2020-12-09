# Ermahgerd! Quit Cheating! Functions Edition

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

## Functions

There are many ways to declare functions in JS. Here are two:

```
// This works due to hoisting
sayHi("Mr. Bojangles"); 

function sayHi(name) {
  alert(`Hi ${name}`);
}
// This also works
sayHi("NightRider");

// This won't work. Not hoisted
// Will result in error
sayBye("Nobody at all");

const sayBye = function(name) {
  alert(`Bye ${name}`);
}

// This works
sayBye("Nosferatu");
```

Some people declare all of their functions using `const` because those functions can't be overwritten / reassigned.

```
const doStuff = function() {
  alert("I do stuff");
}

// alerts "I do stuff"
doStuff();

// Results in an error, can't reassign doStuff
doStuff = function() {
  alert("I will never happen!");
}
```

Those declared with `function` can be redeclared / overwritten.

```
// alerts "I am like function yoga!"
soFlexibleWow();

function soFlexibleWow() {
  alert("I am like a rubber band!");
}

function soFlexibleWow() {
  alert("I am like function yoga!");
}

// alerts "I am like function yoga!"
soFlexibleWow();
```

### Calling a function

Regardless of how you declare a function, you always use parentheses to call it:

```
function callMe() {
  console.log("Like, on the landline?");
}

// logs "Like, on the landline?"
callMe();

// does not execute function, but will return the function object
// a useful brain nugget for when we get into callbacks
callMe
```

## Callbacks

In JS, we can pass functions to other functions as arguments. When we do this, the function being passed as an argument is called a callback:

```
function caller(functionToCall) {
  functionToCall();
}

function callback() {
  console.log("I need someone to call me.");
}

// Logs "I need someone to call me."
caller(callback);
```

We frequently use callbacks in JavaScript. When coding, you may declare and pass callbacks in two ways: as a named function (like above) or as an anonymous function (you declare a function without a name and pass it to the calling function at the same time):

```
function caller(functionToCall) {
  functionToCall();
}

// Logs "I need someone to call me, but I don't even have a name."
caller(function () {
  console.log("I need someone to call me, but I don't even have a name.");
});
```

This may seem weird, but you've already been doing this in Ruby:

```
10.times do |number|
  puts number
end
```

Above, we passed a block, which doesn't have a name, to the `times` method. This resulted in printing numbers 0 to 9. This is similar to passing an anonymous function as a callback to another function in JavaScript.

And here's an example of passing a callback that takes arguments when it's called:

```
function caller(functionToCall) {
  functionToCall("Look", "at", "this");
}

// Logs: "Look at this!"
// "Don't you tell me what to do!"
caller(function (string1, string2, string3) {
  console.log(`${string1} ${string2} ${string3}!`);
  console.log("Don't you tell me what to do!");
});
```

Any time we use Array enumerators, like `map()` or `filter()`, we'll be passing callbacks (whereas in Ruby we passed blocks).
