/**
 * TASK 01 - Class in es6
 * 
 * 
 */

class Task {

    constructor(title = Task.getDefaultTitle()) {
        this.title = title;
        this._done = false;
        console.log("Task constructor");
        Task.count++;
    }

    get done() {
        console.log("calling getter for done");
        return this._done;
    }

    set done(value) {
        console.log("calling setter for done");

        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.log("done should applied to boolean true or false");
        }
    }

    complete() {
        this.done = true; //use setter for done
        this._done = true;  //use attribute
        console.log(`Task '${this.title}' is done`, this.done);
    }

    static getDefaultTitle() {
        return "Default title";
    }

    func1() {
        console.log("calling func1()");
    }

    func2() {
        console.log("calling func2()");
        this.func1();
    }

    sum(a, b) {
        return a + b;
    }

    handleValue(f1, f2, value) {
        if (value <= 0) {
            f1(value);
        } else {
            f2(value);
        }
    }
}

Task.count = 0;

let task = new Task("Simple task");


// let defaultTask = new Task();
// console.log(task.title);
// task.complete();
// defaultTask.complete();
// console.log(Task.count);

// task.func2();

function native(value) {
    console.log(value, "Native value");
}

function negative(value) {
    console.log(value, "Negative value");
}

//task.handleValue(negative, native, -5);

// task.handleValue((val)=>{console.log("negative value:", val);}, (val)=>{console.log("positive value:", val);}, -100);
task.handleValue(val=>console.log("negative value:", val), val=>console.log("positive value:", val), -100);

