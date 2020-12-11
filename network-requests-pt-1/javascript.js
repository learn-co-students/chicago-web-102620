function regularFunction() {
  console.log("I'm regular");
}

const notRegularFunction = () => {
  console.log("I'm not regular");
};

// don't do this, there's no point
// () => {
//   console.log('hi there')
// };

regularFunction();
notRegularFunction();

[1, 2].forEach(function(element) {
  console.log(element);
});

[1, 2].forEach((element) => {
  console.log(element);
});

const oneLineReturn = () => "I'm being returned";

console.log(oneLineReturn());
