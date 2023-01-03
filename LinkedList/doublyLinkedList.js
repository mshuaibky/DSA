class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev || null;
        this.next = next || null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add a new node with the given value to the head of the list
    addToHead(value) {
        const newNode = new Node(value, null, this.head);
        if (this.head)
            this.head.prev = newNode;
        else
            this.tail = newNode;
        this.head = newNode;
    }

    // Add a new node with the given value to the tail of the list
    addToTail(value) {
        const newNode = new Node(value, this.tail, null);
        if (this.tail)
            this.tail.next = newNode;
        else
            this.head = newNode;
        this.tail = newNode;
    }
    // Remove the head node from the list
    removeHead() {
        if (!this.head)
            return null;
        const value = this.head.value;
        this.head = this.head.next;
        if (this.head)
            this.head.prev = null;
        else
            this.tail = null;
        return value;
    }
    // Remove the tail node from the list
    removeTail() {
        if (!this.tail)
            return null;
        const value = this.tail.value;
        this.tail = this.tail.prev;
        if (this.tail)
            this.tail.next = null;
        else
            this.head = null;
        return value;
    }
    // Search the list for a node with the given value
    search(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value)
                return currentNode.value;
            currentNode = currentNode.next;
        }
        return null;
    }
    // Update the value of the first node with the given value
    update(oldValue, newValue) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === oldValue) {
                currentNode.value = newValue;
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }
    // Remove the first node with the given value from the list
    remove(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                if (currentNode.prev) currentNode.prev.next = currentNode.next;
                else this.head = currentNode.next;
                if (currentNode.next) currentNode.next.prev = currentNode.prev;
                else this.tail = currentNode.prev;
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    };

    // Print the list in forward order
    printForward() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    // Print the list in reverse order
    printReverse() {
        let currentNode = this.tail;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.prev;
        }
    }
}



let ll = new DoublyLinkedList()

ll.addToHead(30)
ll.addToHead(20)
ll.addToHead(10)

ll.printForward()