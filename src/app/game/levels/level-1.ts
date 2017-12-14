import {Level} from './level';
import {TimeCounter} from '../../../lib/game-core/time-counter';
import {Zombie} from '../zombies/zombie';

export class Level1 extends Level {

  constructor() { super(1); }

  private ztc: TimeCounter;

  initLevelScenario(): void {
    this.ztc = new TimeCounter(1000);

    const xSize = this.game.worldSize.x;
    const ySize = this.game.worldSize.y;
    let zr = 30;
    this.game.add( new Zombie(zr,       zr) );
    this.game.add( new Zombie(xSize-zr, zr) );
    this.game.add( new Zombie(xSize-zr, ySize-zr) );
    this.game.add( new Zombie(zr,       ySize-zr) );

  }


  beforeTurn(): void {

    if (this.ztc.isItTime()) {
      this.ztc.fixLastChecking();
      if (this.ztc.actionPeriodMillis > 140) { this.ztc.actionPeriodMillis -= 20;}


      let factor = Math.round(Math.random());
      let zx, zy :number;

      if (Math.random() > 0.5) { zx = factor        * this.game.worldSize.x; zy = Math.random() * this.game.worldSize.y; }
      else                     { zx = Math.random() * this.game.worldSize.x; zy = factor        * this.game.worldSize.y;}
      this.game.add( new Zombie( zx, zy ) );
    }


  }
}
