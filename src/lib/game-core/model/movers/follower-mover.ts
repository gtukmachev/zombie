import {AbstractPhisicMover} from './abstract-phisic-mover';
import {GameObj} from '../game-obj';
import {Pos} from '../../position';


export class FollowerMover extends AbstractPhisicMover {

  public targetObject: GameObj;


  constructor(targetObject: GameObj) {
    super();
    this.targetObject = targetObject;
  }


  targetPoint(): Pos {
    return this.targetObject.p;
  }

}
