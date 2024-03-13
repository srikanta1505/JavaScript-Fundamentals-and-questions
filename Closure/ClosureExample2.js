function A() {
  const a = 10;
  let result = function () {
    return a;
  };
  return result;
}
let newResult = A();
console.log(newResult());
