import {GameObj} from './game-obj';
import {Game} from '../game';


export class Drawer {

  public gObj: GameObj;

  // Lifecycle hooks
  public onAddIntoGame(game: Game): void { }
  public onRemovingFromGame(): void { }


}
