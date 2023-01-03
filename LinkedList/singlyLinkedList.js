
/*==============constructing-a-Single-Node===================*/

class node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class linkedList {              //CRUD Operation in node from linked List
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Insert first

    insertFirst(data) {
        this.head = new node(data, this.head)
        this.size++;
    }

    //Print Data
    printData() {
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    //insert At last 
    insertLast(data) {
        let newNode = new node(data);
        let current;
        if (!this.head) {
            this.head = newNode
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode
        }
        this.size++;
    }
    //Insert at a position
    insertAt(data, index) {
        if (index > 0 && index > this.size) {
            return;
        }

        if (index == 0) {
            this.insertFirst(data);
            return
        }

        const newNode = new node(data);
        let current, previous;

        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current;//node before the entered index
            count++
            current = current.next;//node after the entered index
        }
        newNode.next = current;
        previous.next = newNode;
        this.size++;
    }

    //getElementAt

    getAt(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count == index) console.log(current.data);
            current = current.next;
            count++;
        }
        return false;
    }

    // Remove from an index

    removeFromIndex(index) {
        if (index > 0 && index > this.size) return;

        let current = this.head;
        let previous;
        let count = 0;

        if (index == 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    //reverse LinkedLIst

    reverse() {
        let prev = null;
        let current = this.head;

        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next
        }
        this.head = prev
    }

    // clearList

    clearList() {
        this.head = null;
        this.size = 0;
    }

    arrToList(arr) {
        this.head = new node(arr[0], this.head)
        this.size++
        let current = this.head

        for (let i = 1; i < arr.length; i++) {
            current.next = new node(arr[i])
            current = current.next;
            this.size++;
        }
    }
}

const ll = new linkedList();

// ll.insertFirst(10);
// ll.insertFirst(20);
// ll.insertFirst(30);

// ll.insertLast(1000);

// ll.insertAt(100, 3)

ll.removeFromIndex(3);

let arr = [1, 2, 3, 4, 5, 6, 7]

ll.arrToList(arr)

// console.log(ll);

ll.printData();


// ll.getAt(2);


