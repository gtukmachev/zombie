import {GameObject} from './game-object';
import {Game} from './game';

export class WorldFrameObject extends GameObject {

  public isDrawable = true;
  public color: string | CanvasGradient | CanvasPattern;

  constructor (field: Game, color: string | CanvasGradient | CanvasPattern) {
    super(field, 0, 0);
    this.color = color;
  }


  draw (): void {
    const ctx = this.game.ctx;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 5;
    ctx.strokeRect( 0,0, this.game.worldSize.x, this.game.worldSize.y);

  }

  beforeTurn (): void {
  }

  turn (): void {
  }

  afterTurn (): void {
  }
}
