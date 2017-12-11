import {Pos} from './position';

export class ObjectFrame extends Pos{

  public w: number;
  public h: number;

  constructor(left: number, top: number, w: number, h: number) {
    super(left, top);
    this.w = w;
    this.h = h;
  }
}
