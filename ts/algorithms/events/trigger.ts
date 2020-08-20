interface ITrigger {
    [eventName: string]: Array<Function>;
}

/**
 * Class to create custom event handlers
 */
class Trigger {
    private events: ITrigger = {};

    /**
     * Add a new event handler to the event handler store
     * @param {string} eventName - The name of the event to add to the store
     * @param {Function} callback - Callback function to be fired once the event is triggered
     */
    public on(eventName: string, callback: () => void): void {
        const event = this.events[eventName];

        if (event) {
            event.push(callback);
        } else {
            this.events[eventName] = callback;
        }
    }

    /**
     * Trigger an event handler
     * @param {string} eventName - The event to trigger
     */
    public fire(eventName: string): void {
        const event = this.events[eventName];

        if (event) {
            for (const callback of event) {
                callback();
            }
        }
    }

    /**
     * Delete an event from the event handler store
     * @param {string} eventName - The event to remove from the handler
     */
    public off(eventName: string): void {
        delete this.events[eventName];
    }
}
