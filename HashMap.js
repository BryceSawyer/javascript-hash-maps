// JAVASCRIPT: HASH MAP

// Hash maps are data structures that serve as efficient key-value stores. 
// They are capable of assigning and retrieving data in the fastest way possible. 
// This is because the underlying data structure that hash maps use is an array.
// A value is stored at an array index determined by plugging the key into a hash function. 
// Because we always know exactly where to find values in a hash map, 
// we have constant access to any of the values it contains.
// This quick access to values makes a hash map a good choice of data structure whenever we need to store a lot of values but need fast look-up time.

// Purpose: gain a deeper understanding of the data structure, 
// This is not a production-quality data structure.

const LinkedList = require('./LinkedList');
const Node = require('./Node');

// HashMap Class Constructor()
class HashMap {
    // Constructor initializes a hash map with a specified size (default is 0).
    constructor(size = 0) {
        // The 'hashmap' property is an array of linked lists, each initialized as an empty linked list.
        this.hashmap = new Array(size)
            .fill(null)
            .map(() => new LinkedList())
    }

    // .hash() method:
    // Generates an index in the hash map’s internal array based on the given key.
    hash(key) {
        // initialize hashCode to 0
        let hashCode = 0;
        // for each character in the key
        for (let i = 0; i < key.length; i++) {
            // adds the sum of the current character code value and hashCode to hashCode
            hashCode = (hashCode * 31) + key.charCodeAt(i);
        }
        // using modular arithmetic to return the remainder of dividing hashCode by the length of the hash map.
        return hashCode % this.hashmap.length;
    }

    //.assign() method:
    // Stores a key-value pair at a particular index in the hash map.
    assign(key, value) {
        // Calculates the array index using the hash function.
        const arrayIndex = this.hash(key);
        // Retrieves the linked list at the calculated index.
        const linkedList = this.hashmap[arrayIndex];
        // If the linked list is empty, adds the key-value pair to the head
        if (!linkedList.head) {
            linkedList.addToHead({ key, value });
            return;
        }
        // If the linked list is not empty, iterates through it to find the key
        let node = linkedList.head;
        while (node) {
            // If the key is found, updates the value.
            if (node.data.key === key) {
                node.data = { key, value };
                break;
            }
            // If the end of the linked list is reached, adds a new node with the key-value pair.
            if (!node.getNextNode()) {
                node.setNextNode(new Node({ key, value }));
                break;
            }
            // Otherwise moves to the next node in the linked list.
            node = node.getNextNode();
        }
    }

    //.retrieve() method:
    // Retrieves the value associated with the given key from the hash map.
    retrieve(key) {
        // Calculates the array index using the hash function.
        const arrayIndex = this.hash(key);
        // Retrieves the linked list at the calculated index.
        let node = this.hashmap[arrayIndex].head
        // Iterates through the linked list to find the key and return its associated value.
        while (node) {
            // If the key is found, returns the value.
            if (node.data.key === key) {
                return node.data.value;
            }
            // Otherwise moves to the next node in the linked list.
            node = node.getNextNode();
        }
        // Returns null if the key is not found.
        return null;
    }

    printHashMap() {
        console.log('HashMap Contents:');
        this.hashmap.forEach((linkedList, index) => {
            console.log(`\nIndex ${index}:`);
            linkedList.printList();
        });
    }
}

module.exports = HashMap;