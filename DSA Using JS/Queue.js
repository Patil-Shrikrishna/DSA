// Question :- Implement Queue and Insert, Delete elements.

class Queue {
    constructor() { //Implementing Queue using Array
        this.elements = []
        this.head = 0
        this.tail = 0
    }
    enqueue(element) {//Inserting element at the tail of Queue
        this.elements[this.tail] = element;
        this.tail++;
    }
    dequeue() {//Deleting element from head of Queue
        this.elements.shift();
        this.tail--;
    }
    getHead() {// Returning first element of Queue
        return this.elements[this.head]
    }
    getLength() {// Returning the length of the Queue
        return this.tail
    }
    isEmpty() {// checking whether the Queue is empty or not
        return this.length === 0
    }
}

let queue = new Queue()

queue.enqueue(4)
queue.enqueue(3)
queue.enqueue(2)
queue.enqueue(1)
console.log(queue)

queue.dequeue()
console.log(queue)
queue.dequeue()
console.log(queue)

console.log(queue.getHead())
console.log(queue.isEmpty())
console.log(queue.getLength())
