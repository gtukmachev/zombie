import {GameObject} from './game-object';

export class ManagerGameObject extends GameObject {

  public isDrawable: boolean = false;

  constructor () {
    super(0, 0);
  }


  draw (): void { }

  beforeTurn (): void { }

  turn (): void { }

  afterTurn (): void { }


  protected initMatrixLocation(): void { } // disabling matrix indexing for this object
  protected updateMatrixLoaction(): void { } // disabling matrix indexing for this object

}
