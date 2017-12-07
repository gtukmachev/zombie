

import {GameObject} from '../../../lib/game-core/game-object';
import {Game} from '../../../lib/game-core/game';

export class TestCircle extends GameObject {

  isDrawable = true;


  constructor(game: Game, x: number, y: number) {
    super(game, x, y);
    this.r = 200;
  }

  draw(): void {

    let x1 = this.p.x;
    let y1 = this.p.y;

    let ctx = this.game.ctx;

    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    this.strokeCircle(x1,y1, this.r, '#569bff')

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
