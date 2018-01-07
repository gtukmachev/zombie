import {AbstractPhysicMover} from './abstract-phisic-mover';
import {GameObj} from '../objects/game-obj';
import {Vector} from '../../vector';


export class FollowerMover extends AbstractPhysicMover {

  public targetObject: GameObj;


  constructor(targetObject: GameObj) {
    super();
    this.targetObject = targetObject;
  }


  targetPoint(): Vector {
    return (this.targetObject) ? this.targetObject.p : null;
  }

}
