import { performance } from "perf_hooks";

/**
 * Class Representing a performance Timer
 * Functionality:
 * - Start the time monitor to take a snapshot of the current DateTime [or an input DateTime].
 * - Stop the time monitor to report the time elapsed since the monitor was started (in ms).
 */
class Timer {
  private start: number;
  private end: number;
  private reading: number;

  /**
   * Start The performance Timer
   * @param {number} [startDate = Date.now()] - The date to start measurement
   * @returns {void}
   */
  public startTimer(startDate?: number): void {
    this.start = startDate || performance.now();
  }

  /***
   * Stop the performance monitor and return the output time between starting and stopping the monitor
   * @param {boolean} resetTimerAfterExecution - Reset the timer after stopping
   * @returns {number} - The amount of milliseconds the monitor was stopped minus the DateTime the monitor was started.
   */
  public stopTimer(resetTimerAfterExecution: boolean): void {
    this.end = performance.now();
    this.reading = this.end - this.start;

    if (resetTimerAfterExecution) {
      this.end = null;
      this.start = null;
    }
  }

  /**
   * Returns the timer reading from the function
   * @returns {number} - The timer reading in milliseconds
   */
  public getTimerReading(): number {
    return this.reading;
  }

  /**
   * Reports the current time reading to the console
   * @param executionContext
   * @param resetTimerAfterExecution
   */
  public reportTimerReading(
    executionContext: string,
    resetTimerAfterExecution: boolean
  ): void {
    this.stopTimer(resetTimerAfterExecution);
    console.log(`- ${executionContext}: ${this.reading} ms`);
  }
}

export { Timer };
