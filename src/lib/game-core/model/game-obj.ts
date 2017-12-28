import {Drawer} from './drawer';
import {Mover} from './movers/mover';
import {Pos} from '../position';
import {AngleType} from '../game-object';
import {Game} from '../game';


export class GameObj {

  private _drawer: Drawer; get drawer(): Drawer { return this._drawer; }
  private _mover: Mover;   get mover(): Mover { return this._mover; }

  public p:       Pos;     // the current position of this object
  public pBefore: Pos;     // a position of this object which was in the beginning of a current game turn

  public speedMax: number = 0;                          // maximum possible speed (length of speedVector) for this object
  public speed: number = 0;                             // movement speed (in pixels per game turn)
  public speedVector: Pos = new Pos(1,0);          // movement vector speed (length = speed )
  public directionVector: Pos = new Pos(1,0);      // direction vector (length = 1)
  public eyeDirectionVector: Pos = new Pos(1,0);   // direction vector (length = 1)

  public angleType: AngleType = AngleType.ON_MOVEMET;
  public feetInBottom = true;

  public scale: number = 1;


  constructor(drawer: Drawer, mover: Mover) {
    this._drawer = drawer;  this._drawer.gObj = this;
    this._mover = mover;    this._mover.gObj = this;
  }


  // Lifecycle hooks
  public onAddIntoGame(game: Game): void {
    if (this._drawer) this._drawer.onAddIntoGame(game);
    if (this._mover) this._mover.onAddIntoGame(game);
  }

  public onRemovingFromGame(): void {
    if (this._drawer) this._drawer.onRemovingFromGame();
    if (this._mover) this._mover.onRemovingFromGame();
  }


}
