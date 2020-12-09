console.log('Hello Chicago!! Are you ready to JavaScript?!');

// IF YOU DON'T ADD DEFER TO THE SCRIPT TAG IN THE HTML, YOU'LL NEED THIS
// document.addEventListener("DOMContentLoaded", function() {
//   const h1 = document.querySelector("h1");

//   h1.textContent = "Hello Chicagoans!";
// });

// GRAB H1 AND CHANGE ITS TEXT
const h1 = document.querySelector("h1");
h1.textContent = "Hello Chicagoans!";

// CHANGE COLOR OF MY NAME, TO ACCESS A CSS PROPERTY, WE MUST ACCESS THE STYLE PROPERTY FIRST
const subName = document.querySelector("#sub-name");
subName.style.color = "purple";
// TO CHANGE font-size WE MUST USE CAMEL CASE BECAUSE JS DOESN'T LIKE HYPHENS IN VARIABLE NAMES
// OR IN PROPERTY NAMES
subName.style.fontSize = "32px";

// GRAB ALL OF THE LIS ON THE PAGE AND CHANGE THEIR TEXT EXCEPT THE LAST ONE
const lis = document.querySelectorAll("li");

lis.forEach(function (li, index) {
  if (index === lis.length - 1) {
    // in forEach, return means skip to next iteration
    return;
  }

  li.innerText = "I am so different now!";
});

// CREATE A LINK AND APPEND IT TO THE BODY (AT THE BOTTOM)
const link = document.createElement('a');
link.innerText = "Google";
link.href = "http://google.com";
document.body.append(link);