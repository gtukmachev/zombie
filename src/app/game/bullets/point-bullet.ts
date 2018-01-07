import {Vector} from '../../../lib/game-core/vector';
import {Zombie} from '../zombies/zombie';
import {SimpleGameObj} from '../../../lib/game-core/objects/simple-draw-game-obj';

export class PointBullet extends SimpleGameObj{

  private attack: number;
  private color: string;



  constructor(x: number, y: number, attack: number, color: string, direction: Vector) {
    super(x, y);
    this.r = 0.5;
    this.sValMax = 20;
    this.sVal = this.sValMax;
    this.attack = attack;
    this.color = color;
    this.setDirection( direction );
  }

  draw(): void {
    let ctx = this.game.ctx;
    let path = new Path2D();
    path.moveTo(this.p.x, this.p.y);
    path.lineTo(this.p.x + 7 * this.sd.x, this.p.y + 7 * this.sd.y);
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.stroke(path);
  }

  beforeTurn(): void {
    this.checkForZombie(); // todo - move to crossing
  }


  public move(): void {
    this.moveForward();
    if (this.isOutOfField()) { this.game.markForDelete(this) }
  }

  checkForZombie(): void {
    this.game.matrix.applyForNearestObjects(this, (z) => {
      if (z instanceof Zombie) {
        if (z.helth > 0 && this.p.distanceTo( z.p ) <= (this.r + (z.r + z.helth)*2 ) ) {
          z.damage(this.attack);
          this.game.markForDelete(this);

        }
      }
    });
  }


}
