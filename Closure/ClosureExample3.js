function sum(a, b) {
  function display() {
    console.log(a + b);
  }
  return display;
}

console.log(sum(10, 23));
// result();
