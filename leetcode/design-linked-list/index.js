class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index > this.size - 1) return -1;

    let node = this.head;
    for (let i = 0; i < index; i++) {
        node = node.next;
    }

    return node.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const node = new Node(val);

    node.next = this.head;
    this.head = node;
    this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    this.addAtIndex(this.size, val);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index === 0) {
        this.addAtHead(val);

        return;
    }
    if (index > this.size) return;

    const node = new Node(val);
    let findNode = this.head;

    for (let i = 0; i < index - 1; i++) {
        findNode = findNode.next;
    }

    node.next = findNode.next;
    findNode.next = node;
    this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index >= this.size) return;
    if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return;
    }

    let node = this.head;

    for (let i = 0; i < index - 1; i++) {
        node = node.next;
    }

    if (!node?.next) this.tail = node;
    if (node) node.next = node?.next?.next || null;
    this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const obj = new MyLinkedList();

console.log(obj.addAtHead(1));
console.log(obj.addAtTail(3));
console.log(obj.addAtIndex(1, 2));
console.log(obj.get(1));
console.log(obj.deleteAtIndex(1));
console.log(obj.get(1));
console.log(obj.deleteAtIndex(0));
console.log(obj.deleteAtIndex(0));
console.log(obj);
