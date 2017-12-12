import {GameObject} from '../../../lib/game-core/game-object';
import {Actor} from '../actor/actor';

export class Zombie extends GameObject{

  public r = 12;

  constructor(x: number, y: number) {
    super(x, y);
    this.speed = 0.7;

    this.withHelth(3, 15);
  }

  private checkActorDamage() {
    if (this.helth <= 0) return;

    this.game.matrix.applyForNearestObjects(this, (actor) => { if (actor instanceof Actor) {
        if (this.p.distanceTo( actor.p ) <= (this.r + actor.r ) ) {
          actor.damage( 1 );
        }
    }});
  }


  draw(): void {
    let subr = this.r - 3;
    let k = this.getDeathStageK();
    let r = k < 1 ? (subr * k)     :  subr;
    let l = k < 1 ? (subr*2.5 * k) : (subr*2.5);

    let ctx = this.game.ctx;
    let path = new Path2D();
    path.moveTo(this.p.x, this.p.y);
    path.lineTo(this.p.x + l * this.directionVector.x, this.p.y + l * this.directionVector.y);
    ctx.lineWidth = 1+this.helth;

    let strokeStyle = '#9cb9b7';
    let fillStyle = '#aa0600';

    ctx.strokeStyle = strokeStyle;
    ctx.stroke(path);

    this.fcCircle(this.p.x, this.p.y, r, strokeStyle, fillStyle);
  }

  beforeTurn(): void {
    this.checkActorDamage();

    this.setDirectionOn( this.game.actor.p );
  }

  turn(): void {
    if (this.helth > 0) { this.moveForward(); }
  }

  afterTurn(): void {
  }

}
