// semicolon optional, but Rupa has a habit
global = "I too am everywhere";

function saySomething() {
  console.log(global);
}
const hi = 'hi'
saySomething();

const globallyAvailable = "I am not alone!";

function sayGloballyAvailable() {
  console.log(globallyAvailable);
  return "i will be returned";
}

// sayGloballyAvailable();

// globallyAvailable = "You can't do this! Don't even!";

// let chameleon = "Not sure I can spell that word.";
// chameleon = "I can be anything!";

// console.log(chameleon);

[1, 2, 3].forEach(function (element) {
  console.log(element);
});
