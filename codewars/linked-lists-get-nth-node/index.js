function Node(data) {
    this.data = data;
    this.next = null;
}

function getNth(node, index) {
    if (!node || index < 0) throw Error('');

    let n = node;

    for (let i = 0; i < index; i++) {
        n = n.next;

        if (!n) throw Error('');
    }

    return n;
}

const list = new Node(1, new Node(2, new Node(3, null)));

console.log(getNth(list, 0).data);
console.log(getNth(list, 1).data);
console.log(getNth(list, 2).data);
console.log(getNth(list, 3));
console.log(getNth(list, 100));
console.log(getNth(list, 0));
