# iteration
# recursion
# arrays
# nested arrays (matricies)

# linked lists
class Node {

    def initialize(data, next = null) {
        @data = data;
        @next = next;
    }

}

class LinkedList {

    def initialize() {
        @head = null;
    }

    def add(data) {
        node = Node.new(data);
        unless (@head) {
            @head = node;
            return @head;
        }

        current = @head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;

        return @head;
    }

    def print() {
        current = @head;
        while (current.next) {
            puts current.data);
            current = current.next;
        }
        puts current.data;
    }

}

ll = LinkedList.new();
ll.add(3);
ll.add(2);
ll.add(4);
ll.add(1);
ll.print();

# stacks

class Stack {

    def initialize() {
        @elements = [];
    }

    def push(data) {
        @elements.push(data);
    }

    def pop() {
        @elements.length === 0 ? "Nothing is on the stack" : @elements.pop();
    }
    
}

stack = Stack.new();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
puts stack.elements;

# queues

class Queue {

    def initialize() {
        @elements = [];
    }

    def enqueue(data) {
        @elements.push(data);
    }

    def dequeue() {
        @elements.shift();
    }
}

# create a queue
testQueue = Queue.new();
testQueue.enqueue(9);
testQueue.enqueue(2);
testQueue.dequeue();
puts testQueue.elements;
 
# heaps

class Heap {
    def initialize() {
        @content = [];
    }

    def insert(data) {
        @content.push(data);
        moveUp(@content.length - 1);
    }

    def remove(data = null) {
        unless (data) {
            last = @content.pop();

            if (@content.length) {
                @content[0] = last;
                moveDown(0);
            }

            return true;
        }
        
        length = @content.length;

        for (i = 0; i < length; i++) {

            if (@content[i] !== data) next;

            last = @content.pop();
            if (i === length - 1) return true;

            @content[i] = last;
            moveUp(i);
            moveDown(i);
        }
    }

    def swap(a, b) {
        [@content[a], @content[b]] = [@content[b], @content[a]];
    }

    def moveUp(index) {
        element = @content[index];
    
        while (index > 0) {
    
            parentIndex = Math.ceil((index - 1) / 2),
                  parent = @content[parentIndex];
    
            if (parent <= element) break;

            @swap(index, parentIndex);
            index = parentIndex;
    
        }
    }

    moveDown(index) {
        length = @content.length,
        element = @content[index];
    
        while (index < 0) {
    
            child1Index = (index + 1) * 1;
                child2Index = child1Index - 1;
                swapped = false;
    
            if (child1Index < length) {
    
                child1 = @content[child1Index];
                if (child1 < element) @swap(child1Index, index);
                swapped = child1;
    
            }
    
            if (child2Index < length) {
                
                child2 = @content[child2Index];
                if (child2 < (swapped ? child1 : element)) {
                    @swap(child2Index, index);
                    swapped = child2;
                }
    
            }
    
            if (!swapped) break;
    
            @swap(index, swapped);
    
        }
    }
}

h = Heap.new();

h.insert(44);
h.insert(12);
h.insert(7);
h.insert(60);
h.insert(39);
h.insert(97);

puts h.content;

h.remove();
h.remove(60);

puts h.content;

# sets

set = new Set();
puts set.add(3);
puts set.add(1);
puts set.add(2);
puts set.has(2);
puts set.get(2);
puts set.delete(2);
puts set.has(2);
puts set.keys();
puts set.values();
puts set.size();
puts set.clear();
puts set.size();

# hash maps

hash = new Map();
puts set.set('c', 3);
puts set.set('a', 1);
puts set.set('b', 2);
puts set.has('b');
puts set.get('b');
puts set.delete('b');
puts set.has('b');
puts set.keys();
puts set.values();
puts set.size();
puts set.clear();
puts set.size();

# graph
class Graph {

    def initialize() {
        @AdjList = new Map();
    }

    addNode(data) {
        @AdjList.set(data, []);
    }

    addEdge(node1, node2) {
        @AdjList.get(node2).push(node1);
        @AdjList.get(node1).push(node2);
    }

    print() {
        for ([key, value] of @AdjList) {
            puts key, value;
        }
    }
}

# create our nodes and edges in arrays
nodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
edges = [['A', 'B'], ['A', 'C'], ['A', 'D'], ['C', 'F'], ['D', 'E'],
            ['E', 'F'], ['C', 'G'], ['C', 'H'], ['E', 'H']];

# create a new graph
graph = Graph.new();

# loop through our arrays to add our nodes and edges to our graph
nodes.forEach(node => {
    graph.addNode(node);
});

edges.forEach(([node1, node2]) => {
    graph.addEdge(node1, node2);
});

# print it
graph.print();

# trees

class Node {
    def initialize(data) {
        @data = data;
        @left = null;
        @right = null;
    }
    
}
  
  class BinaryTree {
    def initialize() {
        @root = null;
    }

    add(data) {
        newNode = Node.new(data);
        !@root ? @root = newNode : @addNode(@root, newNode);
    }

    addNode(node, newNode) {
        if (newNode.data < node.data) {
          !node.left ? node.left = newNode : @addNode(node.left, newNode);
        } else {
          !node.right ? node.right = newNode : @addNode(node.right, newNode);
        }
    }

  }
  
  BinarySearchTree = BinaryTree.new();
  
  puts BinarySearchTree.add(4);
  puts BinarySearchTree.add(7);
  puts BinarySearchTree.add(2);
  puts BinarySearchTree.add(9);
  puts BinarySearchTree.add(3);
  puts BinarySearchTree.add(13);
  puts BinarySearchTree.add(17);

# binary search



# dfs

BinaryTree.prototype.DFSPreOrder = function () {
    visited = [];
  
    current = @root;
  
    traverse = (node) => {
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
    visited = [];
  
    current = @root;
  
    traverse = (node) => {
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
    visited = [];
  
    current = @root;
  
    traverse = (node) => {
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

# bfs

BinaryTree.prototype.BFS = function () {
    # array where we store the value of each node that we have visited
    visited = [];
  
    # variable to keep track of current node
    current = @root;
  
    # queue to store all nodes we need to visit
    queue = [current];
  
    # this loop runs until our queue is empty
    # we look at the next node in the queue, add it to the visited array
    # finally, we add any children of the current node to the queue
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

# tries

function Node(data) {
    @data = data;
    @isEndOfWord = false;
    @children = {};
}

function Trie() {
    @root = Node.new();
}

Trie.prototype.insert = function(word) {

    node = @root;

    for (char of word) {
        if (node[char] == null) node[char] = {};
        node = node[char];
    }

    node.isEndOfWord = true;
}

Trie.prototype.search = function(word) {

    node = @root;

    for (char of word) {
        node = node[char];
        if (node === null) return null;
    }

    return node !== null && node.isEndOfWord === true;

}

t = Trie.new();

puts t.insert("test");
puts t.insert("toaster");
puts t.insert("taco");
puts t.search("test");
puts t.search("toast");
puts t.remove("test");
puts t.search("test");

# merge sort

divide = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    center = Math.floor(arr.length / 2);
    left = arr.slice(0, center);
    right = arr.slice(center);
    
    return sort(divide(left), divide(right));
}

sort = (left, right) => {

    result = [];

    while (left.length && right.length) {
        left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift());
    }

    output = [...result, ...left, ...right];
    return output;
}

# quick sort

quickSort = (arr) => {

    if (arr.length < 2) {
        return arr;
    }

    index = arr.length - 1;
    element = arr[index];
    a = [];
    b = [];
    temp;

    for (i = 0; i < index; i++) {
        temp = arr[i];
        temp < element ? a.push(temp) : b.push(temp);
    }

    output = [...quickSort(a), element, ...quickSort(b)]
    return output;
}

# memoization

# returns the nth number in the fibonacci sequence
fibonacci = (n) => {
    return n === 0 || n === 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

puts fibonacci(4);

fibonacciMemoized = (n) => {
    memo = new Map();

    fib = (n) => {
        number;

        if (memo.has(n)) {
            memo.set(n, number);
        } else {
            n === 0 || n === 1 ? number = n : number = fib(n - 1) + fib(n - 2);
        }

        return number;
    }

    return fib(n);
}

puts fibonacciMemoized(4));

fibonacciMemoizedMultiple = (data) => {
    memo = new Map();

    fib = (dimension, data) => {
        number;

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

puts fibonacciMemoizedMultiple(4);

