import {Zombie} from '../zombies/zombie';
import {ZombieGameAbstractLevel} from './zombie-game-level';
import {TowerGun1} from '../towers/tower-gun-1';

export class Level1 extends ZombieGameAbstractLevel {

  constructor() {
    super(1, 4, 1500, '#3c3f41', '#f7ffb4');
  }

  initLevelScenario(): void {
    // vertical line of tower-guns
    let towerX = Math.floor(this.game.worldSize.x/2) + 30;
    let towerY = Math.floor(this.game.worldSize.y/2) + 30;
    let stepY = 70;
    let towersNumber = 5;
    towerY -= stepY * Math.floor(towersNumber / 2);
    for (let i = 0; i < towersNumber; i++) {
      this.game.add( new TowerGun1(towerX, towerY) );
      towerY += stepY;
    }
  }

  nextWave(): void {
    let zr = 30;
         if (this.waveCounter == 1 ) { this.game.add( new Zombie(zr, zr) ); }
    else if (this.waveCounter == 2 ) { this.game.add( new Zombie(this.game.worldSize.x-zr, zr) ); }
    else if (this.waveCounter == 3 ) { this.game.add( new Zombie(this.game.worldSize.x-zr, this.game.worldSize.y-zr) ); }
    else if (this.waveCounter == 4 ) { this.game.add( new Zombie(zr,this.game.worldSize.y-zr) ); }
  }


}
