class Node {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }
}
class linkedList {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    append (value) {
        const node = new Node(value, this.head);
        this.head = node;
        this.size++;
    }
    prepend (value) {
        let node = new Node(value);
        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    print () {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
    length () {
        console.log(this.size);
    }
    Head () {
        console.log(this.head.value);
    }
    tail () {
        let current = this.head;
        while (current && current.next) {
            current = current.next;
        }
        console.log(current.value);
    }
    atIdx (index) {
        let current = this.head;
        for (let i = 0;i < index;i++) {
            current = current.next;
        }
        console.log(current.value);
    }
    pop () {
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
        console.log('pop() :', current.value);
    }
}
const ll = new linkedList();
ll.append(1);
ll.append(2);
ll.pop();
ll.append(3);
ll.prepend(4);
ll.print();
ll.length();
ll.Head();
ll.tail();
ll.atIdx(1);
