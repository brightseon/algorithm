function Node(data, next) {
    this.data = data;
    this.next = next || null;
}

function push(head, data) {
    return new Node(data, head);
}

function buildOneTwoThree() {
    return new Node(1, new Node(2, new Node(3)));
}

console.log(push(null, 1).data);
console.log(push(null, 1).next);
console.log(push(new Node(1), 2).data);
console.log(push(new Node(1), 2).next.data);

console.log(buildOneTwoThree().data);
console.log(buildOneTwoThree().next.data);
console.log(buildOneTwoThree().next.next.data);
console.log(buildOneTwoThree().next.next.next);
