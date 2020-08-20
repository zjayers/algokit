/**
 * Queue Data Structure
 * New items are added to the end of the queue
 * Retrieved items are removed from the beginning of the queue
 */
class Queue {
    /**
     * Data Store
     * @private {any[]} - Data store for the queue contents
     */
    private contents = [];

    /**
     * Adds an item to the end of the queue
     * @param {any} record - The data to add to the queue
     */
    public enqueue(record: any): void {
        this.contents.unshift(record);
    }

    /**
     * Removes the next item in the queue
     * @returns {any} - Returns the next item in the queue
     */
    public dequeue(): any {
        return this.contents.pop();
    }

    /**
     * View the next item in the queue
     * @returns {any} - Returns the next item in the queue
     */
    public peek(): any {
        return this.contents[this.contents.length - 1];
    }

    /**
     * Weave the current queue with another queue
     * @param {any[]} queueToWeave - The queue to weave with the current queue
     * @returns {Queue} - Returns this queue with the contents updated to reflect the new weaved contents
     */
    public weaveWith(queueToWeave: Queue): Queue {
        const weavedContents: any[] = [];
        const src1 = this;
        const src2 = queueToWeave;

        while (src1.peek() || src2.peek()) {
            src1.peek() && weavedContents.unshift(src1.dequeue());
            src2.peek() && weavedContents.unshift(src2.dequeue());
        }

        this.contents = weavedContents;
        return this;
    }
}

export { Queue };
