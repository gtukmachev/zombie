import {SimpleGameObj} from '../simple-draw-game-obj';

export class WorldFrameObject extends SimpleGameObj {

  public color: string | CanvasGradient | CanvasPattern;

  constructor (color: string | CanvasGradient | CanvasPattern) {
    super(0,0);
    this.color = color;
  }


  draw(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 5;
    ctx.strokeRect( 0,0, this.game.worldSize.x, this.game.worldSize.y);
  }

}
