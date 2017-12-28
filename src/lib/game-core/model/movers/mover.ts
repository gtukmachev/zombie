import {GameObj} from '../game-obj';
import {Game} from '../../game';

export abstract class Mover {

  public gObj: GameObj;

  abstract move(): void;

  // Lifecycle hooks
  public onAddIntoGame(game: Game): void { }
  public onRemovingFromGame(): void { }

}
