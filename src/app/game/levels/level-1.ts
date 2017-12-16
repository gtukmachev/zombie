import {Zombie} from '../zombies/zombie';
import {ZombieGameAbstractLevel} from './zombie-game-level';

export class Level1 extends ZombieGameAbstractLevel {

  constructor() {
    super(1, 4, 1500, '#3c3f41', '#f7ffb4');
  }


  nextWave(): void {
    let zr = 30;
         if (this.waveCounter === 1 ) { this.game.add( new Zombie(zr, zr) ); }
    else if (this.waveCounter === 2 ) { this.game.add( new Zombie(this.game.worldSize.x-zr, zr) ); }
    else if (this.waveCounter === 3 ) { this.game.add( new Zombie(this.game.worldSize.x-zr, this.game.worldSize.y-zr) ); }
    else if (this.waveCounter === 4 ) { this.game.add( new Zombie(zr,this.game.worldSize.y-zr) ); }
  }


}
