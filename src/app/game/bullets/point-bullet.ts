import {GameObject} from '../../../lib/game-core/game-object';
import {Game} from '../../../lib/game-core/game';
import {Vector} from '../../../lib/game-core/vector';
import {Zombie} from '../zombies/zombie';

export class PointBullet extends GameObject{

  atack = 1;

  r = 0.5;


  constructor(game: Game, x: number, y: number, direction: Vector) {
    super(x, y);

    this.speed = 20;
    this.setDirection( direction );

  }

  draw(): void {
    let ctx = this.game.ctx;
    let path = new Path2D();
    path.moveTo(this.p.x, this.p.y);
    path.lineTo(this.p.x + 7 * this.directionVector.x, this.p.y + 7 * this.directionVector.y);
    ctx.lineWidth = 3;
    ctx.strokeStyle ='#b97686';
    ctx.stroke(path);
  }

  beforeTurn(): void {
    this.checkForZombie()
  }

  turn(): void {
    this.moveForward();
    if (this.isOutOfField()) { this.game.markForDelete(this) }

  }

  afterTurn(): void {
  }

  checkForZombie(): void {
    this.game.matrix.applyForNearestObjects(this, (z) => { if (z instanceof Zombie) {
      if (z.helth > 0 && this.p.distanceTo( z.p ) <= (this.r + (z.r + z.helth)*2 ) ) {
        z.damage(this.atack);
        this.game.markForDelete(this);
      }
    }});
  }


}
