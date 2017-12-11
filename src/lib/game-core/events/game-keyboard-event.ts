export enum KeyboardEventType {UP, DOWN, PRESS}

export class GameKeyboardEvent {

  constructor(event: KeyboardEvent, type: KeyboardEventType) {
    this._event = event;
    this._type = type;
  }

  private _event: KeyboardEvent;
      get event(): KeyboardEvent { return this._event; }

  private _type: KeyboardEventType;
      get type(): KeyboardEventType { return this._type; }

}
