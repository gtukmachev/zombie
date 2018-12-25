import {Zombie} from '../zombies/zombie';
import {ZombieGameAbstractLevel} from './zombie-game-level';
import {Vector} from '../../../lib/game-core/vector';
import {TowerGun1} from '../towers/tower-gun-1';

export class Level3 extends ZombieGameAbstractLevel {


  constructor() {
    super(3, 4, 5000, '#41181f', '#ff6524');
  }

  initLevelScenario(): void {
    // circle of tower-guns
    let center = this.game.worldSize.devide(2).floorThis();
    let radius = 150;
    let towersNumber = 7;
    let angle = (Math.PI*2) / towersNumber;
    let angleVector = new Vector(1,1);
    for (let i = 0; i < towersNumber; i++) {
      angleVector.setAsAngleOf(angle * i).multiplyThis(radius);
      this.game.add( new TowerGun1(center.x + angleVector.x, center.y + angleVector.y) );
    }
  }

  public nextWave(): void {
    let zx, zy :number;

    for (let i=0; i<2; i++) {
      let rnd01 = Math.round(Math.random());
      let XorY = Math.random() > 0.5;

      for (let j=0; j<10; j++) {
        if (XorY) { zx = rnd01         * this.game.worldSize.x; zy = Math.random() * this.game.worldSize.y; }
        else      { zx = Math.random() * this.game.worldSize.x; zy = rnd01         * this.game.worldSize.y;}
        this.game.add( new Zombie( zx, zy ) );
      }

    }
  }


}
