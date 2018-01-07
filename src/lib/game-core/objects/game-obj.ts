import {Drawer} from '../drawers/drawer';
import {Mover} from '../movers/mover';
import {Vector} from '../vector';
import {Game2} from '../game-2';
import {ObjectFrame} from '../object-frame';


export class GameObj {

  public id: number;

  public game: Game2;

  private _drawer: Drawer; get drawer(): Drawer { return this._drawer; }
  private _mover: Mover;   get mover(): Mover { return this._mover; }

  // position
  public p:       Vector;     // the current position of this object
  public pBefore: Vector;     // a position of this object which was in the beginning of a current game turn


  //size
  public scale: number = 1;
  public outerFrame: ObjectFrame; // outer frame - is a square frame where image of thr current object is placed
  private _r: number; // default size (radius) of this object in pixels
      get r(): number { return this._r; }
      set r(val: number) {
          this._r = val;
          this.outerFrame = new ObjectFrame(-val, -val, 2*val, 2*val);
      }

  // Speed definitions
  public sValMax: number = 0;        // maximum possible speed (length of speedVector) for this object (pixels/second)
  public sVal:    number = 0;        // the current speed (length of speedVector) for this object (pixels/second)
  public s:  Vector = new Vector(0,0); // speed vector (length = sVal)
  public sd: Vector = new Vector(1,0); // "direction vector" - normalized speed (s) vector: s/sVal (length = 1)

  // Acceleration definitions
  public aValMax: number = 0; //maximum possible acceleration (pixels/second per second)
  public aVal:    number = 0; //the current accelerations value (pixels/second per second)
  public a:  Vector = new Vector(0,0); // the current accelerations vector (length = aVal)
  public ad: Vector = new Vector(0,0); // "the current accelerations direction vector" - normalized accelerations (a) vector: a/aVal (length = 1)

  // Brake definitions
  public bValMax: number = 0; //maximum possible brake acceleration (pixels/second per second)
  public bVal:    number = 0; //the current brake acceleration value (pixels/second per second)
  // a brake vector make no sense (it hidden inside "a" vector)
  // direction of the brake vector is always "-sd vector" (negative speed direction)

  public eye:  Vector = new Vector(1,0);  // eyes direction vector (length = 1)

  public angleType: AngleType = AngleType.ON_MOVEMET;
  public feetInBottom = true;


  constructor(x: number, y: number, drawer: Drawer, mover: Mover) {
    this.p = new Vector(x, y);
    this.pBefore = new Vector(x, y);
    this._drawer = drawer;  if (this._drawer) this._drawer.gObj = this;
    this._mover = mover;    if (this._mover) this._mover.gObj = this;
  }


  // Lifecycle hook: on adding into a game
  public onAddIntoGame(game: Game2): void {
    this.outerFrame = this.outerFrame || new ObjectFrame(-this._r, -this._r, this._r*2, this._r*2);
    if (this._drawer) this._drawer.onAddIntoGame(game);
    if (this._mover) this._mover.onAddIntoGame(game);
  }

  // Lifecycle hook: on removing from a game
  public onRemovingFromGame(): void {
    if (this._drawer) this._drawer.onRemovingFromGame();
    if (this._mover) this._mover.onRemovingFromGame();
  }

  // Game step cycle hooks:
  public beforeTurn(): void { }; // before all automatic actions;
  public afterTurn(): void  { }; // after all automatic actions;


  // movement helper methods
  setDirectionOn_xy(targetX: number, targetY: number): void {
    const vectorX = targetX - this.p.x;
    const vectorY = targetY - this.p.y;

    if (vectorX === 0 && vectorY === 0 ) {
      return;
    }

    const vectorLen = Math.sqrt( vectorX*vectorX + vectorY*vectorY );

    this.sd.x = ( vectorX / vectorLen );
    this.sd.y = ( vectorY / vectorLen );

    this.s.x = this.sd.x * this.sVal;
    this.s.y = this.sd.y * this.sVal;
  }

  setDirectionOn(targetPosition: Vector): void {
    this.setDirectionOn_xy(targetPosition.x, targetPosition.y)
  }

  setDirection( normalizedVector: Vector ): void { // the vector length should be = 1

    this.sd.x = normalizedVector.x;
    this.sd.y = normalizedVector.y;

    this.s.x = this.sd.x * this.sVal;
    this.s.y = this.sd.y * this.sVal;
  }

  setEyeDirectionOn(p: Vector): void {
    this.setEyeDirectionOn_xy(p.x, p.y)
  }

  setEyeDirectionOn_xy(x: number, y: number): void {
    const vectorX = x - this.p.x;
    const vectorY = y - this.p.y;

    const vectorLen = Math.sqrt( vectorX*vectorX + vectorY*vectorY );

    this.eye.x = ( vectorX / vectorLen );
    this.eye.y = ( vectorY / vectorLen );
  }

  public moveOn(p: Vector) {
    this.p.x = p.x;
    this.p.y = p.y;
  }

  public moveOn_xy(x: number, y: number) {
    this.p.x = x;
    this.p.y = y;
  }


  public moveOnSafe(x: number, y: number) {
    moveTo(x, y);
    this.moveReturnOnField();
    //this.updateMatrixLocation();
  }

  public moveForward() {
    this.p.x += this.s.x;
    this.p.y += this.s.y;
    //this.updateMatrixLocation();
  }

  public moveForwardSafe() {
    this.p.x += this.s.x;
    this.p.y += this.s.y;
    this.moveReturnOnField();
    //this.updateMatrixLocation();
  }

/*
  protected updateMatrixLocation(): void {
    this.pNext.setAsOffsetOf(this.p, this.speedVector);
    this.game.matrix.update(this);

  }

  protected initMatrixLocation(): void {
    this.pNext = this.p.copy();
    if (this.speedVector && (Math.abs(this.speedVector.x) + Math.abs(this.speedVector.y))> 0 ) {
      this.pNext.setAsOffsetOf(this.p, this.speedVector);
    }
    this.game.matrix.update(this);
  }
*/

  public moveReturnOnField() {
    if (this.p.x < 0) {this.p.x = 0; } else {if (this.p.x > this.game.worldSize.x) { this.p.x = this.game.worldSize.x; }}
    if (this.p.y < 0) {this.p.y = 0; } else {if (this.p.y > this.game.worldSize.y) { this.p.y = this.game.worldSize.y; }}
  }

  public isOutOfField() {
    return this.p.x < 0 || this.p.x > this.game.worldSize.x || this.p.y < 0 || this.p.y > this.game.worldSize.y;
  }


}

export enum AngleType {ON_MOVEMET, ON_EYE}
