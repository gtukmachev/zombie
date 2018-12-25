import {Zombie} from '../zombies/zombie';
import {ZombieGameAbstractLevel} from './zombie-game-level';
import {TowerGun1} from '../towers/tower-gun-1';

export class Level2 extends ZombieGameAbstractLevel {
  private rnd01: number;
  private XorY: boolean;
  private zs: number;
  private dt: number;

  constructor() {
    super(2, 80, 500, '#ff2236', '#f8fbff');
  }

  initLevelScenario(): void {
    const sx = this.game.worldSize.x;
    const sy = this.game.worldSize.y;
    const step = 200;
    this.game.add( new TowerGun1(     step,      step) );
    this.game.add( new TowerGun1(sx - step,      step) );
    this.game.add( new TowerGun1(     step, sy - step) );
    this.game.add( new TowerGun1(sx - step, sy - step) );
  }

  public nextWave(): void {
    let zx, zy :number;

    if (this.waveCounter == 1
      || this.waveCounter == 20
      || this.waveCounter == 40
      || this.waveCounter == 60
    ) {
      this.rnd01 = Math.round(Math.random());
      this.XorY = Math.random() > 0.5;
      this.zs = 0;
      this.dt = 1;
    }

    if (this.XorY) { zx = this.rnd01    * this.game.worldSize.x; zy = this.game.worldSize.y/2 + ( this.zs * 25 )*this.dt; }
    else           { zx = this.game.worldSize.x/2 + ( this.zs * 30 )*this.dt; zy = this.rnd01  * this.game.worldSize.y;}

    this.game.add( new Zombie( zx, zy ) );


    this.zs++;
    this.dt = -this.dt;
  }


}
