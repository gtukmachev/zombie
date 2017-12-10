import {Pos} from '../position';

export enum MouseEventType {UP, DOWN, CLICK, MOVE, DBL_CLICK, ENTER, LEAVE}

export class GameMouseEvent {
  constructor(mouseEvent: MouseEvent, type: MouseEventType, gamePoint: Pos) {
    this._event = mouseEvent;
    this._type = type;
    this._gamePoint = gamePoint;
  }

  private _event: MouseEvent;
      get event(): MouseEvent { return this._event; }

  private _type: MouseEventType;
      get type(): MouseEventType {return this._type; }

  private _gamePoint: Pos;
      get gamePoint(): Pos { return this._gamePoint; }

}
