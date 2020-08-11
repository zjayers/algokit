import { performance } from "perf_hooks";

/**
 * Class Representing a performance Monitor
 * Functionality:
 * - Start the time monitor to take a snapshot of the current DateTime [or an input DateTime].
 * - Stop the time monitor to report the time elapsed since the monitor was started (in ms).
 */
class Monitor {
  private start: number;
  private end: number;
  private reading: number;

  /**
   * Start The performance Monitor
   * @param {number} [startDate=Date.now()] - The date to start measurement
   * @returns {void}
   */
  public startMonitor(startDate?: number): void {
    this.start = startDate || performance.now();
  }

  /***
   * Stop the performance monitor and return the output time between starting and stopping the monitor
   * @returns {number} - The amount of milliseconds the monitor was stopped minus the DateTime the monitor was started.
   */
  public stopMonitor(): number {
    this.end = performance.now();
    this.reading = this.end - this.start;
    this.end = null;
    this.start = null;
    console.log(this.reading);
    return this.reading;
  }
}

export { Monitor };
