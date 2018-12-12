/**
 * TASK 03 - Arrays
 * 
 * 
 */

let list = [];

for (let i = 0; i < 100000; i++) {
  list.push({id: i, name: 'name ' + i});
}

function Test(item) {
  item.id = item.id + 1000;
}

////////////

function a() {
  console.time('first');

  for (let i = 0; i < list.length; i++) {
    Test(list[i]);
  }

  console.timeEnd('first');
}
///////

function b() {
  console.time('second');
  
  list.forEach(i => Test(i));
  
  console.timeEnd('second')
}

function c() {
  console.time('third');

  for (let i = 0; list[i]; i++) {
    Test(list[i]);
  }

  console.timeEnd('third');
}

a();
b();
c();

// let list = [];

console.time('forth');

// for (let i = 0; i < 1000000; i++) {
//   list.push({id: i, name: 'name ' + i});
// }

let list2 = Array(100000).fill({ id: 1, name: 'name ' });

console.timeEnd('forth');