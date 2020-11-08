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
// queues
// heaps
// sets
// hash maps
// trees
// binary search
// dfs
// bfs
// tries
// merge sort
// quick sort
// memoization

// combine all past blogs into this post