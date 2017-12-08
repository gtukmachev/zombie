

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

    let res = this.p.thisCircleWirhLineCrossing(this.line.p, this.line.directionVector, this.r)

    const ctx = this.game.ctx;

    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    this.strokeCircle(this.p.x, this.p.y, this.r, '#569bff')

    const color = '#ff4400';
    ctx.strokeStyle = color;
    for (let i = 0; i < res.length; i++) {
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(res[i].x, res[i].y);
      ctx.lineTo(res[i].x, res[i].y);
      ctx.stroke();
      this.strokeCircle(res[i].x, res[i].y, 10, color)
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
