import {GameObj} from '../objects/game-obj';
import {Game2} from '../game-2';

export abstract class Mover<ParentGameObjectType extends GameObj> {

  public gObj: ParentGameObjectType;

  abstract move(): void;

  // Lifecycle hooks
  public onAddIntoGame(game: Game2): void { }
  public onRemovingFromGame(): void { }

}
