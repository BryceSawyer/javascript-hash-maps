const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if (currentHead) {
            this.head.setNextNode(currentHead);
        }
    }

    printList() {
        let node = this.head;
        let output = '<head>\n';
        while (node !== null) {
            output += `${JSON.stringify(node.data)},\n `;
            node = node.getNextNode();
        }
        output += `<tail>`;
        console.log(output);
    }
}

module.exports = LinkedList;
