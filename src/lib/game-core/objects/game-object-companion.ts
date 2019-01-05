import {GameObj} from './game-obj';
import {Game2} from '../game-2';

export abstract class GameObjectCompanion<ParentGameObjectType extends GameObj> {
  public gObj: ParentGameObjectType;

  // Lifecycle hooks
  public onAddIntoGame(game: Game2): void { }
  public onRemovingFromGame(): void { }
}
