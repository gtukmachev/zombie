
import {GameObject} from '../../../lib/game-core/game-object';
import {Game} from '../../../lib/game-core/game';
import {Pos} from '../../../lib/game-core/position';
import {Zombie} from '../zombies/zombie';

export class PointBullet extends GameObject{

  isDrawable = true;

  atack = 1;

  constructor(game: Game, x: number, y: number, direction: Pos) {
    super(game, x, y);

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

    for (let i = 0; i < this.game.gameObjects.length; i++) {
      let go: GameObject = this.game.gameObjects[i];
      if (go instanceof Zombie) {
        let z: Zombie = go;

        if (this.p.distanceTo(z.p) < (z.r + z.helth)) {
          z.damage(this.atack);
          this.game.markForDelete(this);
        }

      }
    }

  }
}
