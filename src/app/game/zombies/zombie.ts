import {Actor} from '../actor/actor';
import {SuitsDrawer, SuitsFrameDescription} from '../../../lib/game-core/drawers/suits-drawer';
import {LiveGameObj} from '../../../lib/game-core/objects/live-game-obj';
import {FollowerMover} from '../../../lib/game-core/movers/follower-mover';
import {Game2} from '../../../lib/game-core/game-2';

export class Zombie extends LiveGameObj {

  constructor(x: number, y: number) {
    super(x, y, new ZombieSuitsDrawer(), new FollowerMover<Zombie>(null),  3, 15);
    this.r = 24;
    this.sValMax = 0.7;
    this.sVal = this.sValMax;
  }

  private checkActorDamage() {
    if (this.helth <= 0) return;

    this.game.matrix.applyForNearestObjects(this, (actor) => { if (actor instanceof Actor) {
        if (this.p.distanceTo( actor.p ) <= (this.r + actor.r ) ) {
          actor.damage( 1 );
        }
    }});
  }


  public onAddIntoGame(game: Game2): void {
    super.onAddIntoGame(game);
    (this.mover as FollowerMover<Zombie>).targetObject = game.actor;
  }

  beforeTurn(): void {
    super.beforeTurn();
    this.checkActorDamage();
    this.setDirectionOn( this.game.actor.p );
  }

  afterTurn(): void {
    this.scale = this.getDeathStageK();
  }

}

//todo: move into ImagesSuitsDrawer
class ZombieSuitsDrawer extends SuitsDrawer<Zombie> {

  drawSuit(suitNumber: number): HTMLImageElement | HTMLCanvasElement | ImageBitmap | SuitsFrameDescription {
    const sz = this.gObj.r * 2;
    const canvas = this.createCanvas(sz, sz);
    const ctx = canvas.getContext('2d');
    const image: HTMLImageElement = document.getElementById("zi"+this.currentSuitNumber) as HTMLImageElement;

    if ( this.currentSuitNumber === 2 || this.currentSuitNumber === 5 ) {
      ctx.setTransform(-1, 0, 0, 1, sz, 0); // inversion: left <--> right
    }
    ctx.drawImage(image, 0,0, sz, sz);
    return canvas;
  }
}
