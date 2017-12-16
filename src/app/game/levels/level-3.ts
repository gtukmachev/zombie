import {Zombie} from '../zombies/zombie';
import {ZombieGameAbstractLevel} from './zombie-game-level';

export class Level3 extends ZombieGameAbstractLevel {


  constructor() {
    super(3, 4, 5000, '#41181f', '#ff6524');
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
