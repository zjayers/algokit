/**
 * Class Representing a performance Counter
 * Functionality:
 * - Increment the execution counter and report counts to the console
 */
class Counter {
  private executions: number = 0;

  /**
   * Sets the execution count of the counter
   * @param  {number} [executionCount] - The number to set the execution count to - Defaults to 0
   */
  public setExecutionCount(executionCount?: number): void {
    this.executions = executionCount || 0;
  }

  /**
   * Increments the execution count stored by 1
   */
  public tickExecutionCount(): void {
    this.executions++;
  }

  /**
   * Returns the execution count from the monitor
   * @returns {number} The number of times the monitor logged an execution count
   */
  public getExecutionCount(): number {
    return this.executions;
  }

  /**
   * Reports the execution count to the console
   * @param {string} functionHandler - The name to display in the console (provided by the User) of the function context
   * @example reportExecutionCount('MyCustomFunction')
   */
  public reportExecutionCount(functionHandler: string): void {
    console.log(`- ${functionHandler}: ${this.executions} Executions`);
  }
}

export { Counter };
