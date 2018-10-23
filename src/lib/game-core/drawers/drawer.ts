import {GameObj} from '../objects/game-obj';
import {Game2} from '../game-2';


export abstract class Drawer<ParentGameObjectType extends GameObj> {

  public gObj: ParentGameObjectType;

  abstract draw(): void;

  // Lifecycle hooks
  public onAddIntoGame(game: Game2): void { }
  public onRemovingFromGame(): void { }

}
