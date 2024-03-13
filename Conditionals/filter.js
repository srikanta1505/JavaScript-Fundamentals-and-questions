let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "blue",
    type: "suv",
    registration: new Date("2017-01-03"),
    capacity: 5,
  },
  {
    color: "purple",
    type: "suv",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
];

let result = cars.filter((item) => {
  return item.color === "purple" && item.capacity === 7;
});

console.log(result);
