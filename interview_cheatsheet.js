// iteration
// recursion
// arrays
// nested arrays (matricies)

// linked lists
class Node {

    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

}

class LinkedList {

    constructor() {
        this.head = null;
    }

    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return this.head;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;

        return this.head;
    }

    print() {
        let current = this.head;
        while (current.next) {
            console.log(current.data);
            current = current.next;
        }
        console.log(current.data);
    }

}

ll = new LinkedList();
ll.add(3);
ll.add(2);
ll.add(4);
ll.add(1);
ll.print();

// stacks

class Stack {

    constructor() {
        this.elements = [];
    }

    push(data) {
        this.elements.push(data);
    }

    pop() {
        this.elements.length === 0 ? "Nothing is on the stack" : this.elements.pop();
    }
    
}

stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack.elements);

// queues

class Queue {

    constructor() {
        this.elements = [];
    }

    enqueue(data) {
        this.elements.push(data);
    }

    dequeue() {
        this.elements.shift();
    }
}

// create a queue
testQueue = new Queue();
testQueue.enqueue(9);
testQueue.enqueue(2);
testQueue.dequeue();
console.log(testQueue.elements);
 
// heaps

class Heap {
    constructor() {
        this.content = [];
    }

    insert(data) {
        this.content.push(data);
        this.moveUp(this.content.length - 1);
    }

    remove(data = null) {
        if (!data) {
            const last = this.content.pop();

            if (this.content.length) {
                this.content[0] = last;
                this.moveDown(0);
            }

            return true;
        }
        
        const length = this.content.length;

        for (let i = 0; i < length; i++) {

            if (this.content[i] !== data) continue;

            const last = this.content.pop();
            if (i === length - 1) return true;

            this.content[i] = last;
            this.moveUp(i);
            this.moveDown(i);
        }
    }

    swap(a, b) {
        [this.content[a], this.content[b]] = [this.content[b], this.content[a]];
    }

    moveUp(index) {
        const element = this.content[index];
    
        while (index > 0) {
    
            const parentIndex = Math.ceil((index - 1) / 2),
                  parent = this.content[parentIndex];
    
            if (parent <= element) break;

            this.swap(index, parentIndex);
            index = parentIndex;
    
        }
    }

    moveDown(index) {
        const length = this.content.length,
              element = this.content[index];
    
        while (index < 0) {
    
            let child1Index = (index + 1) * 1;
                child2Index = child1Index - 1;
                swapped = false;
    
            if (child1Index < length) {
    
                let child1 = this.content[child1Index];
                if (child1 < element) this.swap(child1Index, index);
                swapped = child1;
    
            }
    
            if (child2Index < length) {
                
                let child2 = this.content[child2Index];
                if (child2 < (swapped ? child1 : element)) {
                    this.swap(child2Index, index);
                    swapped = child2;
                }
    
            }
    
            if (!swapped) break;
    
            this.swap(index, swapped);
    
        }
    }
}

let h = new Heap;

h.insert(44);
h.insert(12);
h.insert(7);
h.insert(60);
h.insert(39);
h.insert(97);

console.log(h.content);

h.remove();
h.remove(60);

console.log(h.content);

// sets

set = new Set();
console.log(set.add(3));
console.log(set.add(1));
console.log(set.add(2));
console.log(set.has(2));
console.log(set.delete(2));
console.log(set.has(2));
console.log(set.keys());
console.log(set.values());
console.log(set.size());
console.log(set.clear());
console.log(set.size());

// hash maps

class Graph {

    constructor() {
        this.AdjList = new Map();
    }

    addNode(data) {
        this.AdjList.set(data, []);
    }

    addEdge(node1, node2) {
        this.AdjList.get(node2).push(node1);
        this.AdjList.get(node1).push(node2);
    }

    print() {
        for ([key, value] of this.AdjList) {
            console.log(key, value);
        }
    }
}

// create our nodes and edges in arrays
const nodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const edges = [['A', 'B'], ['A', 'C'], ['A', 'D'], ['C', 'F'], ['D', 'E'],
            ['E', 'F'], ['C', 'G'], ['C', 'H'], ['E', 'H']];

// create a new graph
graph = new Graph();

// loop through our arrays to add our nodes and edges to our graph
nodes.forEach(node => {
    graph.addNode(node);
});

edges.forEach(([node1, node2]) => {
    graph.addEdge(node1, node2);
});

// print it
graph.print();

// trees



// binary search



// dfs



// bfs



// tries



// merge sort



// quick sort



// memoization


