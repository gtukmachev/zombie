import {AbstractPhysicMover} from './abstract-phisic-mover';
import {Vector} from '../vector';
import {Subscription} from 'rxjs/Subscription';
import {KeyboardEventType} from '../events/game-keyboard-event';
import {Game2} from '../game-2';


export class ManageableMoverAWED extends AbstractPhysicMover {

  private _m_up = false;
  private _m_down = false;
  private _m_right = false;
  private _m_left = false;

  private keyboardSubscription: Subscription;

  private _targetPoint: Vector = new Vector(0,0);

  targetPoint(): Vector {

    if (this.gObj.sValMax === 0) { return this.gObj.p; }

    const l = this.gObj.sValMax;
    const o = 0;

    if      (  this._m_up && !this._m_down && !this._m_right && !this._m_left) { this._targetPoint.setAsOffsetOf_xy(this.gObj.pBefore,  o, -l )}
    else if (  this._m_up && !this._m_down &&  this._m_right && !this._m_left) { this._targetPoint.setAsOffsetOf_xy(this.gObj.pBefore,  l, -l )}
    else if ( !this._m_up && !this._m_down &&  this._m_right && !this._m_left) { this._targetPoint.setAsOffsetOf_xy(this.gObj.pBefore,  l,  o )}
    else if ( !this._m_up &&  this._m_down &&  this._m_right && !this._m_left) { this._targetPoint.setAsOffsetOf_xy(this.gObj.pBefore,  l,  l )}
    else if ( !this._m_up &&  this._m_down && !this._m_right && !this._m_left) { this._targetPoint.setAsOffsetOf_xy(this.gObj.pBefore,  o,  l )}
    else if ( !this._m_up &&  this._m_down && !this._m_right &&  this._m_left) { this._targetPoint.setAsOffsetOf_xy(this.gObj.pBefore, -l,  l )}
    else if ( !this._m_up && !this._m_down && !this._m_right &&  this._m_left) { this._targetPoint.setAsOffsetOf_xy(this.gObj.pBefore, -l,  o )}
    else if (  this._m_up && !this._m_down && !this._m_right &&  this._m_left) { this._targetPoint.setAsOffsetOf_xy(this.gObj.pBefore, -l, -l )}
    else                                                                       { return this.gObj.p;}

    return this._targetPoint;
  }

  public onAddIntoGame(game: Game2): void {
    super.onAddIntoGame(game);

    this.keyboardSubscription = game.keyboard.subscribe(e => {
      if (e.type === KeyboardEventType.DOWN) { this.onKeyDown(e.event); }
      else if (e.type === KeyboardEventType.UP)   { this.onKeyUp(e.event); }
    });

  }

  public onRemovingFromGame(): void {
    super.onRemovingFromGame();
    this.keyboardSubscription.unsubscribe();
  }


  public onKeyDown(event: KeyboardEvent) {
    if      (event.code === 'KeyW') {this._m_up    = true; this._m_down  = false; }
    else if (event.code === 'KeyS') {this._m_down  = true; this._m_up    = false; }
    else if (event.code === 'KeyA') {this._m_left  = true; this._m_right = false; }
    else if (event.code === 'KeyD') {this._m_right = true; this._m_left  = false; }
  }

  public onKeyUp(event: KeyboardEvent) {
    if      (event.code === 'KeyW') {this._m_up    = false; }
    else if (event.code === 'KeyS') {this._m_down  = false; }
    else if (event.code === 'KeyA') {this._m_left  = false; }
    else if (event.code === 'KeyD') {this._m_right = false; }
  }



}
