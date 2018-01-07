import {SimpleGameObj} from '../simple-draw-game-obj';

export class SimpleBackGround extends SimpleGameObj {

  public color: string | CanvasGradient | CanvasPattern;

  constructor (color: string | CanvasGradient | CanvasPattern) {
    super(0,0);
    this.color = color;
  }


  public draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, this.game.worldSize.x, this.game.worldSize.y);
  }
}
