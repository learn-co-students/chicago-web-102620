# Ermahgerd! Quit Cheating! Objects Edition

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

## Objects in JS, aka POJOs, aka Hashes (in Ruby), aka Dictionaries (in Python), and on and on

First we need to get something clear about JS objects, because we could be referring to multiple types of data. One: there is the Object class and all Objects that derive from it, like Arrays and functions. And then, there is the object, which also derives from the Object class, but in this case, we're talking about what we call Hashes in Ruby. We're going to focus on the little-o object. To keep things clear, we'll refer to it as a POJO (Plain Old JavaScript Object). I'm guessing the JS creators were feeling quite uncreative when they got to coding this part of the language.

### Declare a POJO

There are multiple ways to declare a POJO, but we normally do this:

```
const pojoamas = {
  fancy: "silk",
  casual: "cotton",
  controversial: "potato sack"
};
```

### Keys (part before the colon)

There are rules for key names:
* May start with any letter, contain numbers, and underscores
* May be a number (e.g. 100)
* May start with a number if surrounded by quotes (e.g. "1cat")
* May contain spaces if surrounded by quotes (e.g. "hi peeps")

```
const validKeys = {
  soValid: "yup",
  also_valid: "certainly",
  "surprisingly valid": "what!? that's bananas!",
  "1cat2potato": "need more cats, potato also good",
  500: "maybe this is weird, but it's ok"
};
```

### Accessing values

We can access a value associateed with a key using dot notation `.` or square brackets `[]`.

Use square brackets when:
* the key is surrounded by quotes
* the key is a number
* you are using a value stored in a variable as the key

Otherwise use the dot.

```
const validKeys = {
  soValid: "yup",
  also_valid: "certainly",
  "surprisingly valid": "what!? that's bananas!",
  "1cat2potato": "need more cats, potato also good",
  500: "maybe this is weird, but it's ok"
};

validKeys.soValid;
=> "yup"

validKeys.also_valid;
=> "certainly"

validKeys["surprisingly valid"];
=> "what!? that's bananas!"

validKeys[500];
=> "maybe this is weird, but it's ok"

const keyName = "soValid";
validKeys[keyName];
=> "yup"
```

### Accessing all values

Check out the loops cheatsheet and look at the `for...in` loop.

### Get keys or values as an Array

```
Object.keys(pojo);
=> [key1, key2, key3, etc.]

Object.values(pojo);
=> [value1, value2, value3, etc.]
```
