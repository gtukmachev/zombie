import {GameObj} from '../objects/game-obj';
import {Game2} from '../../game-2';


export abstract class Drawer {

  public gObj: GameObj;

  abstract draw(): void;

  // Lifecycle hooks
  public onAddIntoGame(game: Game2): void { }
  public onRemovingFromGame(): void { }

}
