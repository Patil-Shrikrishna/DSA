// Question :- Reverse the stack.
class stackArr { //Implementing stack using Array
    constructor(data) {
        this.items = [];
    }
    addElement(element) { //Inserting element on top in stack
        return this.items.push(element)
    }

    reverse() { //Reversing the element using another stack
        let rev = []
        while (this.items != 0) {
            rev.push(this.items.pop())
        }
        return rev
    }

}

//Creating object to access the stack and methods.
let stack = new stackArr();
stack.addElement(1);
stack.addElement(2);
stack.addElement(4);
stack.addElement(8);

console.log(stack.items);

console.log(stack.reverse())