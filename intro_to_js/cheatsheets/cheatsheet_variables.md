# Ermahgerd! Quit Cheating! Variables Edition

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

## Variable declarations

In JS, we have four options for declaring variables: global, `var`, `let`, and `const`. It's important to choose the right one at the right time.

### Global Variables

```
lookAtMe = "I am a global citizen!";

function oops() {
  doYouReallyWantThis = "I too am a global citizen!";
}

// Calling oops results in declaring the global variable
oops();

// Logs both values successfully
console.log(lookAtMe, doYouReallyWantThis);
```

Generally, we don't declare global variables in order to avoid naming conflicts (when two variables have the same name but shouldn't). As your codebase grows, and as you add third-party code, naming conflicts  will arise. So generally, we avoid these. Global variables are available everywhere, including the Dev console. You can access them like so: `varName` or `window.varName`.

### Using `var`

```
// Global scope, avaialble on window: window.traveller
var traveller = "I might as well be global!";

function notSoFast() {
  // Local scope, not available on window or outside the function
  var slowPoke = "But not me. I'm trapped in here!";

  return `${traveller} ${slowPoke}`;
}

console.log(notSoFast());
```

You may see variables declared with the `var` keyword in older codebases. It typically isn't used nowadays, though it might be for certain use cases (but rarely). A variable declared this way and in the outermost scope is available on the global object `window` in the browser: `window.traveller`. 

**`var` weirdness**: Research hoisting in JS.

```
// Will log undefined, won't produce an error
console.log(soWeird);

var soWeird = "What the fork!";
```

### Using `let`

```
let blockScoped = "Available everywhere but not on window";

function thisMakesSense() {
  let trapped = "Help, I can't get out!";

  if (blockScoped !== undefined) {
    alert(trapped);
  }
}

// alerts "Help, I can't get out!"
thisMakesSense();

if (blockScoped !== undefined) {
  let whyAmIHere = "Why even declare me?";
}

// Results in: Uncaught Reference Error: whyAmIHere is not defined
console.log(whyAmIHere);
```

Variables that may need to be reassigned to brand new values are declared using the `let` keyword. They are block scoped, i.e. they are trapped in the curly braces in which they are declared and cannot be accessed outside of them (Check out the last `if` statement in the code above). They are not available on the global object `window` in the browser.

### Using `const`

```
// Available everywhere but not on window
const neverChange = "I like myself the way I am.";

function stayTheSame() {
  const alsoNeverChanging = "So do I!";

  console.log(neverChange, alsoNeverChanging);
}

// logs "I like myself the way I am. So do I!"
stayTheSame();

if (true) {
  const whyAmIHere = "Why even declare me?";
}

// Results in: Uncaught Reference Error: whyAmIHere is not defined
console.log(whyAmIHere);
```

Variables that are never to be reassigned (e.g. using the `=` sign) are declared using `const`. If you try to reassign a constant it will result in an error.

```
const dontEven = "Don't even try it!";

// Results in Uncaught TypeError: Assignment to constant variable.
dontEven = "I am gonna try though.";
```

But you can mutate them, if they are mutable:

```
const makeMeALittleDifferentPlease = ["I like to evolve."];

makeMeALittleDifferentPlease.push("Now you are pink!");
makeMeALittleDifferentPlease.pop();
```

Just like `let`, variables declared with `const` are block-scoped: trapped in their curly protectors!

Some people declare all of their variables using `const` and then when their code breaks, replace those variables with `let`s.
