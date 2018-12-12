/**
 * TASK 02 - Arrow functions
 * 
 * 
 */


class Test {

    test: () => {
      console.log('this ->', this); // ctx Test
    }
  
    doSomething() {
  
    }
  
  }
  
  class Test {
  
    constructor() {
      
      this.test = () => {
        console.log('this ->', this); // ctx Test
      };
    }
  
    doSomething() {
      test = 4;
    }
  
  }
  
  class ChildTest extends Test {
    
    test() {
      super.test();
    }
  
  }
  
  ///////////
  
  list = [];
  
  for (let i = 0; i < 10000; i++) {
    list.push(new Test());
  }
  