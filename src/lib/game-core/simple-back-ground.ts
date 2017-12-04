import {GameObject} from './game-object';
import {Game} from './game';

export class SimpleBackGround extends GameObject {

  public isDrawable = true;
  public color: string | CanvasGradient | CanvasPattern;

  constructor (field: Game, color: string | CanvasGradient | CanvasPattern) {
    super(field, 0, 0);
    this.color = color;
  }


  draw (): void {
    // Draw background (which also effectively clears any previous drawing)
    this.field.ctx.fillStyle = this.color;
    this.field.ctx.fillRect(0, 0, this.field.worldSize.x, this.field.worldSize.y);
  }

  beforeTurn (): void {
  }

  turn (): void {
  }

  afterTurn (): void {
  }
}
