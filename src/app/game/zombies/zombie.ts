import {Actor} from '../actor/actor';
import {CachedFilmGameObject, FilmFrameDescription} from '../../../lib/game-core/cached-film-game-object';
import {Vector} from '../../../lib/game-core/vector';

export class Zombie extends CachedFilmGameObject<ZombieFrameDetails>{

  static PIx2 = Math.PI * 2;

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


  getCurrentFilmFrameDescription(): FilmFrameDescription<ZombieFrameDetails> {

    const state = new ZombieFrameDetails(
      this.helth
    );

    const center = Math.floor(this.r * 2.5 );
    const sz = center * 2;

    return new FilmFrameDescription<ZombieFrameDetails>(state.getKey(),
      new Vector(sz, sz),
      new Vector(center, center),
      state
    );
  }

  drawFrame(frameCtx: CanvasRenderingContext2D, frameDescr: FilmFrameDescription<ZombieFrameDetails>) {

    let ctx = frameCtx;
    let image: HTMLImageElement = document.getElementById("zi1") as HTMLImageElement;
    ctx.drawImage(image, 0,0, frameDescr.size.x,frameDescr.size.y);
/*
    const strokeStyle = '#9cb9b7';
    const fillStyle = '#aa0600';

    const subr = this.r - 3;
    let l = frameDescr.center.x;

    let path = new Path2D();
    path.moveTo(frameDescr.center.x, frameDescr.center.y);
    path.lineTo(frameDescr.center.x + l, frameDescr.center.y );
    ctx.lineWidth = 1 + frameDescr.details.helth;

    ctx.strokeStyle = strokeStyle;
    ctx.stroke(path);

    ctx.beginPath();
    ctx.fillStyle = fillStyle;
    ctx.arc(frameDescr.center.x, frameDescr.center.y, subr, 0, Zombie.PIx2);
    ctx.fill();
    ctx.stroke();

    ctx.strokeRect(0,0, frameDescr.size.x, frameDescr.size.y)
*/
  }

  beforeTurn(): void {
    this.checkActorDamage();

    this.setDirectionOn( this.game.actor.p );
  }

  turn(): void {
    if (this.helth > 0) { this.moveForward(); }
  }

  afterTurn(): void {
    this.scale = this.getDeathStageK();
  }

}

export class ZombieFrameDetails {
  helth: number;

  constructor(helth: number) {
    this.helth = helth;
  }

  public getKey(): string {
    return `z-${this.helth}`;
  }
}
