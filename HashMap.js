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
    // Constructor initializes a hash map with an initial size (default is 8) and a load factor (default is 0.75).
    constructor(initialSize = 8, loadFactor = 0.75) {
        // Number of key-value pairs in the hash map.
        this.size = 0;
        // Current capacity of the hash map's internal array.
        this.capacity = initialSize;
        // Load factor threshold that triggers resizing when exceeded.
        this.loadFactor = loadFactor;
        // The 'hashmap' property is an array of linked lists, each initialized as an empty linked list.
        this.hashmap = new Array(initialSize)
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
            // Multiply the current hash code by 31, a prime number often used in hash functions.
            // Add the current character code value of the key to the hash code.
            // Apply modular arithmetic to keep the hash code within the bounds of the hash map's capacity.
            hashCode = (hashCode * 31 + key.charCodeAt(i)) % this.capacity;
        }
        return hashCode;
    }

    //.assign() method:
    // Stores a key-value pair at a particular index in the hash map.
    assign(key, value) {
        // If key or value is invalid.
        if (!key || !value) {
            throw new Error('Invalid Key or Value');
        }
        // Calculate the array index using the hash function.
        const arrayIndex = this.hash(key);
        // Retrieve the linked list at the calculated index.
        const linkedList = this.hashmap[arrayIndex];
        
        // If the linked list is empty, 
        if (!linkedList.head) {
            // add the key-value pair to the head.
            linkedList.addToHead({ key, value });
            // increment the size;
            this.size++;
            // call .checkLoadFactor()
            this.checkLoadFactor();
            return;
        }
        // The list is not empty iterate through the linked list for possible existing key.
        let node = linkedList.head;
        while (node) {
            if (node.data.key === key) {
                node.data = { key, value };
                return;
            }
            // if there is no existing key 
            if (!node.getNextNode()) {
                node.setNextNode(new Node({ key, value }));
                this.size++;
                this.checkLoadFactor();
                return;
            }
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

    //.checkLoadFactor() method:
    // Checks if the load factor exceeds the threshold, triggering a resize if needed.
    checkLoadFactor() {
        if (this.size / this.capacity > this.loadFactor) {
            this.resize();
        }
    }

    //.resize() method:
    // Resizes the hash map by doubling its capacity and rehashing existing elements.
    resize() {
        const newCapacity = this.capacity * 2;
        this.capacity = newCapacity;
        const newHashmap = new Array(newCapacity).fill(null).map(() => new LinkedList());
        // Rehash existing elements and add them to the new linked lists.
        this.hashmap.forEach(linkedList => {
            let node = linkedList.head;
            while (node) {
                const newHash = this.hash(node.data.key);
                newHashmap[newHash].addToHead(node.data)
                node = node.getNextNode();
            }
        })
        // Update the hash map with the resized array of linked lists.
        this.hashmap = newHashmap;
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