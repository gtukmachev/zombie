import {GameObject} from '../../../lib/game-core/game-object';

export class Zombie extends GameObject{

  public r = 10;

  constructor(x: number, y: number) {
    super(x, y);
    this.speed = 0.7;

    this.withHelth(3, 15);
  }

  private checkActorDamage() {

    if ( this.helth > 0 && this.game.actor.p.distanceTo( this.p ) <= (this.r + this.game.actor.r ) ) {
      this.game.actor.damage( 1 );
    }

  }


  draw(): void {
    let k = this.getDeathStageK();
    let r = k < 1 ? this.r * k : this.r;
    let l = k < 1 ? (this.r*2.5) * k : (this.r*2.5);

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
