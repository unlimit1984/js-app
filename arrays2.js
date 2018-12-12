/**
 * TASK 04 - Arrays 2
 * 
 * 
 */
/*
 * Copyright (C) 2018 Motorola Solutions, Inc.
 */

// map / forEach / reduce / find / findIndex / indexOf / includes / filter / sort

class DTO {
    constructor(item) {
      this._item = item
    }
  
    getName() {
      return this._item.name;
    }
  }
  
  let list = [];
  
  for (let i = 0; i < 100; i++) {
    list.push({id: i, name: 'name ' + i, email: 'test' + i + '@test.com'});
  }
  
  const indexes = {};
  
  // list.reduce((acc, item) => {
  //   acc[item.email] = item;
  
  //   return acc;
  // }, indexes);
  
  console.time('first');
  
  // console.log('list ->', indexes['test955@test.com']);
  // console.log('list ->', list.findIndex(item => item.email === 'test955@test.com'));
  // console.log('list ->', list.includes(list[222]));
  
  // console.log('list ->', list.filter(item => {
  //   return item.id > 80;
  // }));
  
  console.log('list ->', list.sort((itemA, itemB) => {
    return (itemA.id - itemB.id) ? 1 : -1;
  }));
  
  console.timeEnd('first');
  // let sum = 0;
  
  // for (let i = 0; i < list.length; i++) {
  //   sum = sum + list[i].id;
  // }
  
  // let sum = list.reduce((acc, item) => (acc + item.id), 0);
  
  // console.log('sum ->', sum);
  
  // let newList = list.map(item => {
  //   // return item.name;
  //   return new DTO(item);
  // });
  
  // list
  //   .map(item => {
  //     return new DTO(item);
  //   })
  //   .forEach(item => {
  //     console.log('item ->', item.getName());
  //   });
  
  // list.forEach(item => {
  //   console.log('item ->', item);
  // });
  
  // console.log('list ->', list);
  // console.log('newList ->', newList);
  
  // const aaa = newList[1];
  
  // console.log('aaa.getName() ->', aaa.getName());