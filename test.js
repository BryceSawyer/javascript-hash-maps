const HashMap = require('./HashMap');

describe('HashMap', () => {
    let hashMap;

    beforeEach(() => {
        hashMap = new HashMap(5);
    });

    it('should add key-value pair to an empty hashmap', () => {
        hashMap.assign('key1', 'value1');
        const result = hashMap.retrieve('key1');
        expect(result).toBe('value1');
    });

    it('should update the value if key already exists', () => {
        hashMap.assign('key1', 'value1');
        hashMap.assign('key1', 'updatedValue');
        const result = hashMap.retrieve('key1');
        expect(result).toBe('updatedValue');
    });

    it('should add key-value pair to a non-empty hashmap', () => {
        hashMap.assign('key1', 'value1');
        hashMap.assign('key2', 'value2');
        const result1 = hashMap.retrieve('key1');
        const result2 = hashMap.retrieve('key2');
        expect(result1).toBe('value1');
        expect(result2).toBe('value2');
    });

    it('should handle collisions and add key-value pair to the linked list', () => {
        hashMap.assign('abc', 'value1');
        hashMap.assign('bca', 'value2');
        const arrayIndex = hashMap.hash('abc');
        const linkedList = hashMap.hashmap[arrayIndex];
        expect(linkedList.head.data.key).toBe('abc');
        expect(linkedList.head.next.data.key).toBe('bca');
    });

}, {testEnvironment: 'node'});