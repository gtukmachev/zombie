export class TimeCounter {

  lastActionTimeMillis: number = 0; // in miliseconds
  actionPeriodMillis: number = 0; // in miliseconds
  lastCheckingMoment: number = 0;

  lastDuration: number = 0;

  constructor (actionPeriodMillis: number) {
    this.lastActionTimeMillis = 0;
    this.actionPeriodMillis = actionPeriodMillis;
  }


  public isItTime(): boolean {
    //todo: try to replace 'new Date().getTime()' with a construction without a new object creation
    //this.lastCheckingMoment = new Date().getTime();
    this.lastCheckingMoment = Date.now();
    return (this.lastActionTimeMillis + this.actionPeriodMillis) < this.lastCheckingMoment;
  }

  public fixLastChecking() {
    this.lastDuration = this.lastCheckingMoment - this.lastActionTimeMillis;
    this.lastActionTimeMillis = this.lastCheckingMoment;
  }

  public startFromNow() {
    this.lastDuration = 0;
    //todo: try to replace 'new Date().getTime()' with a construction without a new object creation
    //this.lastActionTimeMillis = new Date().getTime();
    this.lastCheckingMoment = Date.now();

  }

}
