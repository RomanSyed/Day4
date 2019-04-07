function getCount(objects) {
  let array = objects;
  let count = 0;
  for (elem in array) {
    if (array[elem].x == array[elem].y) count += 1;
  }
  return count;
}
objects = [
  (obj1 = { x: 1, y: 1 }),
  (obj2 = { x: 2, y: 2 }),
  (obj3 = { x: 3, y: 3 }),
  (obj4 = { x: 3, y: 4 }),
  (obj5 = { x: 4, y: 5 })
];
console.log(getCount(objects));
