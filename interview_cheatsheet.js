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
console.log(set.get(2));
console.log(set.delete(2));
console.log(set.has(2));
console.log(set.keys());
console.log(set.values());
console.log(set.size());
console.log(set.clear());
console.log(set.size());

// hash maps

hash = new Map();
console.log(set.set('c', 3));
console.log(set.set('a', 1));
console.log(set.set('b', 2));
console.log(set.has('b'));
console.log(set.get('b'));
console.log(set.delete('b'));
console.log(set.has('b'));
console.log(set.keys());
console.log(set.values());
console.log(set.size());
console.log(set.clear());
console.log(set.size());

// graph
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

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    
}
  
  class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const newNode = new Node(data);
        !this.root ? this.root = newNode : this.addNode(this.root, newNode);
    }

    addNode(node, newNode) {
        if (newNode.data < node.data) {
          !node.left ? node.left = newNode : this.addNode(node.left, newNode);
        } else {
          !node.right ? node.right = newNode : this.addNode(node.right, newNode);
        }
    }

  }
  
  BinarySearchTree = new BinaryTree();
  
  console.log(BinarySearchTree.add(4));
  console.log(BinarySearchTree.add(7));
  console.log(BinarySearchTree.add(2));
  console.log(BinarySearchTree.add(9));
  console.log(BinarySearchTree.add(3));
  console.log(BinarySearchTree.add(13));
  console.log(BinarySearchTree.add(17));

// binary search



// dfs

BinaryTree.prototype.DFSPreOrder = function () {
    let visited = [];
  
    let current = this.root;
  
    let traverse = (node) => {
      visited.push(node.data);
  
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };
  
    traverse(current);
    return visited;
  };
  
  BinaryTree.prototype.DFSPostOrder = function () {
    let visited = [];
  
    let current = this.root;
  
    let traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
  
      visited.push(node.data);
    };
  };
  
  BinaryTree.prototype.DFSInOrder = function () {
    let visited = [];
  
    let current = this.root;
  
    let traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
  
      visited.push(node.data);
  
      if (node.right) {
        traverse(node.right);
      }
    };
  };
  
  BinarySearchTree.DFSPreOrder();
  BinarySearchTree.DFSPostOrder();
  BinarySearchTree.DFSInOrder();

// bfs

BinaryTree.prototype.BFS = function () {
    // array where we store the value of each node that we have visited
    let visited = [];
  
    // variable to keep track of current node
    let current = this.root;
  
    // queue to store all nodes we need to visit
    let queue = [current];
  
    // this loop runs until our queue is empty
    // we look at the next node in the queue, add it to the visited array
    // finally, we add any children of the current node to the queue
    while (queue.length) {
      current = queue.shift();
      visited.push(current.data);
  
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  
    return visited;
  };
  
  BinarySearchTree.BFS();

// tries

function Node(data) {
    this.data = data;
    this.isEndOfWord = false;
    this.children = {};
}

function Trie() {
    this.root = new Node();
}

Trie.prototype.insert = function(word) {

    let node = this.root;

    for (char of word) {
        if (node[char] == null) node[char] = {};
        node = node[char];
    }

    node.isEndOfWord = true;
}

Trie.prototype.search = function(word) {

    let node = this.root;

    for (char of word) {
        node = node[char];
        if (node === null) return null;
    }

    return node !== null && node.isEndOfWord === true;

}

t = new Trie();

console.log(t.insert("test"));
console.log(t.insert("toaster"));
console.log(t.insert("taco"));
console.log(t.search("test"));
console.log(t.search("toast"));
console.log(t.remove("test"));
console.log(t.search("test"));

// merge sort

const divide = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
    
    return sort(divide(left), divide(right));
}

const sort = (left, right) => {

    const result = [];

    while (left.length && right.length) {
        left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift());
    }

    const output = [...result, ...left, ...right];
    return output;
}

// quick sort

const quickSort = (arr) => {

    if (arr.length < 2) {
        return arr;
    }

    const index = arr.length - 1;
    const element = arr[index];
    const a = [];
    const b = [];
    let temp;

    for (let i = 0; i < index; i++) {
        temp = arr[i];
        temp < element ? a.push(temp) : b.push(temp);
    }

    const output = [...quickSort(a), element, ...quickSort(b)]
    return output;
}

// memoization

// returns the nth number in the fibonacci sequence
const fibonacci = (n) => {
    return n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));

const fibonacciMemoized = (n) => {
    const memo = new Map();

    const fib = (n) => {
        let number;

        if (memo.has(n)) {
            memo.set(n, number);
        } else {
            n === 0 || n === 1 ? number = n : number = fib(n - 1) + fib(n - 2);
        }

        return number;
    }

    return fib(n);
}

console.log(fibonacciMemoized(4));

const fibonacciMemoizedMultiple = (data) => {
    const memo = new Map();

    const fib = (dimension, data) => {
        let number;

        memo.set(dimension, memo.get(dimension) || new Map());

        if (memo.has(dimension) && memo.get(dimension).has(data)) {
            number = memo[dimension].get(data);
        } else {
            data === 0 || data === 1 ? number = data : number = fib(dimension, data - 1) + fib(dimension, data - 2);
        }

        return number;
    }

    return fib('test', data);
}

console.log(fibonacciMemoizedMultiple(4));

