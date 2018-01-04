import {GameObj} from '../game-obj';
import {Game} from '../../game';


export abstract class Drawer {

  public gObj: GameObj;

  abstract draw(): void;

  // Lifecycle hooks
  public onAddIntoGame(game: Game): void { }
  public onRemovingFromGame(): void { }

}
