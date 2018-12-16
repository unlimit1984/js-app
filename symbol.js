// Map | Set, WeakMap | WeakSet | Symbol

// const testMap = new Map();
// const testMap = new WeakMap();

// const idxObj = {};
// const idxArr = [1,2,3];

// testMap.set(false, 0);
// testMap.set(true, 1);
// testMap.set(idxObj, {a: 1});
// testMap.set(idxArr, ['a', 'b', 'b']);
// testMap.set('name', 'John Snow');
// testMap.set('name', 'Sansa Stark');

// console.log(testMap.get(false));
// console.log(testMap.get(true));
// console.log(testMap.get(idxObj));
// console.log(testMap.get(idxArr));
// console.log(testMap.get('name'));

// const testSet = new Set();

// const o = {a: 1};

// testSet.add('bal bla bla');
// testSet.add(o);
// testSet.add(o);
// testSet.add(true);

// console.log(testSet.size);
// console.log(testSet.keys());
// console.log(testSet.values());

function test(smb) {
    // console.log('smb ->', smb); // 1 -> 100
  }
  
  function init() {
    const idx1 = Symbol('aaa');
    
    const testSym = {
      name: 'aaa',
      [idx1]: 1,
      [Symbol('aaa')]: 2,
      [Symbol('aaa')]: 3,
      [Symbol('aaa')]: 4,
      [Symbol('aaa')]: 5,
      [Symbol('aaa')]: 6
    };
  
    test(testSym);
  
    console.log('testSym[idx1] ->', testSym[idx1]); // 100
  }
  
  init();
  
  // console.log('testSym ->', testSym);
  
  // for (k in testSym) {
  //   console.log('k, testSym[k] ->', k, testSym[k]);
  // }
  
  // console.log(testSym[idx1]);