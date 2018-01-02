import {Vector} from './vector';

export class ObjectFrame extends Vector{

  public w: number;
  public h: number;

  constructor(left: number, top: number, w: number, h: number) {
    super(left, top);
    this.w = w;
    this.h = h;
  }
}
