import {Drawer} from './drawers/drawer';
import {Mover} from './movers/mover';
import {Vector} from '../vector';
import {AngleType} from '../game-object';
import {Game} from '../game';


export class GameObj {

  public game: Game;

  private _drawer: Drawer; get drawer(): Drawer { return this._drawer; }
  private _mover: Mover;   get mover(): Mover { return this._mover; }

  public p:       Vector;     // the current position of this object
  public pBefore: Vector;     // a position of this object which was in the beginning of a current game turn


  // Speed definitions
  public sValMax: number = 0;        // maximum possible speed (length of speedVector) for this object (pixels/second)
  public sVal:    number = 0;        // the current speed (length of speedVector) for this object (pixels/second)
  public s:  Vector = new Vector(0,0); // speed vector (length = sVal)
  public sd: Vector = new Vector(1,0); // "direction vector" - normalized speed (s) vector: s/sVal (length = 1)
  public aVal: number = 0; //maximum possible accelerations (pixels/second per second)
  public eye:  Vector = new Vector(1,0);  // eyes direction vector (length = 1)

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
