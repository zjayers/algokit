/**
 * Stack Data Structure
 * New items are added to the end of the stack
 * Retrieved items are removed from the beginning of the stack
 */
class Stack {
    /**
     * Data Store
     * @private {any[]} - Data store for the stack contents
     */
    private contents = [];

    /**
     * Adds an item to the end of the stack
     * @param {any} record - The data to add to the stack
     */
    public push(record: any): void {
        this.contents.push(record);
    }

    /**
     * Removes the next item in the stack
     * @returns {any} - Returns the next item in the stack
     */
    public pop(): any {
        return this.contents.pop();
    }

    /**
     * View the next item in the stack
     * @returns {any} - Returns the next item in the que
     */
    public peek(): any {
        return this.contents[this.contents.length - 1];
    }

    /**
     * Weave the current stack with another stack
     * @param {any[]} stackToWeave - The stack to weave with the current stack
     * @returns {Stack} - Returns this stack with the contents updated to reflect the new weaved contents
     */
    public weaveWith(stackToWeave: Stack): Stack {
        const weavedContents: any[] = [];
        const src1 = this;
        const src2 = stackToWeave;

        while (src1.peek() || src2.peek()) {
            src1.peek() && weavedContents.push(src1.pop());
            src2.peek() && weavedContents.push(src2.pop());
        }

        this.contents = weavedContents;
        return this;
    }
}

export { Stack };
