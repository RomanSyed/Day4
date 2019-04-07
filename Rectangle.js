function Rectangle(a, b) {
  let obj = {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b
  };
  return obj;
}
const rec = Rectangle(4, 5);
console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);
