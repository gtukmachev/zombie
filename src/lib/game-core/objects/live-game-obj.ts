import {GameObj} from './game-obj';
import {Mover} from '../movers/mover';
import {Drawer} from '../drawers/drawer';


export class LiveGameObj extends GameObj {

  public isAlife = true;
  public helth: number;
  public maxHelth: number;
  public deadStage: number;
  public deadStages: number;

  constructor(x: number, y: number, drawer: Drawer<any>, mover: Mover<any>, helth: number, deadStages: number) {
    super(x, y, drawer, mover);
    this.maxHelth = helth;
    this.deadStages = deadStages;
    this._refreshLife();
  }

  private _refreshLife(): void {
    this.isAlife = true;
    this.helth = this.maxHelth;
    this.deadStage = this.deadStages;
  }

  public refreshLife(): void {
    this._refreshLife();
  }

  public damage(damageVal: number): void {
    if (this.isAlife && this.helth > 0) {
      this.helth -= damageVal;
      this.helth = this.helth < 0 ? 0 : this.helth;
      this.isAlife = this.helth > 0;
    }
  }

  public checkHealth() {
      if (this.isAlife) { return; }

      // todo - this animation should be timered
      this.deadStage = this.deadStage <= 0 ? 0 : (this.deadStage - 1);

      if (this.deadStage <= 0) { this.game.markForDelete(this); }

  }

  public getDeathStageK(): number {
    return this.deadStage / this.deadStages;
  }


  public beforeTurn(): void {
    super.beforeTurn();
    this.checkHealth();
  }
}
