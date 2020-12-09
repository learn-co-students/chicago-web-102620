# Ermahgerd! Quit Cheating! Loops Edition

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

## Loops

Let's go over some of the available loops. Notice we said "some". There are more!

### General purpose loops: `for` and `while`

```
// logs numbers 0 to 4
for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;

// logs numbers 0 to 4
while (i < 5) {
  console.log(i);
  i++;
}
```

### Specific purpose loops: `for...of` and `for...in`

```
const greetings = ["Hi", "Hello", "Bonjour"];

// Iterates over every value in an Array, unless you tell it to stop
for (const greeting of greetings) {
	console.log(greeting);
}
```

```
const goodbyes = {
	spanish: "Adios",
  english: "Byee",
  french: "Au revoir"
}

// Iterates over every key in an object, unless you tell it to stop
for (const bye in goodbyes) {
	console.log(goodbyes[bye]);
}
```