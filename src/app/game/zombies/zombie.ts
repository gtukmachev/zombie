
import {GameObject} from '../../../lib/game-core/game-object';
import {Game} from '../../../lib/game-core/game';
import {Pos} from '../../../lib/game-core/position';

export class Zombie extends GameObject{

  isDrawable = true;


  constructor(game: Game, x: number, y: number) {
    super(game, x, y);
    this.speed = 1.5;
  }

  draw(): void {
    let r = 10;
    let l = 20;
    let ctx = this.game.ctx;
    let path = new Path2D();
    path.moveTo(this.p.x, this.p.y);
    path.lineTo(this.p.x + l * this.directionVector.x, this.p.y + l * this.directionVector.y);
    ctx.lineWidth = 3;
    ctx.strokeStyle ='#9cb9b7';
    ctx.stroke(path);

    this.fcCircle(this.p.x, this.p.y, r, '#9cb9b7', '#aa0600')
  }

  beforeTurn(): void {
    this.setDirectionOn( this.game.actor.p );
  }

  turn(): void {
    this.moveForward();
    if (this.isOutOfField()) { this.game.markForDelete(this) }

  }

  afterTurn(): void {
  }
}
