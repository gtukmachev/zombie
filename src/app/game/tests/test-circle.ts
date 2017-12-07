

import {GameObject} from '../../../lib/game-core/game-object';
import {Game} from '../../../lib/game-core/game';
import {TestLine} from './test-line';
import {Pos} from '../../../lib/game-core/position';

export class TestCircle extends GameObject {

  isDrawable = true;
  line: TestLine;

  constructor(game: Game, line: TestLine, x: number, y: number) {
    super(game, x, y);
    this.r = 200;
    this.line = line;
  }

  draw(): void {

    let x1 = this.p.x;
    let y1 = this.p.y;

    let ctx = this.game.ctx;

    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    this.strokeCircle(x1,y1, this.r, '#569bff')


    // line: y = kx + t
    let k = this.line.directionVector.y / this.line.directionVector.x;
    let t = this.line.p.x;

    //               2        2   2
    // circle: (x-Xc) + (y-Yc) = R

    let Xc = this.p.x;
    let Yc = this.p.y;
    let R  = this.r;


    //   2
    // ax + bx + c = 0

    let a = (1+k*k);
    let b = (2*t*k - 2*Xc - 2*Yc*k);
    let c = ( ( Xc*Xc + Yc*Yc - R*R ) - 2*Yc*t )

    // solution of the square equation
    let res1: Pos = null;
    let res2: Pos = null;

    let D = b*b - 4*a*c;

    if (D < 0) {

    } else if (D == 0) {
      res1 = new Pos(0,0);
      res1.x = (-b)/(2*a);
      res1.y = k*res1.x + t;

    } else {
      res1 = new Pos(0,0);
      res1.x = (-b + Math.sqrt(D)) / (2*a);
      res1.y = k*res1.x + t;

      res2 = new Pos(0,0);
      res2.x = (-b - Math.sqrt(D)) / (2*a);
      res2.y = k*res1.x + t;
    }

    if (res1 !== null) {
      ctx.strokeStyle = '#ff54ea';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(res1.x, res1.y);
      ctx.lineTo(res1.x, res1.y);
      ctx.stroke();
    }

    if (res2 !== null) {
      ctx.strokeStyle = '#ff2236';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(res2.x, res2.y);
      ctx.lineTo(res2.x, res2.y);
      ctx.stroke();
    }

  }


  beforeTurn(): void {
  }

  turn(): void {
  }



  afterTurn(): void {
  }

  public onMouseDown(event: MouseEvent) {
    if (event.which === 3) {
      this.moveOn(this.game.mousePos)
    }
  }

}
