let mySymbol = Symbol("kwwiiu");

const obj = {
  name: "chintu",
  age: 19,
  gender: "Male",
  "tech stack": "mern",
  [mySymbol]: "This is Symbol",
  greet: function () {
    return "Hello user!";
  },
};

let obj1 = {
  details: {
    nickname: "chintu",
    occupation: "SDE",
  },
};

// console.log(typeof obj.name);
// console.log(typeof obj.age);
// console.log(typeof obj.gender);
// console.log(obj["tech stack"]);
// console.log(obj["name"]);
// console.log(typeof obj["age"]);
// console.log(obj["gender"]);
// console.log(typeof obj[mySymbol]);
// console.log(obj);
// console.log(obj.greet);

let obj3 = Object.assign(obj, obj1);
console.log(obj1.toString());
