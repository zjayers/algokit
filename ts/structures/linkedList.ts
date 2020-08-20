/**
 * Class for constructing nodes for use inside of linked lists
 */
class Node {
    /**
     * Node constructor
     * @param {*} value - The value to store in the current node
     * @param {Node} next - A reference to the next node in the chain
     */
    constructor(public value: any, public next: Node = null) {}
}

/**
 * Class for constructing linked lists from nodes
 */
class LinkedList {
    private size: number = 0;

    /**
     * Linked List constructor
     * @param {Node} head - The node to receive the head pointer of the linked list
     */
    constructor(public head: Node = null) {}

    /**
     * Get the current size of the linked list
     * @returns {number} - The current size of the linked list
     */
    public getSize(): number {
        return this.size;
    }

    /**
     * Insert a new head node into the linked list
     * Pass the current head as the new heads "next" pointer
     * @param {*} value - The value to store in the new node
     */
    public insertHead(value: any): void {
        this.head = new Node(value, this.head);
        this.size++;
    }

    /**
     * Remove the current head node from the linked list and return it
     * @returns {Node} - The removed head node of the linked list
     */
    public removeHead(): Node {
        if (!this.head) {
            return null;
        }

        const removedHead = this.head;
        this.head = this.head.next;
        this.size--;
        return removedHead;
    }

    /**
     * Returns the node at the current head position of the linked list
     * @returns {Node} - The current head node of the linked list
     */
    public getHead(): Node {
        return this.head;
    }

    /**
     * Insert a new tail node to the linked list
     * @param {*} value - The value to insert as a node at the end of the linked list
     */
    public insertTail(value: any): void {
        const newNode = new Node(value, null);
        const tail = this.getTail();

        if (tail) {
            tail.next = newNode;
        } else {
            this.head = newNode;
        }

        this.size++;
    }

    /**
     * Remove the node at the tail fo the linked list
     * @returns {Node} - The removed tail node of the linked list
     */
    public removeTail(): Node {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        let previous = null;

        while (node) {
            if (!node.next) {
                const removedNode = node;
                node = null;
                previous.next = null;
                this.size--;
                return removedNode;
            }

            previous = node;
            node = node.next;
        }
    }

    /**
     * Get the current tail of the linked list
     * @returns {Node} - The current tail node of the linked list
     */
    public getTail(): Node {
        if (!this.head) {
            return null;
        }

        let node = this.head;

        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }

    /**
     * Get a node at a particular index position in a linked list
     * @param {number} position - The indexed position of the node in the linked list
     * @returns {Node} - The node at the particular index
     */
    public getAt(position: number): Node {
        if (position >= this.size || position < 0) {
            return null;
        }

        let node = this.head;
        let index = 0;
        while (node.next) {
            if (index === position) {
                return node;
            }

            index++;
            node = node.next;
        }
    }

    /**
     * Remove a node at a particular index position in a linked list
     * @param {number} position - The indexed position of the node in the linked list
     * @returns {Node} - The node at the particular index
     */
    public removeAt(position: number): Node {
        const prevNode = this.getAt(position - 1);
        const node = prevNode.next;
        prevNode.next = node.next;
        this.size--;
        return node;
    }

    /**
     * Insert a node at a particular index position in a linked list
     * @param {number} position - The indexed position of the node in the linked list
     * @param {*} value - The value to store at the particular index in the linked list
     */
    public insertAt(position: number, value: any): void {
        const prevNode = this.getAt(position - 1);
        prevNode.next = new Node(value, prevNode.next);
        this.size++;
    }

    /**
     * Check if the linked list contains a target value
     * @param {*} target - The value to search for in the linked list
     */
    public includes(target: any): number {
        if (!this.head) {
            return -1;
        }

        let node = this.head;
        let counter = 0;
        while (node) {
            if (node.value === target) {
                return counter;
            }

            counter++;
            node = node.next;
        }

        return -1;
    }

    /**
     * Clear the entire linked list
     * Sets the head pointer to null so the garbage collector can remove the linked list from memory
     */
    public clear(): void {
        this.head = null;
        this.size = 0;
    }

    /**
     * For each implementation for a linked list
     * @param {Function} fn - The callback function to be run on each node
     */
    public forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    /**
     * Iterator implementation for the linked list
     * Allows use of For-Of loops
     */
    // @ts-ignore
    public *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

export { LinkedList };
