import {Mover} from './mover';
import {Vector} from '../../vector';

export abstract class AbstractPhisicMover extends Mover {

  public move(): void {
      const target = this.targetPoint() || this.gObj.p;
      if (this.gObj.p.x === target.x && this.gObj.p.y === target.y) { //it's mean: we have to brake and stop
          if (this.gObj.sVal === 0) {
           return; // the object already on place - finish movement // todo: make 'brake' if |speed| more than 0
          }
      }
  }

  abstract targetPoint(): Vector;

}
