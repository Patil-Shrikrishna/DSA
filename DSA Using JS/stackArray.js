// Question :- Implement stack and Insert, Delete elements.
class stackArr { //Implementing stack using Array
    constructor(data) {
        this.items = [];
    }
    addElement(element) { //Inserting element on top in stack
        return this.items.push(element)
    }
    removeElement() { //Deleting element on top in stack
        if (this.items.length > 0) {
            this.items.pop();
        }
    }
    peek() { // Returning top element of stack
        return this.items[this.items.length - 1];
    }
    isEmpty() { // checking whether the stack is empty or not
        return this.items.length == 0;
    }
    size() { // Returning the length of the Stack
        return this.items.length;
    }
    clear() { // Clearing the stack
        this.items = [];
    }
}
//Creating object to access the stack and methods.
let stack = new stackArr();
stack.addElement(1);
stack.addElement(2);
stack.addElement(4);
stack.addElement(8);

console.log(stack.items);

stack.removeElement();
console.log(stack.items);

stack.removeElement();
console.log(stack.items);

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());

stack.clear();
console.log(stack.items);