import {Mover} from './mover';
import {Pos} from '../../position';

export abstract class AbstractPhisicMover extends Mover {

  public move(): void {



  }

  abstract targetPoint(): Pos;

}
