
import {GameObject} from '../../../lib/game-core/game-object';
import {Game} from '../../../lib/game-core/game';
import {Pos} from '../../../lib/game-core/position';

export class Zombie extends GameObject{

  isDrawable = true;

  helth: number = 3;
  hideStage: number = 100;

  constructor(game: Game, x: number, y: number) {
    super(game, x, y);
    this.speed = 1.5;
  }

  draw(): void {
    let k = this.hideStage / 100;

    let r = k < 1 ? 10 * k : 10;
    let l = k < 1 ? 20 * k : 20;
    let ctx = this.game.ctx;
    let path = new Path2D();
    path.moveTo(this.p.x, this.p.y);
    path.lineTo(this.p.x + l * this.directionVector.x, this.p.y + l * this.directionVector.y);
    ctx.lineWidth = 1+this.helth;

    let strokeStyle: string;
    let fillStyle: string;

    strokeStyle = 'rgb(#9c, #b9, #b7)';
    fillStyle   = 'rgb(#aa, #06, #00)';


/*
    if (this.hideStage < 10) {
      strokeStyle = 'rgba(#9c, #b9, #b7, ' + k + ')';
      fillStyle   = 'rgba(#aa, #06, #00, ' + k + ')';
      ctx.globalCompositeOperation = 'destination-atop';
    } else {
    }
*/



    ctx.strokeStyle = strokeStyle;
    ctx.stroke(path);

    this.fcCircle(this.p.x, this.p.y, r, strokeStyle, fillStyle);

  }

  beforeTurn(): void {
    this.setDirectionOn( this.game.actor.p );

    if (this.helth <= 0) {
      this.hideStage -= 7;
      this.hideStage = this.hideStage < 0 ? 0 : this.hideStage;
    }

    if (this.helth <= 0 && this.hideStage <= 0) {
      this.game.markForDelete(this)
    }

  }

  turn(): void {
    if (this.helth > 0) { this.moveForward(); }
  }

  afterTurn(): void {
  }

  public damage(damageVal: number): void {
    if (this.helth > 0) {
      this.helth -= damageVal;
    }

  }

}
