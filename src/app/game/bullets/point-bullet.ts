import {Vector} from '../../../lib/game-core/vector';
import {Zombie} from '../zombies/zombie';
import {SimpleGameObj} from '../../../lib/game-core/objects/simple-draw-game-obj';

export class PointBullet extends SimpleGameObj{

  private attack: number;
  private color: string;
  private len: number;



  constructor(x: number, y: number, attack: number, calibr: number, color: string, direction: Vector) {
    super(x, y);
    this.r = calibr;
    this.sValMax = 20;
    this.sVal = this.sValMax;
    this.attack = attack;
    this.color = color;
    this.setDirection( direction );
    this.len = 3 + calibr*2;
  }

  draw(): void {
    let ctx = this.game.ctx;
    let path = new Path2D();
    path.moveTo(this.p.x, this.p.y);
    path.lineTo(this.p.x + this.len * this.sd.x, this.p.y + this.len * this.sd.y);
    ctx.lineWidth = this.r;
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
