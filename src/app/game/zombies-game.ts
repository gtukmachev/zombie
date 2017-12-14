import {Game} from '../../lib/game-core/game';
import {TransparentBackground} from '../../lib/game-core/transparent-background';
import {GameObject} from '../../lib/game-core/game-object';
import {WorldFrameObject} from '../../lib/game-core/world-frame-object';
import {Actor} from './actor/actor';
import {Zombie} from './zombies/zombie';
import {TimeCounter} from '../../lib/game-core/time-counter';
import {TextGameObject} from '../../lib/game-core/text-game-object';

export class ZombiesGame extends Game {

  //showOuterFrames = true;

  backGround: GameObject;
  actor: Actor;

  private ztc = new TimeCounter(1000);

  constructor () { super(); }


  public initLevel(levelNumber: number): void {

    const xSize = this.worldSize.x;
    const ySize = this.worldSize.y;

    this.backGround  = new TransparentBackground();
    this.actor       = new Actor(Math.floor(xSize / 2), Math.floor(ySize / 2) );
    this.followingActor = false;

    this.add( this.backGround  );
    //this.add( new MatrixVisualizerGameObject('15px Arial', '#6b6e70', '#f68200' ) );

    this.add( this.actor       );

    let zr = 30;
    this.add( new Zombie(zr,       zr) );
    this.add( new Zombie(xSize-zr, zr) );
    this.add( new Zombie(xSize-zr, ySize-zr) );
    this.add( new Zombie(zr,       ySize-zr) );

    this.add( new WorldFrameObject('#f3ffa2') );

    this.ztc.actionPeriodMillis = 1000;
    //this.gameTimeFrame = 20;

  }

  public loose(): void {
    super.loose();
    this.add( new TextGameObject('Game Over !', '80px Arial', '#ff7716', '#6b6e70' ) );
  }

  public gameActionTurn(): void {
    super.gameActionTurn();

    if (this.ztc.isItTime()) {
      this.ztc.fixLastChecking();
      if (this.ztc.actionPeriodMillis > 140) { this.ztc.actionPeriodMillis -= 20;}


      let factor = ZombiesGame.rnd01();
      let zx, zy :number;

      if (Math.random() > 0.5) { zx = factor        * this.worldSize.x; zy = Math.random() * this.worldSize.y; }
      else                     { zx = Math.random() * this.worldSize.x; zy = factor        * this.worldSize.y;}


      this.add( new Zombie( zx, zy ) );
    }
  }

  static rnd01() { return Math.round(Math.random()); }

}
