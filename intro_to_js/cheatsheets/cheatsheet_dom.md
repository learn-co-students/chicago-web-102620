# Ermahgerd! Quit Cheating! DOM Edition

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

## Accessing elements in the DOM

When JS is run in the browser, we are given access to an Object called `document`. `document` represents the entire webpage and we can access any HTML element through it. This means we can call methods on the `document` to manipulate the DOM! It's important to note that we can also grab an element from the DOM, and also call those same methods on that element.

Here are some methods, but not all, for getting elements in the DOM.

### `[Object].getElementById(id)`

If an HTML element has an id, we can access it using this method:

```
document.getElementById("pink-bassoon");
=> <p id="pink-bassoon">Nobody likes how I sound.</p>
```

It returns the matching HTML element if found.

### `[Object].querySelector(selector)`

This is a very flexible method. We can locate an HTML element by its class name, id, tag name, or some other attribute by using its CSS selector. It returns the first matching element that's found.

```
document.querySelector("p");
=> <p>I'm the first paragraph in the DOM!</p>

document.querySelector("#pink-bassoon");
=> <p id="pink-bassoon">Nobody likes how I sound.</p>

document.querySelector(".blue");
=> <div class="blue">I'm a blue paragraph.</p>
```

### `[Object].querySelectorAll(selector)`

Also very flexible! It's like `querySelector()` but it returns all matching elements as a NodeList, which is an Array-like Object (i.e., it responds to some of the Array methods, but not all).

```
document.querySelectorAll("p");
=> NodeList(3) [<p>First paragraph</p>, <p>Second paragraph</p>, <p>etc.</p>]
// The output in the console won't look like that, but it's clearer than NodeList(3)[p, p, p]
// which is closer to what you'll see
```

## Changing an element's contents

Let's replace the contents of an HTML element first. For this example, assume that `p` is storing a paragraph from the DOM.

```
p.textContent = "I'll replace the paragraph's text.";
p.innerText = "I'll replace the paragraph's text also.";
p.innerHTML = "I'll replace the contents, but I also support HTML. <p>Look, I'm a whole extra paragraph!</p>";
```

Let's add new elements to the DOM without removing anything:

```
const newParagraph = document.createElement('p');

newParagraph.textContent = "I'm shiny and new, but I'm not in the DOM yet. I'm just floating around.";
// This next line will add the paragraph as the last element in the DOM, and inside body
document.body.appendChild(newParagraph);
=> returns the newParagraph

const div1 = document.createElement('div');
const div2 = document.createElement('div');

div1.textContent = "Please add me to the DOM first.";
div2.textContent = "Just put me in the DOM OK.";

// This adds both divs to the body element
document.body.append(div1, div2);
=> returns undefined
```

`appendChild()` appends one element to an element in the DOM, and then returns it. It only works with Node objects, i.e. the HTML elements we're used to, such as divs and paragraphs and list items, etc.

`append()` appends one or more elements to an element in the DOM. It returns `undefined`. You can also append bare text (DOMString objects): `document.body.append("heyoo");`