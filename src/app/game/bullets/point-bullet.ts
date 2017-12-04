
import {GameObject} from '../../../lib/game-core/game-object';
import {Game} from '../../../lib/game-core/game';
import {Pos} from '../../../lib/game-core/position';

export class PointBullet extends GameObject{

  isDrawable = true;


  constructor(game: Game, x: number, y: number, direction: Pos) {
    super(game, x, y);

    this.speed = 20;
    this.setDirection( direction );

  }

  draw(): void {
    let ctx = this.field.ctx;
    let path = new Path2D();
    path.moveTo(this.p.x, this.p.y);
    path.lineTo(this.p.x + 7 * this.directionVector.x, this.p.y + 7 * this.directionVector.y);
    ctx.lineWidth = 3;
    ctx.strokeStyle ='#b97686';
    ctx.stroke(path);
  }

  beforeTurn(): void {
  }

  turn(): void {
    this.moveForward();
    if (this.isOutOfField()) { this.field.markForDelete(this) }

  }

  afterTurn(): void {
  }
}
